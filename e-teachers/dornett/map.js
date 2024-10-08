document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");

  // Function to generate HTML for a page
  function generatePageHTML(pageData) {
    return `
<div class="team-single pt-120 pb-80">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <div class="team-single-img">
          <img src="${pageData.image}" alt="${pageData.name}" />
        </div>
      </div>
      <div class="col-md-8">
        <div class="team-details">
          <h3>${pageData.name}</h3>
          <strong>${pageData.title}</strong>
          <p class="mt-3">${pageData.description}</p>
          <div class="team-details-info">
            <ul>
              <li>
                <a href="#"><i class="far fa-location-dot"></i> ${pageData.location}</a>
              </li>
              <li>
                <a href="mailto:${pageData.email}"><i class="far fa-envelope"></i> ${pageData.email}</a>
              </li>
              <li>
                <a href="mailto:${pageData.phone}"><i class="far fa-envelope"></i> ${pageData.phone}</a>
              </li>
            </ul>
          </div>
          <div class="team-details-social">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-whatsapp"></i></a>
            <a href="#"><i class="fab fa-behance"></i></a>
            <a href="#"><i class="fab fa-pinterest"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="biography-skil pb-120">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="biography">
                <h4 class="mb-3">Biography</h4>
                <p class="mb-10">
                 ${pageData.biography}
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="team-skill">
                <h4 class="mb-3">${pageData.skills}</h4>
                <div class="skills-section">
                  <div class="progress-box">
                    <h5>Communication <span class="pull-right">85%</span></h5>
                    <div class="progress" data-value="85">
                      <div class="progress-bar" role="progressbar"></div>
                    </div>
                  </div>
                  <div class="progress-box">
                    <h5>Relationship <span class="pull-right">65%</span></h5>
                    <div class="progress" data-value="65">
                      <div class="progress-bar" role="progressbar"></div>
                    </div>
                  </div>
                  <div class="progress-box">
                    <h5>Creative Work <span class="pull-right">75%</span></h5>
                    <div class="progress" data-value="75">
                      <div class="progress-bar" role="progressbar"></div>
                    </div>
                  </div>
                </div>
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

  // Get the pageReq index from the query parameter
  // const pageReqIndex = getQueryParam("req") || 0;

  // Load the pageReq data from the window object
  // const pageReq = window.pagesReq[pageReqIndex];

  // Generate HTML for the selected page
  contentDiv.innerHTML = generatePageHTML(pageData[pageIndex]);
  // reqDiv.innerHTML = generatePageHTML(pagesReq[pageIndex], pageReq);
});
