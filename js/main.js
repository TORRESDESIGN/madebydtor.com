const link = document.getElementsByClassName("btn");
const fn = document.getElementById("first-name");
const cBtn = document.getElementById("code-btn");
const codes = document.querySelectorAll(".code");
const dBtn = document.getElementById("design-btn");
const designs = document.querySelectorAll(".design");
var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementById("close");

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

//Modal Images Viewer
//look into eventlistener issue vs onclick
for (var i = 0; i < img.length; i++) {
  img[i].onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  }
}

//closes Modal Viewer
span.onclick = function() {
  modal.style.display = "none";
}
