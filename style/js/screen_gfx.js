"use strict";

export const spriteUpscale = window.devicePixelRatio > 1 ? 1 : 2;

export const fontSizeType = "px";
export const fontSizeThreshold = 48;
export const fontSizeMax = 48;

export function getGfxContext(bounds) {
  var ctx = document.createElement("canvas").getContext("2d");
  ctx.imageSmoothingQuality = "high";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.canvas.width = bounds.width;
  ctx.canvas.height = bounds.height;
  return ctx;
}