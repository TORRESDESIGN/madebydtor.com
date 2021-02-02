const link = document.getElementsByClassName("btn");
const fn = document.getElementById("first-name");
const cBtn = document.getElementById("code-btn");
const codes = document.querySelectorAll(".code");
const dBtn = document.getElementById("design-btn");
const designs = document.querySelectorAll(".design");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    nToggle.checked = false;
  });
}

setTimeout(hideIt, 4000);
function hideIt() {
  fn.classList.add("hide-me");
}

//Portfolio filter for code and design
cBtn.addEventListener("click", () => {
  dBtn.classList.remove("active");
  designs.forEach((design) => {
    design.style.display = "none";
  });
  cBtn.classList.add("active");

  codes.forEach((code) => {
    code.style.display = "block";
  });
});

dBtn.addEventListener("click", () => {
  cBtn.classList.remove("active");
  codes.forEach((code) => {
    code.style.display = "none";
  });
  dBtn.classList.add("active");

  designs.forEach((design) => {
    design.style.display = "block";
  });
});

