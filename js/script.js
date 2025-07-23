// === Inisialisasi ===
let replyIndex = 0;
let contentPlayed = false;

// === Fungsi Kirim Pesan User ===
function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const messageText = input.value.trim();

  if (messageText !== "") {
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user", "fade-in");
    userMessage.textContent = messageText;
    chatBox.appendChild(userMessage);

    setTimeout(() => {
      const botReply = document.createElement("div");
      botReply.classList.add("message", "bot", "fade-in");
      const replyText = getBotReply();
      botReply.textContent = replyText;
      chatBox.appendChild(botReply);
      chatBox.scrollTop = chatBox.scrollHeight;

      if (!contentPlayed && replyIndex >= replies.length) {
        contentPlayed = true;
        setTimeout(showFinalContent, 500); // Lebih cepat muncul
      }
    }, 900);

    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";
  }
}

// === Fungsi Deteksi Enter ===
function handleKey(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

// === Toggle Dark Mode ===
function toggleDark() {
  document.body.classList.toggle("dark");
}

// === Daftar Balasan Bot ===
const replies = [
  "Hai Neng... 😊",
  "Selamat ulang tahun ya...",
  "Tahun ini mungkin jadi tahun yang besar buat kamu.",
  "Aku dengar Desember nanti kamu akan dilamar.",
  "Aku nggak datang buat ganggu. Aku cuma masih terbiasa nyimpen tanggal ini di kepala.",
  "Dan kali ini... aku sadar, mungkin ini terakhir kalinya aku bisa ngucapin secara langsung.",
  "Kita pernah jalan bareng selama 7 tahun. Dan itu bukan waktu yang sebentar.",
  "Kita pernah saling percaya, saling jaga... saling jadi rumah.",
  "Banyak hal dalam hidupku yang tumbuh bersama kamu.",
  "Dan banyak hal juga yang nggak akan pernah aku ulangin — karena cuma kamu yang punya ruang itu.",
  "Aku nggak nulis ini buat ngajak kamu balik... nggak juga buat bikin kamu bingung.",
  "Aku cuma pengen kamu tahu...",
  "Kalau bagian dari aku akan selalu baik-baik aja setiap kali inget kamu.",
  "Terima kasih ya...",
  "Untuk semua tawa yang pernah kamu bagi.",
  "Untuk sabar yang nggak pernah kamu pamerin.",
  "Untuk cara kamu sayang, yang sampai hari ini masih belum bisa aku samain.",
  "Kalau aku boleh minta satu hal terakhir...",
  "Aku cuma pengen waktu kamu bahagia nanti, kamu nggak pernah ngerasa salah kenal sama aku.",
  "Nabila, kamu pernah jadi bagian paling hangat dalam hidupku.",
  "Dan mungkin aku bukan siapa-siapa lagi sekarang...",
  "Tapi kalau kamu sempat baca ini pelan-pelan...",
  "Tolong jangan buang aku. Simpan aja. Meski cuma jadi halaman lama di buku hidup kamu.",
  "Selamat ulang tahun, Nabila Rahma 🤍",
  "Aku doakan kamu bahagia. Yang bener-bener bahagia.",
  "- Arsyaf\nJakarta, 27 Juli 2025\n(dahulu yang pernah memiliki kamu)",
];

// === Fungsi Ambil Balasan ===
function getBotReply() {
  if (replyIndex < replies.length) {
    return replies[replyIndex++];
  } else {
    return "";
  }
}

// === Fungsi Final: Video & Slider ===
function showFinalContent() {
  const chatBox = document.getElementById("chat-box");

  const videoMessage = document.createElement("div");
  videoMessage.classList.add("message", "bot", "fade-in");

  const videoWrapper = document.createElement("div");
  videoWrapper.classList.add("video-wrapper");

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.youtube.com/embed/OqsM5kQYjTc?autoplay=1&mute=0&enablejsapi=1";
  iframe.width = "100%";
  iframe.height = "200";
  iframe.frameBorder = "0";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;

  videoWrapper.appendChild(iframe);
  videoMessage.appendChild(videoWrapper);

  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.textContent = "🎊🎊🎊";

  videoMessage.appendChild(confetti);
  chatBox.appendChild(videoMessage);
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(startLoopedSlider, 1000);
}

// === Fungsi Slider Muncul 1 per 1 dan Loop ===
function startLoopedSlider() {
  const chatBox = document.getElementById("chat-box");
  const sliderWrapper = document.createElement("div");
  sliderWrapper.classList.add("message", "bot", "fade-in");
  sliderWrapper.style.marginTop = "25px";

  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.gap = "10px";
  container.style.flexWrap = "wrap";

  const photos = [
    "images/img1 (8).jpeg",
    "images/img1 (7).png",
    "images/img1 (3).png",
    "images/img1 (6).jpeg",
    "images/img1 (5).jpeg",
    "images/img1 (2).jpeg",
    "images/img1 (9).jpeg",
    "images/img1 (1).jpeg",
  ];

  let index = 0;
  function showNextPhoto() {
    const img = document.createElement("img");
    img.src = photos[index];
    img.alt = "Kenangan";
    img.style.width = "80px";
    img.style.height = "120px";
    img.style.borderRadius = "10px";
    img.style.objectFit = "cover";
    img.style.boxShadow = "0 2px 6px rgba(0,0,0,0.08)";
    container.appendChild(img);
    chatBox.scrollTop = chatBox.scrollHeight;
    index = (index + 1) % photos.length;
    setTimeout(showNextPhoto, 1500);
  }

  showNextPhoto();
  sliderWrapper.appendChild(container);
  chatBox.appendChild(sliderWrapper);
}

// === Efek Bunga Jatuh ===
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.textContent = "🌸";
  flower.style.position = "fixed";
  flower.style.top = "-50px";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.fontSize = Math.random() * 10 + 20 + "px";
  flower.style.animation = `fall ${Math.random() * 5 + 5}s linear`;
  flower.style.zIndex = 999;
  flower.style.pointerEvents = "none";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}
setInterval(createFlower, 500);

// === Musik Autoplay setelah klik / ketik ===
let hasPlayed = false;
function enableMusicAutoplay() {
  if (!hasPlayed) {
    const music = document.getElementById("bg-music");
    if (music) {
      music.volume = 0.4;
      music.play().catch((e) => console.log("Autoplay gagal:", e));
      hasPlayed = true;
    }
  }
}
window.addEventListener("click", enableMusicAutoplay);
window.addEventListener("keydown", enableMusicAutoplay);

// === Ekspor fungsi ke HTML ===
window.sendMessage = sendMessage;
window.handleKey = handleKey;
window.toggleDark = toggleDark;
