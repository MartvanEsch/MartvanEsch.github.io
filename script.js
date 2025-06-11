let h1 = document.querySelector("h1");
let container = document.querySelector("#container");

container.style.display = "none";
setTimeout(() => {
  h1.style.opacity = "0";

  setTimeout(() => {
    h1.style.display = "none";

    container.style.display = "";
    container.style.opacity = "0";
    void container.offsetWidth;
    container.style.opacity = "1";
  }, 1000);
}, 1000);
