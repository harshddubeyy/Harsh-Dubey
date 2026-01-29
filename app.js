const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const katakana =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";

const alphabet = katakana + latin + nums;

const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let rainDrops = Array(columns).fill(1);

const draw = () => {
  ctx.fillStyle = "rgba(13, 13, 13, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#33ff33";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(
      Math.floor(Math.random() * alphabet.length)
    );

    ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (
      rainDrops[i] * fontSize > canvas.height &&
      Math.random() > 0.975
    ) {
      rainDrops[i] = 0;
    }

    rainDrops[i]++;
  }
};

const animate = () => {
  draw();
  requestAnimationFrame(animate);
};

animate();

window.addEventListener("resize", () => {
  columns = Math.floor(canvas.width / fontSize);
  rainDrops = Array(columns).fill(1);
});
