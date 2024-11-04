// First Event: Change color
document.getElementById("colorButton").addEventListener("click", function() {
    const colorBox = document.getElementById("colorBox");
    colorBox.style.backgroundColor = colorBox.style.backgroundColor === "lightblue" ? "lightcoral" : "lightblue";
  });
  
  // Second Event: Toggle text visibility
  document.getElementById("toggleTextButton").addEventListener("click", function() {
    const toggleText = document.getElementById("toggleText");
    toggleText.style.display = toggleText.style.display === "none" ? "block" : "none";
  });
  