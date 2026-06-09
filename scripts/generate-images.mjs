import https from "https";
import fs from "fs";
import path from "path";

const API_KEY = process.env.OPENAI_API_KEY;
const OUT_DIR = path.resolve("public/images");
fs.mkdirSync(OUT_DIR, { recursive: true });

// gpt-image-2 supported sizes: 1024x1024, 1024x1536, 1536x1024
const images = [
  {
    file: "hero-bg.png",
    size: "1536x1024",
    prompt:
      "Cinematic photograph of a teenager's face bathed entirely in cold blue smartphone screen light, sitting alone in a pitch-black room. Eyes glazed and hollow, expression vacant, thumb frozen mid-scroll. Dark shadows, dramatic chiaroscuro lighting. No phone visible — only the eerie blue glow on the face. Editorial photography style, high contrast, photorealistic.",
  },
  {
    file: "testimony-1.png",
    size: "1024x1024",
    prompt:
      "Anonymous silhouette portrait of a teenage girl sitting on a bed in a dark bedroom, face completely obscured, illuminated only by the cold blue glow of a phone. She is hunched forward, isolated. Dark, melancholic, cinematic photography. The atmosphere feels like loneliness and quiet despair. No identifiable features. Editorial, photorealistic.",
  },
  {
    file: "testimony-2.png",
    size: "1024x1024",
    prompt:
      "Anonymous silhouette portrait of a teenage boy lying on his back in the dark, phone held above his face, face obscured in shadow. The only light is the cold blue glow from the screen illuminating his hands and the ceiling. Dark, cinematic photography. Lonely, late-night atmosphere. No identifiable features. Editorial, photorealistic.",
  },
  {
    file: "testimony-3.png",
    size: "1024x1024",
    prompt:
      "Anonymous portrait of an adult parent, back turned, sitting at a kitchen table in the dark. A single overhead light. They hold a phone in their hands looking at it with visible tension — the posture of someone discovering something deeply upsetting. No face visible. Dark, quiet, cinematic. Editorial photography, photorealistic.",
  },
  {
    file: "playbook-illustration.png",
    size: "1536x1024",
    prompt:
      "Dark, dramatic editorial illustration: a massive shadowy corporate boardroom viewed from below. Faceless executives in expensive suits sit around a table covered in glowing screens showing engagement metrics, addiction graphs, and social media feeds. Red and black color palette. Dramatic red accent lighting from below. The atmosphere is sinister and powerful — these are the architects of something dangerous. Cinematic, painterly, high contrast.",
  },
  {
    file: "addiction-illustration.png",
    size: "1536x1024",
    prompt:
      "Conceptual dark art: dozens of human hands reaching upward from darkness, all holding glowing smartphones, like addicts reaching for a drug. The phones emit cold blue light casting eerie shadows on the hands. From above, a single red algorithmic beam pulls the hands upward like a puppeteer. Dark background, red and blue color palette, dramatic, cinematic editorial illustration.",
  },
  {
    file: "two-phones-illustration.png",
    size: "1536x1024",
    prompt:
      "Split-image editorial photo: left side shows a Chinese child happily reading books, playing outside, calm and focused — warm golden light. Right side shows a Western teenager hunched over a phone in a dark room, hollow-eyed, isolated, trapped — cold blue light. A sharp vertical red line divides the two. The contrast is stark and intentional. Photorealistic, cinematic, high contrast.",
  },
];

async function generateImage({ file, prompt, size }) {
  console.log(`\n🎨 Generating: ${file}`);
  const body = JSON.stringify({
    model: "gpt-image-2",
    prompt,
    n: 1,
    size,
    quality: "high",
    output_format: "png",
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "api.openai.com",
        path: "/v1/images/generations",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          const json = JSON.parse(data);
          if (json.error) {
            console.error(`  ✗ Failed: ${json.error.message}`);
            resolve(null);
            return;
          }

          const item = json.data?.[0];
          if (!item) {
            console.error(`  ✗ No data returned: ${JSON.stringify(json)}`);
            resolve(null);
            return;
          }

          const outPath = path.join(OUT_DIR, file);

          if (item.b64_json) {
            // Base64 response
            fs.writeFileSync(outPath, Buffer.from(item.b64_json, "base64"));
            console.log(`  ✓ Saved (base64) → public/images/${file}`);
            resolve(outPath);
          } else if (item.url) {
            // URL response — download it
            console.log(`  ✓ URL received, downloading...`);
            const fileStream = fs.createWriteStream(outPath);
            https.get(item.url, (imgRes) => {
              imgRes.pipe(fileStream);
              fileStream.on("finish", () => {
                fileStream.close();
                console.log(`  ✓ Saved (url) → public/images/${file}`);
                resolve(outPath);
              });
            }).on("error", reject);
          } else {
            console.error(`  ✗ Unknown response format: ${JSON.stringify(item)}`);
            resolve(null);
          }
        });
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

// Generate sequentially to avoid rate limits
for (const img of images) {
  await generateImage(img);
}

console.log("\n✅ All images generated.");
