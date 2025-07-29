window.onload = function () {
  const card = document.getElementById("card");
  const popup = document.getElementById("popup");
  const countdown = document.getElementById("countdown");

  // 🎯 Target date: 19 September, 00:00:00
  const birthdayDate = new Date("September 19, 2025 00:00:00").getTime();

  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);
      countdown.style.display = "none";
      showBirthday();
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdown.innerHTML = ⏳ Unlocking in: ${days}d ${hours}h ${minutes}m ${seconds}s;
    }
  }, 1000);

  function showBirthday() {
    card.style.display = "block";
    setTimeout(() => {
      card.style.animation = "popup 2s ease-in-out forwards";
      popup.style.display = "flex";

      // Fireworks start
      const container = document.getElementById("fireworks-canvas");
      const fireworks = new Fireworks(container, {
        hue: { min: 0, max: 360 },
        rocketsPoint: 50,
        speed: 2,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 100,
        trace: 3,
        explosion: 6
      });
      fireworks.start();
    }, 1000);
  }
};

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
