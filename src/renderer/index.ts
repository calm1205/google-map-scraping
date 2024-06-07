document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  const app = document.querySelector("#app");

  button?.addEventListener("click", () => {
    const element = document.createElement("div");
    element.textContent = "Hello, World!";
    app?.appendChild(element);
  });
});
