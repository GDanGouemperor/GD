document.addEventListener("DOMContentLoaded", () => {
  const button = document.createElement("button");
  button.textContent = "點我打招呼";
  button.style.display = "block";
  button.style.margin = "1rem auto";
  button.style.padding = "0.5rem 1rem";
  button.style.backgroundColor = "#4caf50";
  button.style.color = "white";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.addEventListener("click", () => {
    alert("你好！歡迎來到我的網站 😊");
  });
  document.body.appendChild(button);
});