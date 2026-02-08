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
});
