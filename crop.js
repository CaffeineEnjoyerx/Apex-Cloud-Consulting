const Jimp = require("jimp");

async function cropIcon() {
  const image = await Jimp.read("public/logo.png");
  const w = image.bitmap.width;
  
  // 1. Initial crop to get the top square
  image.crop(0, 0, w, w);
  
  // 2. The logo mark has internal whitespace padding.
  // We want it as big as possible, so let's crop 15% off all 4 sides.
  const cropAmount = Math.floor(w * 0.15);
  const newW = w - (cropAmount * 2);
  
  image.crop(cropAmount, cropAmount, newW, newW);
  
  await image.writeAsync("app/icon.png");
  console.log("Aggressive crop successfully to " + newW + "x" + newW);
}

cropIcon().catch(console.error);
