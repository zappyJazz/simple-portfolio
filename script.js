const aboutTag = document.querySelector(".about-one");
const skillTag = document.querySelector(".skill-one");
const aboutText = document.querySelector(".aboutMe");
const skillText = document.querySelector(".myskill");
const innerwidth = document.querySelector(".innerwidth");
const innerwidthcss = document.querySelector(".innerwidthcss");
const innerwidthjs = document.querySelector(".innerwidthjs");

aboutTag.addEventListener("click", () => {
  skillText.style.display = "none";
  aboutText.style.display = "inline-block";
  innerwidth.style.width = 0 + "%";
  innerwidthcss.style.width = 0 + "%";
  innerwidthjs.style.width = 0 + "%";
  setTimeout(() => {
    aboutText.style.opacity = 1;
  }, 200);
});

skillTag.addEventListener("click", () => {
  skillText.style.display = "inline-block";
  aboutText.style.display = "none";
  aboutText.style.opacity = 0;
  setTimeout(() => {
    innerwidth.style.width = 60 + "%";
  }, 300);

  setTimeout(() => {
    innerwidthcss.style.width = 50 + "%";
  }, 300);

  setTimeout(() => {
    innerwidthjs.style.width = 35 + "%";
  }, 300);
});
