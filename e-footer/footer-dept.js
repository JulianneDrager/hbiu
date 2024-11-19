document.addEventListener("DOMContentLoaded", function () {
  // Function to load the header
  function loadHeader() {
    fetch("../../../e-footer/footer-dept.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("footer-container").innerHTML = data;
      })
      .catch((error) => console.error("Error loading footer:", error));
  }

  // Load the header
  loadHeader();
});
