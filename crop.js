const Jimp = require("jimp");
async function cropIcon() {
  const image = await Jimp.read("public/logo.png");
  const w = image.bitmap.width;
  // Crop a square starting from the top-left (0,0) with size w x w
  // This will grab the logo mark and cut off the text below it.
  image.crop(0, 0, w, w);
  await image.writeAsync("app/icon.png");
  console.log("Cropped successfully to " + w + "x" + w);
}
cropIcon().catch(console.error);
