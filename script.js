function showContent() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("content").style.display = "flex";
  document.body.style.overflow = "auto";
}

// Data inicial do relacionamento
const startDate = new Date("2022-10-27T00:00:00").getTime();

const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const distance = now - startDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countup").innerHTML =
    `Estamos juntos há ${days}d ${hours}h ${minutes}m ${seconds}s 💖`;
}, 1000);
