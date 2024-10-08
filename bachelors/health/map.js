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

            <hr>

            <ul class="mb-20">
              ${pageData.description
                .slice(0, 1)
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Research Job Requirements</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(2, 3)
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Educational Preparation</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(4, 5)
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Professional Licensing or Certification</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(6, 7)
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Gain Relevant Experience</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(8, 9)
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Network and Apply</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(10, 11)
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Continuous Learning</strong>
            <ul class="mb-10">
              ${pageData.description
                .slice(12, 13)
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <ul class="mb-20">
              ${pageData.description
                .slice(13, 14)
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            
            <ul class="mb-10">
              ${pageData.description
                .slice(14, 15)
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>
<br/>
            <hr/>
            <h3>Course Outline</h3>
            <ul class="mb-20">
              ${pageData.description
                .slice(18, 19)
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Year 1. ${pageData.courseOutline[1]}</strong>
       
            <ul class="mb-20">
              ${pageData.courseOutline
                .slice(1, 7)
                .map(
                  (item) =>
                    `<li  style="list-style-type: disc" class="ms-3">${item}</li>`
                )
                .join("")}
            </ul>

            <strong>Year 2: Healthcare Administration and Management</strong>
            <ul class="mb-20">
              ${pageData.courseOutline
                .slice(7, 13)
                .map(
                  (item) =>
                    `<li  style="list-style-type: disc" class="ms-3">${item}</li>`
                )
                .join("")}
            </ul>

            <strong>Year 3: Health Promotion and Education</strong>
            <ul class="mb-20">
              ${pageData.courseOutline
                .slice(14, 19)
                .map(
                  (item) =>
                    `<li  style="list-style-type: disc" class="ms-3">${item}</li>`
                )
                .join("")}
            </ul>

            <strong>Year 4: Clinical Pastoral Education and Field Experience</strong>
            <ul class="mb-20">
              ${pageData.courseOutline
                .slice(20, 25)
                .map(
                  (item) =>
                    `<li  style="list-style-type: disc" class="ms-3">${item}</li>`
                )
                .join("")}
            </ul>
<hr/>
<br/>
            <strong class="mb-10" >Graduate Degree (Master's) in Health Ministry Course Outline</strong>

            <strong>Year 1: Core Health Ministry Competencies</strong>
            <ul class="mb-20">
              ${pageData.courseOutline
                .slice(27, 32)
                .map(
                  (item) =>
                    `<li style="list-style-type: disc" class="ms-3">${item}</li>`
                )
                .join("")}
            </ul>

            <strong>Year 2: Specialization and Advanced Topics</strong>
            <ul class="mb-20">
              ${pageData.courseOutline
                .slice(33, 38)
                .map(
                  (item) =>
                    `<li  style="list-style-type: disc" class="ms-3">${item}</li>`
                )
                .join("")}
            </ul>

            <strong>Year 3: Field Experience and Capstone Project</strong>
            <ul class="mb-20">
              ${pageData.courseOutline
                .slice(39, 44)
                .map(
                  (item) =>
                    `<li  style="list-style-type: disc" class="ms-3">${item}</li>`
                )
                .join("")}
            </ul>

            <ul class="mb-20">
              ${pageData.courseOutline
                .slice(44, 45)
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
              <strong class="widget-title">Course Info</strong>
              <div class="mb-30"></div>
              <div class="course-single-info">
                <div class="single-info author">
                  <div class="author-img">
                    <img src="${pageData.professorImg}" alt="#">
                  </div>
                  <div class="single-info-content">
                    <strong>Teacher</strong>
                    <span>${pageData.professorName}</span>
                  </div>
                </div>
                <div class="single-info category">
                  <i class="far fa-bolt"></i>
                  <div class="single-info-content">
                    <strong>Category</strong>
                    <span>${pageData.category}</span>
                  </div>
                </div>
                <div class="single-info s-enroll">
                  <i class="far fa-users"></i>
                  <div class="single-info-content">
                    <strong>Enrolled</strong>
                    <span>${pageData.enrolled} Students</span>
                  </div>
                </div>
                <div class="single-info rattings">
                  <i class="far fa-clock"></i>
                  <div class="single-info-content">
                    <strong>Course Time</strong>
                    <span>${pageData.courseTime}</span>
                  </div>
                </div>
                <div class="single-info rattings">
                  <i class="far fa-dollar"></i>
                  <div class="single-info-content">
                    <strong>Course Fees</strong>
                    <span>${pageData.courseFees}</span>
                  </div>
                </div>
              </div>
              <a href="https://form.jotform.com/242364855582162" class="theme-btn">Enroll Now<i
                  class="fas fa-arrow-right-long"></i></a>
            </div>
            <div class="widget">
              <strong class="widget-title">Course Features</strong>
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
