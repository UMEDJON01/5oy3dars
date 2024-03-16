setInterval(() => {
  document.querySelector("div").textContent = new Date().toLocaleTimeString();
}, 1000);
setInterval(() => {
  document.querySelector("h1").textContent = new Date().toLocaleDateString();
});
document.addEventListener("DOMContentLoaded", function () {
  const clock = document.getElementById("clock");

  setInterval(function () {
    const randomColor = getRandomColor();
    clock.style.color = randomColor;
  }, 1000);

  clock.addEventListener("click", function () {
    const randomColor = getRandomColor();
    clock.style.color = randomColor;
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
