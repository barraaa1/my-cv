// LOADING SCREEN
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if(loader){
    loader.style.display = "none";
  }
});

// AOS INIT
AOS.init({
  duration: 1000,
  once: true
});

// DARK LIGHT MODE
const toggle = document.getElementById("modeToggle");

if(localStorage.getItem("theme") === "light"){
  document.body.classList.add("light");
}

toggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  if(document.body.classList.contains("light")){
    localStorage.setItem("theme","light");
  } else {
    localStorage.setItem("theme","dark");
  }
});
