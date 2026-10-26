// Generates resized, EXIF-corrected WebP derivatives of selected original assets.
// Originals in docs/source-audit/original-assets are read only, never modified.
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = "docs/source-audit/original-assets/images";
const OUT = "public/images";

// name -> [source file, target widths, optional square/aspect crop]
const IMAGES = {
  hero: ["abc95f_c24af6e2a6dc41be8cf7755a5bbe1cdb~mv2.jpeg", [640, 1088]],
  shala: ["abc95f_9eb399b6d00c4d28866a70fccfcc6dd6~mv2.jpg", [800, 1400]],
  "sound-journey": ["abc95f_096c6547be664ef4b9cf01d60d97c349~mv2.jpg", [800, 1400]],
  gong: ["abc95f_d4b59bc6768d456ea030f49223a4442d~mv2.jpeg", [640, 895]],
  yoga: ["abc95f_0846e8667f4e45fb81b0d35b3ecdcc05~mv2.jpg", [800, 1400]],
  "oracle-deck": ["abc95f_df55fd51c2e045e28445ae5f9065c1ca~mv2.jpg", [640, 1000]],
  "retreat-holiday": ["abc95f_e163bbb58b4444d3a99d83273fb46d8f~mv2.jpeg", [640, 1000]],
  "retreat-mini": ["abc95f_15477f874ff848468d829644a79ca739~mv2.jpeg", [640, 1000]],
  "retreat-mermaid": ["abc95f_a254b05b68284173b971e4310e343e46~mv2.jpeg", [640, 1000]],
  "retreat-restore": ["abc95f_bb92ee308bdf48ca9be8c78e4183a35b~mv2.jpeg", [640, 1000]],
  venue: ["abc95f_2c29459bad564c668974cc0c29e6b3b2~mv2.jpg", [800, 1232]],
  ganesha: ["abc95f_2cfedc7b46a547cfa4209dcdfff9ee4c~mv2.jpg", [480, 800]],
  savasana: ["abc95f_60b46eca5e1d40bbbddca25202d9f21c~mv2.jpeg", [640, 1000]],
  blessing: ["abc95f_fec569ccb54d4c978c14c349dc1c07b3~mv2.jpg", [800, 1440]],
  celebration: ["abc95f_47c9fb49e62d4e37af1ec5042a94d4d7~mv2.jpeg", [640, 1000]],
  // Tighter crops: hammock fabric detail, and a landscape band from the portrait Buddha photo
  "hammock-detail": ["abc95f_7314a9c51e15422e8097d8af762380d7~mv2.jpg", [640, 824], { left: 280, top: 0, width: 824, height: 883 }],
  buddha: ["abc95f_079ea278c64e4320950d5051f5a934bd~mv2.jpeg", [1000, 1600, 2400], { left: 0, top: 1250, width: 3024, height: 1650 }],
};

await mkdir(OUT, { recursive: true });
const manifest = {};

for (const [name, [file, widths, crop]] of Object.entries(IMAGES)) {
  // .rotate() with no args applies the EXIF orientation (fixes the sideways originals)
  let oriented = await sharp(path.join(SRC, file)).rotate().toBuffer();
  if (crop) oriented = await sharp(oriented).extract(crop).toBuffer();
  const { width: ow, height: oh } = await sharp(oriented).metadata();
  manifest[name] = { width: ow, height: oh, srcs: [] };
  for (const w of widths) {
    const width = Math.min(w, ow);
    const out = `${name}-${width}.webp`;
    await sharp(oriented).resize({ width }).webp({ quality: 74 }).toFile(path.join(OUT, out));
    manifest[name].srcs.push({ src: `/images/${out}`, width });
  }
  console.log(name, `${ow}x${oh}`);
}

// Social sharing image: 1200x630 crop of the signature hammock photo
await sharp(path.join(SRC, "abc95f_7314a9c51e15422e8097d8af762380d7~mv2.jpg"))
  .rotate()
  .resize(1200, 630, { fit: "cover", position: "attention" })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(path.join(OUT, "og-image.jpg"));

await writeFile("app/images.json", JSON.stringify(manifest, null, 2) + "\n");
