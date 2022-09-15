document.addEventListener('DOMContentLoaded', (event) => {
  let hero = document.querySelector(".hero");
  const colors = ["#00BBD4", "#00B2C9", "#00a8bf", "#009FB4", "#0096aa", "#008C9F", "#008394", "#007A8A", "#00707f", "#006775", "#005e6a", "#00545F", "#004b55", "#00414a", "#003840",
                  "#003840", "#00414a", "#004b55", "#00545F", "#005e6a", "#006775", "#00707f", "#007A8A", "#008394", "#008C9F", "#0096aa", "#009FB4", "#00a8bf", "#00B2C9", "#00BBD4"];

  function changeColor(colors, i) {
    setInterval(() => {
      let linearGradient = `linear-gradient(180deg, #003810 0.94%, ${colors[i]} 100%)`;
      hero.style.background = linearGradient;
      i++;
      i %= colors.length;
    }, 100);
  }
  changeColor(colors, 0);
});
