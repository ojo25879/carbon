const menuIcon = document.querySelector (".humbuger");
const navbar  = document.querySelector (".second-hearder");

  
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
})