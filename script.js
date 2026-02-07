const heartsContainer = document.querySelector(".hearts");
const envelope = document.getElementById("envelope");
const letterBox = document.getElementById("letterBox");

/* HEART RAIN */
function createHeart() {
  const heart = document.createElement("span");
  heart.innerText = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 500);

/* OPEN LETTER */
const envelopeContainer = document.getElementById("envelopeContainer");

envelope.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterBox.style.display = "flex";
});  message.style.display = "block";
  emotionText.style.display = "none";
  startHearts();
}

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 200);
}
