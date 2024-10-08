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

            <br />
            <hr>
            <h4>Course Description: </h4>

            <ul>
              ${pageData.description.map((item) => `<li>${item}</li>`).join("")}
            </ul>

            <br />

            <h4>Course Outline:</h4>
            <ul>
              ${pageData.courseOutline
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <br />
            <hr />
            <ul class="mb-20">
              ${pageReq.requirements.map((item) => `<li>${item}</li>`).join("")}
            </ul>

          </div>
        </div>
        <div class="col-xl-4 col-lg-4">
          <div class="course-single-sidebar">
            <div class="widget">
              <h4 class="widget-title">Course Info</h4>
              <div class="course-single-info">
                <div class="single-info author">
                  <div class="author-img">
                    <img src="${pageData.professorImg}" alt="#">
                  </div>
                  <div class="single-info-content">
                    <h4>Teacher</h4>
                    <span>${pageData.professorName}</span>
                  </div>
                </div>
                <div class="single-info category">
                  <i class="far fa-bolt"></i>
                  <div class="single-info-content">
                    <h4>Category</h4>
                    <span>${pageData.category}</span>
                  </div>
                </div>
                <div class="single-info s-enroll">
                  <i class="far fa-users"></i>
                  <div class="single-info-content">
                    <h4>Enrolled</h4>
                    <span>${pageData.enrolled} Students</span>
                  </div>
                </div>
                <div class="single-info rattings">
                  <i class="far fa-clock"></i>
                  <div class="single-info-content">
                    <h4>Course Time</h4>
                    <span>${pageData.courseTime}</span>
                  </div>
                </div>
                <div class="single-info rattings">
                  <i class="far fa-dollar"></i>
                  <div class="single-info-content">
                    <h4>Course Fees</h4>
                    <span>${pageData.courseFees}</span>
                  </div>
                </div>
              </div>
              <a href="https://form.jotform.com/242364855582162" class="theme-btn">Enroll Now<i
                  class="fas fa-arrow-right-long"></i></a>
            </div>
            <div class="widget">
              <h4 class="widget-title">Course Features</h4>
              <div class="course-feature-list">
                <a href="#"><i class="far fa-book-open"></i> Lectures <span>${
                  pageData.lectures
                }</span></a>
                <a href="#"><i class="far fa-pencil"></i> Quizes <span>${
                  pageData.quizes
                }</span></a>
                <a href="#"><i class="far fa-clock"></i> Duration <span>${
                  pageData.duration
                }</span></a>
                <a href="#"><i class="far fa-globe"></i> Language <span>${
                  pageData.language
                }</span></a>
                <a href="#"><i class="far fa-fill-drip"></i> Skill Level <span>${
                  pageData.skillLevel
                }</span></a>
                <a href="#"><i class="far fa-location-dot"></i> Location <span>${
                  pageData.location
                }</span></a>
                <a href="#"><i class="far fa-users"></i> Students <span>${
                  pageData.students
                }</span></a>
                <a href="#"><i class="far fa-graduation-cap"></i> Certificate <span>${
                  pageData.certificate
                }</span></a>
                <a href="#"><i class="far fa-check-circle"></i> Assessments <span>${
                  pageData.assessments
                }</span></a>
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
  const pageReqIndex = getQueryParam("req") || 0;

  // Load the pageReq data from the window object
  const pageReq = window.pagesReq[pageReqIndex];

  // Generate HTML for the selected page
  contentDiv.innerHTML = generatePageHTML(pagesData[pageIndex], pageReq);
  reqDiv.innerHTML = generatePageHTML(pagesReq[pageIndex], pageReq);
});
