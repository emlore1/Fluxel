(function () {
  "use strict";

  const clampByte = (value) => Math.max(0, Math.min(255, Math.round(value)));
  const clamp01 = (value) => Math.max(0, Math.min(1, value));

  function hashImage(image) {
    let hash = 2166136261;
    const stride = Math.max(4, Math.floor(image.data.length / 4096));
    for (let index = 0; index < image.data.length; index += stride) {
      hash ^= image.data[index];
      hash = Math.imul(hash, 16777619);
    }
    return `${image.width}x${image.height}-${(hash >>> 0).toString(36)}`;
  }

  function cloneImage(image) {
    return { ...image, data: new Uint8ClampedArray(image.data) };
  }

  function resize(image, requestedWidth, requestedHeight, sampling = "bilinear") {
    const width = Math.max(1, Math.min(4096, Math.round(requestedWidth)));
    const height = Math.max(1, Math.min(4096, Math.round(requestedHeight)));
    const data = new Uint8ClampedArray(width * height * 4);
    const scaleX = image.width / width;
    const scaleY = image.height / height;
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const target = (y * width + x) * 4;
        if (sampling === "nearest") {
          const sourceX = Math.min(image.width - 1, Math.floor((x + 0.5) * scaleX));
          const sourceY = Math.min(image.height - 1, Math.floor((y + 0.5) * scaleY));
          const source = (sourceY * image.width + sourceX) * 4;
          data.set(image.data.subarray(source, source + 4), target);
          continue;
        }
        const sourceX = Math.max(0, (x + 0.5) * scaleX - 0.5);
        const sourceY = Math.max(0, (y + 0.5) * scaleY - 0.5);
        const x0 = Math.floor(sourceX);
        const y0 = Math.floor(sourceY);
        const x1 = Math.min(image.width - 1, x0 + 1);
        const y1 = Math.min(image.height - 1, y0 + 1);
        const dx = sourceX - x0;
        const dy = sourceY - y0;
        for (let channel = 0; channel < 4; channel += 1) {
          const top = image.data[(y0 * image.width + x0) * 4 + channel] * (1 - dx) + image.data[(y0 * image.width + x1) * 4 + channel] * dx;
          const bottom = image.data[(y1 * image.width + x0) * 4 + channel] * (1 - dx) + image.data[(y1 * image.width + x1) * 4 + channel] * dx;
          data[target + channel] = top * (1 - dy) + bottom * dy;
        }
      }
    }
    return { width, height, data };
  }

  function brightnessContrast(image, brightness, contrast) {
    const output = cloneImage(image);
    const brightnessOffset = brightness * 2.55;
    const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
    for (let index = 0; index < output.data.length; index += 4) {
      for (let channel = 0; channel < 3; channel += 1) {
        output.data[index + channel] = clampByte(factor * (image.data[index + channel] - 128) + 128 + brightnessOffset);
      }
    }
    return output;
  }

  function blur(image, radiusValue) {
    const radius = Math.max(0, Math.min(24, Math.round(radiusValue)));
    if (!radius) return cloneImage(image);
    const horizontal = new Float32Array(image.data.length);
    const data = new Uint8ClampedArray(image.data.length);
    const diameter = radius * 2 + 1;
    for (let y = 0; y < image.height; y += 1) {
      const sum = [0, 0, 0, 0];
      for (let offset = -radius; offset <= radius; offset += 1) {
        const x = Math.max(0, Math.min(image.width - 1, offset));
        const source = (y * image.width + x) * 4;
        for (let channel = 0; channel < 4; channel += 1) sum[channel] += image.data[source + channel];
      }
      for (let x = 0; x < image.width; x += 1) {
        const target = (y * image.width + x) * 4;
        for (let channel = 0; channel < 4; channel += 1) horizontal[target + channel] = sum[channel] / diameter;
        const leaving = Math.max(0, x - radius);
        const entering = Math.min(image.width - 1, x + radius + 1);
        for (let channel = 0; channel < 4; channel += 1) sum[channel] += image.data[(y * image.width + entering) * 4 + channel] - image.data[(y * image.width + leaving) * 4 + channel];
      }
    }
    for (let x = 0; x < image.width; x += 1) {
      const sum = [0, 0, 0, 0];
      for (let offset = -radius; offset <= radius; offset += 1) {
        const y = Math.max(0, Math.min(image.height - 1, offset));
        const source = (y * image.width + x) * 4;
        for (let channel = 0; channel < 4; channel += 1) sum[channel] += horizontal[source + channel];
      }
      for (let y = 0; y < image.height; y += 1) {
        const target = (y * image.width + x) * 4;
        for (let channel = 0; channel < 4; channel += 1) data[target + channel] = sum[channel] / diameter;
        const leaving = Math.max(0, y - radius);
        const entering = Math.min(image.height - 1, y + radius + 1);
        for (let channel = 0; channel < 4; channel += 1) sum[channel] += horizontal[(entering * image.width + x) * 4 + channel] - horizontal[(leaving * image.width + x) * 4 + channel];
      }
    }
    return { ...image, data };
  }

  function grayscale(image, mixValue) {
    const mix = clamp01(mixValue / 100);
    const output = cloneImage(image);
    for (let index = 0; index < image.data.length; index += 4) {
      const luminance = image.data[index] * 0.2126 + image.data[index + 1] * 0.7152 + image.data[index + 2] * 0.0722;
      output.data[index] = image.data[index] * (1 - mix) + luminance * mix;
      output.data[index + 1] = image.data[index + 1] * (1 - mix) + luminance * mix;
      output.data[index + 2] = image.data[index + 2] * (1 - mix) + luminance * mix;
    }
    return output;
  }

  function crop(image, xValue, yValue, widthValue, heightValue) {
    const x = Math.max(0, Math.min(image.width - 1, Math.round(xValue)));
    const y = Math.max(0, Math.min(image.height - 1, Math.round(yValue)));
    const width = Math.max(1, Math.min(image.width - x, Math.round(widthValue)));
    const height = Math.max(1, Math.min(image.height - y, Math.round(heightValue)));
    const data = new Uint8ClampedArray(width * height * 4);
    for (let row = 0; row < height; row += 1) {
      const start = ((y + row) * image.width + x) * 4;
      data.set(image.data.subarray(start, start + width * 4), row * width * 4);
    }
    return { width, height, data };
  }

  function rotateFlip(image, angleValue, flipHorizontal, flipVertical) {
    const angle = ((Math.round(angleValue / 90) * 90) % 360 + 360) % 360;
    const swapped = angle === 90 || angle === 270;
    const width = swapped ? image.height : image.width;
    const height = swapped ? image.width : image.height;
    const data = new Uint8ClampedArray(width * height * 4);
    for (let y = 0; y < image.height; y += 1) {
      for (let x = 0; x < image.width; x += 1) {
        let targetX = x;
        let targetY = y;
        if (angle === 90) { targetX = image.height - 1 - y; targetY = x; }
        else if (angle === 180) { targetX = image.width - 1 - x; targetY = image.height - 1 - y; }
        else if (angle === 270) { targetX = y; targetY = image.width - 1 - x; }
        if (flipHorizontal) targetX = width - 1 - targetX;
        if (flipVertical) targetY = height - 1 - targetY;
        const source = (y * image.width + x) * 4;
        const target = (targetY * width + targetX) * 4;
        data.set(image.data.subarray(source, source + 4), target);
      }
    }
    return { width, height, data };
  }

  function rgbToHsl(red, green, blue) {
    const r = red / 255, g = green / 255, b = blue / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b), lightness = (max + min) / 2;
    if (max === min) return [0, 0, lightness];
    const difference = max - min;
    const saturation = lightness > 0.5 ? difference / (2 - max - min) : difference / (max + min);
    let hue = max === r ? (g - b) / difference + (g < b ? 6 : 0) : max === g ? (b - r) / difference + 2 : (r - g) / difference + 4;
    return [hue / 6, saturation, lightness];
  }

  function hueToRgb(p, q, value) {
    let t = value;
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  function hslToRgb(hue, saturation, lightness) {
    if (!saturation) return [lightness * 255, lightness * 255, lightness * 255];
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    return [hueToRgb(p, q, hue + 1 / 3) * 255, hueToRgb(p, q, hue) * 255, hueToRgb(p, q, hue - 1 / 3) * 255];
  }

  function hueSaturation(image, hueValue, saturationValue) {
    const output = cloneImage(image);
    for (let index = 0; index < image.data.length; index += 4) {
      let [hue, saturation, lightness] = rgbToHsl(image.data[index], image.data[index + 1], image.data[index + 2]);
      hue = (hue + hueValue / 360 + 1) % 1;
      saturation = clamp01(saturation * (1 + saturationValue / 100));
      const [red, green, blue] = hslToRgb(hue, saturation, lightness);
      output.data[index] = red;
      output.data[index + 1] = green;
      output.data[index + 2] = blue;
    }
    return output;
  }

  function sharpen(image, amountValue) {
    const amount = clamp01(amountValue / 100);
    const output = cloneImage(image);
    for (let y = 1; y < image.height - 1; y += 1) {
      for (let x = 1; x < image.width - 1; x += 1) {
        const index = (y * image.width + x) * 4;
        for (let channel = 0; channel < 3; channel += 1) {
          const center = image.data[index + channel];
          const neighbors = image.data[index - 4 + channel] + image.data[index + 4 + channel] + image.data[index - image.width * 4 + channel] + image.data[index + image.width * 4 + channel];
          output.data[index + channel] = clampByte(center + amount * (center * 4 - neighbors));
        }
      }
    }
    return output;
  }

  function edgeDetection(image, strengthValue) {
    const data = new Uint8ClampedArray(image.data.length);
    const luminance = new Float32Array(image.width * image.height);
    const strength = strengthValue / 100;
    for (let pixel = 0; pixel < luminance.length; pixel += 1) {
      const index = pixel * 4;
      luminance[pixel] = image.data[index] * 0.2126 + image.data[index + 1] * 0.7152 + image.data[index + 2] * 0.0722;
      data[index + 3] = image.data[index + 3];
    }
    for (let y = 1; y < image.height - 1; y += 1) {
      for (let x = 1; x < image.width - 1; x += 1) {
        const topLeft = luminance[(y - 1) * image.width + x - 1];
        const top = luminance[(y - 1) * image.width + x];
        const topRight = luminance[(y - 1) * image.width + x + 1];
        const left = luminance[y * image.width + x - 1];
        const right = luminance[y * image.width + x + 1];
        const bottomLeft = luminance[(y + 1) * image.width + x - 1];
        const bottom = luminance[(y + 1) * image.width + x];
        const bottomRight = luminance[(y + 1) * image.width + x + 1];
        const gx = -topLeft + topRight - 2 * left + 2 * right - bottomLeft + bottomRight;
        const gy = -topLeft - 2 * top - topRight + bottomLeft + 2 * bottom + bottomRight;
        const value = clampByte(Math.sqrt(gx * gx + gy * gy) * strength);
        const index = (y * image.width + x) * 4;
        data[index] = value; data[index + 1] = value; data[index + 2] = value;
      }
    }
    return { ...image, data };
  }

  function threshold(image, thresholdValue) {
    const output = cloneImage(image);
    for (let index = 0; index < image.data.length; index += 4) {
      const value = image.data[index] * 0.2126 + image.data[index + 1] * 0.7152 + image.data[index + 2] * 0.0722 >= thresholdValue ? 255 : 0;
      output.data[index] = value; output.data[index + 1] = value; output.data[index + 2] = value;
    }
    return output;
  }

  function levels(image, params) {
    const black = Math.max(0, Math.min(254, Number(params.blackPoint)));
    const white = Math.max(black + 1, Math.min(255, Number(params.whitePoint)));
    const gamma = Math.max(0.1, Math.min(4, Number(params.gamma)));
    const outputBlack = Math.max(0, Math.min(254, Number(params.outputBlack)));
    const outputWhite = Math.max(outputBlack + 1, Math.min(255, Number(params.outputWhite)));
    const output = cloneImage(image);
    for (let index = 0; index < image.data.length; index += 4) {
      for (let channel = 0; channel < 3; channel += 1) {
        const normalized = clamp01((image.data[index + channel] - black) / (white - black));
        output.data[index + channel] = outputBlack + Math.pow(normalized, 1 / gamma) * (outputWhite - outputBlack);
      }
    }
    return output;
  }

  function curves(image, params) {
    const fixedX = [0, 64, 128, 192, 255];
    const parsed = String(params.curve || "0,64,128,192,255").split(",").map(Number);
    const points = fixedX.map((x, index) => ({ x, y: clampByte(Number.isFinite(parsed[index]) ? parsed[index] : x) }));
    const lookup = new Uint8ClampedArray(256);
    for (let value = 0; value < 256; value += 1) {
      let segment = 0;
      while (segment < points.length - 2 && value > points[segment + 1].x) segment += 1;
      const left = points[segment], right = points[segment + 1];
      const amount = (value - left.x) / Math.max(1, right.x - left.x);
      lookup[value] = left.y + (right.y - left.y) * amount;
    }
    const output = cloneImage(image);
    const channel = String(params.channel || "rgb");
    const channels = channel === "red" ? [0] : channel === "green" ? [1] : channel === "blue" ? [2] : [0, 1, 2];
    for (let index = 0; index < image.data.length; index += 4) {
      for (const target of channels) output.data[index + target] = lookup[image.data[index + target]];
    }
    return output;
  }

  function colorGrade(image, params) {
    const exposure = Math.pow(2, Math.max(-4, Math.min(4, Number(params.exposure))));
    const gamma = Math.max(0.1, Math.min(4, Number(params.gamma)));
    const temperature = Math.max(-100, Math.min(100, Number(params.temperature))) / 100;
    const tint = Math.max(-100, Math.min(100, Number(params.tint))) / 100;
    const output = cloneImage(image);
    for (let index = 0; index < image.data.length; index += 4) {
      let red = 255 * Math.pow(clamp01((image.data[index] * exposure) / 255), 1 / gamma);
      let green = 255 * Math.pow(clamp01((image.data[index + 1] * exposure) / 255), 1 / gamma);
      let blue = 255 * Math.pow(clamp01((image.data[index + 2] * exposure) / 255), 1 / gamma);
      red += temperature * 34 + tint * 14;
      green -= tint * 24;
      blue -= temperature * 34 + tint * -14;
      output.data[index] = red; output.data[index + 1] = green; output.data[index + 2] = blue;
    }
    return output;
  }

  function blendChannel(base, layer, mode) {
    if (mode === "multiply") return (base * layer) / 255;
    if (mode === "screen") return 255 - ((255 - base) * (255 - layer)) / 255;
    if (mode === "overlay") return base < 128 ? (2 * base * layer) / 255 : 255 - (2 * (255 - base) * (255 - layer)) / 255;
    if (mode === "difference") return Math.abs(base - layer);
    return layer;
  }

  function blendImages(base, layer, params) {
    const fitted = layer.width === base.width && layer.height === base.height ? layer : resize(layer, base.width, base.height, "bilinear");
    const opacity = clamp01(Number(params.opacity) / 100);
    const mode = String(params.mode || "normal");
    const output = cloneImage(base);
    for (let index = 0; index < base.data.length; index += 4) {
      const alpha = opacity * (fitted.data[index + 3] / 255);
      for (let channel = 0; channel < 3; channel += 1) {
        const blended = blendChannel(base.data[index + channel], fitted.data[index + channel], mode);
        output.data[index + channel] = base.data[index + channel] * (1 - alpha) + blended * alpha;
      }
      output.data[index + 3] = clampByte(base.data[index + 3] + (255 - base.data[index + 3]) * alpha);
    }
    return output;
  }

  function applyMask(image, mask, params) {
    const fitted = mask.width === image.width && mask.height === image.height ? mask : resize(mask, image.width, image.height, "bilinear");
    let maskImage = fitted;
    const feather = Math.max(0, Math.min(24, Math.round(Number(params.feather))));
    if (feather) maskImage = blur(fitted, feather);
    const invert = !!params.invert;
    const output = cloneImage(image);
    for (let index = 0; index < image.data.length; index += 4) {
      let amount = (maskImage.data[index] * 0.2126 + maskImage.data[index + 1] * 0.7152 + maskImage.data[index + 2] * 0.0722) / 255;
      if (invert) amount = 1 - amount;
      amount *= maskImage.data[index + 3] / 255;
      output.data[index + 3] = image.data[index + 3] * amount;
    }
    return output;
  }

  function parseColor(value) {
    const hex = String(value || "#000000").replace("#", "");
    const full = hex.length === 3 ? hex.split("").map((part) => part + part).join("") : hex.padEnd(6, "0").slice(0, 6);
    return [parseInt(full.slice(0, 2), 16) || 0, parseInt(full.slice(2, 4), 16) || 0, parseInt(full.slice(4, 6), 16) || 0, 255];
  }

  function generatorSize(params) {
    return [
      Math.max(1, Math.min(4096, Math.round(Number(params.width) || 720))),
      Math.max(1, Math.min(4096, Math.round(Number(params.height) || 480))),
    ];
  }

  function solidColor(params) {
    const [width, height] = generatorSize(params), color = parseColor(params.color), data = new Uint8ClampedArray(width * height * 4);
    for (let index = 0; index < data.length; index += 4) data.set(color, index);
    return { width, height, data };
  }

  function gradientImage(params) {
    const [width, height] = generatorSize(params), start = parseColor(params.startColor), end = parseColor(params.endColor), data = new Uint8ClampedArray(width * height * 4);
    const angle = (Number(params.angle) || 0) * Math.PI / 180, dx = Math.cos(angle), dy = Math.sin(angle);
    const extent = Math.abs(dx) * width + Math.abs(dy) * height;
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const amount = clamp01(0.5 + ((x - width / 2) * dx + (y - height / 2) * dy) / Math.max(1, extent / 2));
        const index = (y * width + x) * 4;
        for (let channel = 0; channel < 4; channel += 1) data[index + channel] = start[channel] * (1 - amount) + end[channel] * amount;
      }
    }
    return { width, height, data };
  }

  function patternImage(params) {
    const [width, height] = generatorSize(params), first = parseColor(params.colorA), second = parseColor(params.colorB), size = Math.max(2, Math.min(256, Math.round(Number(params.size) || 32))), type = String(params.pattern || "checker"), data = new Uint8ClampedArray(width * height * 4);
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const useSecond = type === "stripes" ? Math.floor(x / size) % 2 === 1 : type === "dots" ? ((x % size) - size / 2) ** 2 + ((y % size) - size / 2) ** 2 < (size * 0.24) ** 2 : (Math.floor(x / size) + Math.floor(y / size)) % 2 === 1;
        data.set(useSecond ? second : first, (y * width + x) * 4);
      }
    }
    return { width, height, data };
  }

  function shapeImage(params) {
    const [width, height] = generatorSize(params), foreground = parseColor(params.color), background = parseColor(params.background), size = clamp01(Number(params.size) / 100), shape = String(params.shape || "circle"), data = new Uint8ClampedArray(width * height * 4), halfW = width * size / 2, halfH = height * size / 2;
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const nx = Math.abs(x - width / 2) / Math.max(1, halfW), ny = Math.abs(y - height / 2) / Math.max(1, halfH);
        const inside = shape === "rectangle" ? nx <= 1 && ny <= 1 : shape === "diamond" ? nx + ny <= 1 : nx * nx + ny * ny <= 1;
        data.set(inside ? foreground : background, (y * width + x) * 4);
      }
    }
    return { width, height, data };
  }

  function textImage(params) {
    const [width, height] = generatorSize(params);
    if (typeof OffscreenCanvas === "undefined") return solidColor({ ...params, width, height, color: params.background });
    const canvas = new OffscreenCanvas(width, height), context = canvas.getContext("2d");
    context.fillStyle = String(params.background || "#11131a");
    context.fillRect(0, 0, width, height);
    context.fillStyle = String(params.color || "#ffffff");
    context.font = `${params.bold ? "700" : "400"} ${Math.max(8, Math.min(512, Number(params.fontSize) || 72))}px sans-serif`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(String(params.text || "Fluxel"), width / 2, height / 2, width * 0.9);
    return { width, height, data: context.getImageData(0, 0, width, height).data };
  }

  function gaussianBlur(image, radiusValue, sigmaValue) {
    const radius = Math.max(0, Math.min(32, Math.round(Number(radiusValue))));
    if (!radius) return cloneImage(image);
    const sigma = Math.max(0.2, Number(sigmaValue) || Math.max(0.8, radius / 2)), kernel = new Float32Array(radius * 2 + 1);
    let total = 0;
    for (let offset = -radius; offset <= radius; offset += 1) { const value = Math.exp(-(offset * offset) / (2 * sigma * sigma)); kernel[offset + radius] = value; total += value; }
    for (let index = 0; index < kernel.length; index += 1) kernel[index] /= total;
    const horizontal = new Float32Array(image.data.length), data = new Uint8ClampedArray(image.data.length);
    for (let y = 0; y < image.height; y += 1) for (let x = 0; x < image.width; x += 1) for (let channel = 0; channel < 4; channel += 1) {
      let value = 0;
      for (let offset = -radius; offset <= radius; offset += 1) value += image.data[(y * image.width + Math.max(0, Math.min(image.width - 1, x + offset))) * 4 + channel] * kernel[offset + radius];
      horizontal[(y * image.width + x) * 4 + channel] = value;
    }
    for (let y = 0; y < image.height; y += 1) for (let x = 0; x < image.width; x += 1) for (let channel = 0; channel < 4; channel += 1) {
      let value = 0;
      for (let offset = -radius; offset <= radius; offset += 1) value += horizontal[(Math.max(0, Math.min(image.height - 1, y + offset)) * image.width + x) * 4 + channel] * kernel[offset + radius];
      data[(y * image.width + x) * 4 + channel] = value;
    }
    return { ...image, data };
  }

  function motionBlur(image, distanceValue, angleValue) {
    const distance = Math.max(1, Math.min(64, Math.round(Number(distanceValue) || 1))), angle = (Number(angleValue) || 0) * Math.PI / 180, dx = Math.cos(angle), dy = Math.sin(angle), data = new Uint8ClampedArray(image.data.length), half = (distance - 1) / 2;
    for (let y = 0; y < image.height; y += 1) for (let x = 0; x < image.width; x += 1) {
      const sums = [0, 0, 0, 0];
      for (let sample = 0; sample < distance; sample += 1) {
        const offset = sample - half, sourceX = Math.max(0, Math.min(image.width - 1, Math.round(x + dx * offset))), sourceY = Math.max(0, Math.min(image.height - 1, Math.round(y + dy * offset))), source = (sourceY * image.width + sourceX) * 4;
        for (let channel = 0; channel < 4; channel += 1) sums[channel] += image.data[source + channel];
      }
      const target = (y * image.width + x) * 4;
      for (let channel = 0; channel < 4; channel += 1) data[target + channel] = sums[channel] / distance;
    }
    return { ...image, data };
  }

  function unsharpMask(image, params) {
    const blurred = gaussianBlur(image, Number(params.radius), Math.max(0.8, Number(params.radius) / 2)), output = cloneImage(image), amount = Math.max(0, Math.min(3, Number(params.amount) / 100)), thresholdValue = Math.max(0, Math.min(255, Number(params.threshold)));
    for (let index = 0; index < image.data.length; index += 4) for (let channel = 0; channel < 3; channel += 1) {
      const difference = image.data[index + channel] - blurred.data[index + channel];
      output.data[index + channel] = Math.abs(difference) < thresholdValue ? image.data[index + channel] : clampByte(image.data[index + channel] + difference * amount);
    }
    return output;
  }

  function analyzeImage(image) {
    const bins = 64, red = Array(bins).fill(0), green = Array(bins).fill(0), blue = Array(bins).fill(0), luminance = Array(bins).fill(0), stride = Math.max(1, Math.floor((image.width * image.height) / 65536));
    let count = 0, sumR = 0, sumG = 0, sumB = 0;
    for (let pixel = 0; pixel < image.width * image.height; pixel += stride) {
      const index = pixel * 4, r = image.data[index], g = image.data[index + 1], b = image.data[index + 2], l = r * 0.2126 + g * 0.7152 + b * 0.0722;
      red[Math.min(63, r >> 2)] += 1; green[Math.min(63, g >> 2)] += 1; blue[Math.min(63, b >> 2)] += 1; luminance[Math.min(63, Math.floor(l / 4))] += 1;
      sumR += r; sumG += g; sumB += b; count += 1;
    }
    const peak = Math.max(1, ...red, ...green, ...blue, ...luminance);
    return { red, green, blue, luminance, peak, average: [Math.round(sumR / count), Math.round(sumG / count), Math.round(sumB / count)] };
  }

  function processOperation(operation, inputs, params) {
    const image = inputs.image || inputs.base || Object.values(inputs)[0];
    switch (operation) {
      case "solidColor": return solidColor(params);
      case "gradientImage": return gradientImage(params);
      case "patternImage": return patternImage(params);
      case "shapeImage": return shapeImage(params);
      case "textImage": return textImage(params);
      case "resize": {
        const mode = String(params.mode || "pixels");
        const percentage = Math.max(1, Math.min(400, Number(params.percentage) || 100));
        const dimension = String(params.pixelDimension || "width");
        const width = mode === "percentage" ? image.width * percentage / 100 : dimension === "height" ? image.width * (Number(params.height) / image.height) : Number(params.width);
        const height = mode === "percentage" ? image.height * percentage / 100 : dimension === "height" ? Number(params.height) : image.height * (Number(params.width) / image.width);
        return resize(image, width, height, String(params.sampling));
      }
      case "brightnessContrast": return brightnessContrast(image, Number(params.brightness), Number(params.contrast));
      case "blur": return blur(image, Number(params.radius));
      case "grayscale": return grayscale(image, Number(params.mix));
      case "crop": return crop(image, Number(params.x), Number(params.y), Number(params.width), Number(params.height));
      case "rotateFlip": return rotateFlip(image, Number(params.angle), !!params.flipHorizontal, !!params.flipVertical);
      case "hueSaturation": return hueSaturation(image, Number(params.hue), Number(params.saturation));
      case "sharpen": return sharpen(image, Number(params.amount));
      case "edgeDetection": return edgeDetection(image, Number(params.strength));
      case "threshold": return threshold(image, Number(params.threshold));
      case "levels": return levels(image, params);
      case "curves": return curves(image, params);
      case "colorGrade": return colorGrade(image, params);
      case "blendImages": return blendImages(inputs.base, inputs.blend, params);
      case "applyMask": return applyMask(inputs.image, inputs.mask, params);
      case "gaussianBlur": return gaussianBlur(image, Number(params.radius), Number(params.sigma));
      case "motionBlur": return motionBlur(image, Number(params.distance), Number(params.angle));
      case "unsharpMask": return unsharpMask(image, params);
      default: return cloneImage(image);
    }
  }

  const workerScope = self;
  workerScope.onmessage = (event) => {
    const { id, op, input, inputs: inputMap, params } = event.data;
    try {
      const serialized = inputMap || { image: input };
      const inputs = Object.fromEntries(Object.entries(serialized).map(([name, value]) => [name, {
        width: value.width,
        height: value.height,
        data: new Uint8ClampedArray(value.buffer),
      }]));
      const output = processOperation(op, inputs, params || {});
      const hash = hashImage(output);
      const analysis = analyzeImage(output);
      workerScope.postMessage({ id, ok: true, output: { width: output.width, height: output.height, buffer: output.data.buffer, hash, analysis } }, [output.data.buffer]);
    } catch (error) {
      workerScope.postMessage({ id, ok: false, error: error instanceof Error ? error.message : "Image processing failed" });
    }
  };
})();
