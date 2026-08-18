export function resolveRealESRGANNativeScale(modelKey, requestedScale) {
  return modelKey === "animeFast" ? requestedScale : 4;
}

export function scaledDimensions(inputSize, requestedScale) {
  return {
    width: inputSize.width * requestedScale,
    height: inputSize.height * requestedScale,
  };
}
