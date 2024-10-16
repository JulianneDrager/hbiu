document.addEventListener("DOMContentLoaded", function () {
  // Function to load the header
  function loadHeader() {
    fetch("../../../e-header/header.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("header-container").innerHTML = data;
      })
      .catch((error) => console.error("Error loading header:", error));
  }

  // Load the header
  loadHeader();
});
