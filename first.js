
console.log("✅ Portfolio website loaded successfully!");

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header h1");
  header.addEventListener("mouseover", () => {
    header.style.color = "#ffdd57";
  });
  header.addEventListener("mouseout", () => {
    header.style.color = "white";
  });
});
