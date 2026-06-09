import https from "https";
import fs from "fs";

const API_KEY = process.env.OPENAI_API_KEY;
const prompt =
  "Split-image editorial photo: left side shows a Chinese child happily reading books, playing outside, calm and focused — warm golden light. Right side shows a Western teenager hunched over a phone in a dark room, hollow-eyed, isolated, trapped — cold blue light. A sharp vertical red line divides the two. The contrast is stark and intentional. Photorealistic, cinematic, high contrast.";
const body = JSON.stringify({
  model: "gpt-image-2", prompt, n: 1, size: "1536x1024", quality: "high", output_format: "png",
});

console.log("🎨 Generating: two-phones-illustration.png");
const req = https.request(
  {
    hostname: "api.openai.com", path: "/v1/images/generations", method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}`, "Content-Length": Buffer.byteLength(body) },
  },
  (res) => {
    let data = "";
    res.on("data", (c) => (data += c));
    res.on("end", () => {
      const json = JSON.parse(data);
      if (json.error) { console.error("✗", json.error.message); process.exit(1); }
      const b64 = json.data?.[0]?.b64_json;
      if (!b64) { console.error("✗ No data:", JSON.stringify(json)); process.exit(1); }
      fs.writeFileSync("public/images/two-phones-illustration.png", Buffer.from(b64, "base64"));
      console.log("✓ Saved → public/images/two-phones-illustration.png");
    });
  }
);
req.on("error", (e) => { console.error("✗", e.message); process.exit(1); });
req.write(body);
req.end();
