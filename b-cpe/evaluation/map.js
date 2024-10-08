document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");

  // Function to generate HTML for a page
  function generatePageHTML(pageData) {
    return `
<div class="course-single-area py-120">
  <div class="container">
    <div class="course-single-wrapper">
      <div class="row">
        <div class="col-xl-8 col-lg-8">
          <div class="course-details">

            <img style="width:100%" src="${pageData.imageUrl}" alt="thumb">

            <br /><br />
            <h3>${pageData.title}</h3>

            <ul class="mb-20">
              ${pageData.description.map((item) => `<li>${item}</li>`).join("")}
            </ul>

          </div>
        </div>

      </div>
    </div>
  </div>
  `;
  }

  // Function to get query parameter by name
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get the page index from the query parameter
  const pageIndex = getQueryParam("page") || 0;

  // Generate HTML for the selected page
  contentDiv.innerHTML = generatePageHTML(pagesData[pageIndex]);
});
