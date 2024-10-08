function generateCourseHTML(course) {
  return `
<div class="col-md-6 col-lg-4">
  <div class="course-item wow fadeInUp" data-wow-delay=".25s">
    <span class="course-tag"><i class="far fa-bookmark"></i> ${
      course.tag
    }</span>
    <div class="course-img">
      <img src="${course.imgSrc}" alt="" />
      <a href="${course.link}" class="btn"><i class="far fa-link"></i></a>
    </div>
    <div class="course-content">
      <div class="course-meta">
        <div class="course-rating">
          ${'<i class="fas fa-star"></i>'.repeat(Math.floor(course.rating))}
          ${'<i class="far fa-star"></i>'.repeat(5 - Math.floor(course.rating))}
          <span>(${course.rating})</span>
        </div>
      </div>
      <h4 class="course-title"><a href="${course.link}">${course.title}</a></h4>
      <p class="course-text">${course.description}</p>
      <div class="course-bottom">
        <div class="course-bottom-left">
          <a href="${
            course.link
          }"><span><i class="far fa-users"></i>EXPLORE MORE</span></a>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

document.addEventListener("DOMContentLoaded", () => {
  const courseContainer = document.getElementById("course-container");
  courses.forEach((course) => {
    courseContainer.innerHTML += generateCourseHTML(course);
  });
});
