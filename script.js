// Zarreen's Birthday Date
const birthdayDate = new Date("September 19, 2025 00:00:00").getTime();

// HTML elements
const countdownElement = document.getElementById("countdown");
const card = document.getElementById("card");
const audio = document.querySelector("audio");
const popup = document.getElementById("popup");

// Countdown Logic
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  if (distance <= 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "🎂 It's Zarreen's Birthday Today! 🎉";

    // Show card, play music, show popup
    card.style.display = "block";
    if (audio) audio.play();
    if (popup) popup.style.display = "flex";

    startFireworks(); // fireworks function
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = ⏳ ${days}d ${hours}h ${minutes}m ${seconds}s left;

    // Hide until birthday
    card.style.display = "none";
    if (popup) popup.style.display = "none";
  }
}, 1000);

// Close popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Placeholder fireworks
function startFireworks() {
  console.log("Fireworks will start 🎆");
}
