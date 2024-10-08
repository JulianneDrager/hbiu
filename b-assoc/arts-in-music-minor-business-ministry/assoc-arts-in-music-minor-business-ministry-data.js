const pagesData = [
  {
    title:
      "<span style='color: black;'>Associate of Arts in Music and Entertainment Business</span>",
    imageUrl: "../../assets/img/course/ma-17.jpg",
    credits: 60 - 70,
    length: "2 YEARS",
    description: [
      `<div style='color: gray;'><strong>Program Description</strong></div>`,
      `<div style='color: gray;'>The Associate of Arts in Music and Entertainment Business is a two-year undergraduate degree combining music and entertainment business courses with business and ministry studies. This program will prepare you to embark on a rewarding and dynamic career in management within the performing arts and entertainment sectors. The degree will furnish you with essential communication, management, and leadership competencies necessary for roles behind the scenes in various settings, including theatre companies, museums, dance troupes, both contemporary and classical music organizations, art galleries, talent representation, and management firms, as well as television production companies.</div>`,
      `<div class='mt-3' style='color: gray;'><b>Core Areas:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music and Entertainment Business (industry, management, marketing)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Business in Ministry (non-profit management, church administration)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Biblical Studies and Theology</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Theory and History</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Performance and Production</li>`,
      `<div class='mt-3' style='color: gray;'><b>Program Objectives:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Develop music and entertainment business skills</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Understand business principles for ministry</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Integrate faith and the music/entertainment industry</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Cultivate leadership and entrepreneurial abilities</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Prepare for careers in music, entertainment, and ministry</li>`,
      `<div class='mt-3' style='color: gray;'><b>Coursework:</b></div>`,
      `<div style='color: gray;'>Typical courses include:</div>`,
      `<div style='color: gray;'><b>Music and Entertainment Business (40-50 credits):</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Industry Overview</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Artist Management</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Marketing and Promotion</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Entertainment Law</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Recording and Production</li>`,
      `<div style='color: gray;'><b>Business in Ministry (15-20 credits):</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Business Principles for Ministry</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Non-Profit Management</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Church Administration</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Ministry Leadership</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Biblical Foundations for Business</li>`,
      `<div style='color: gray;'><b>Electives:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Worship Music and Ministry</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Missions and Evangelism</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Christian Music Industry</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Ministry Entrepreneurship</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music and Arts in Worship</li>`,
      `<div class='mt-3' style='color: gray;'><b>Career Paths:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Minister</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Worship Pastor</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Christian Music Artist</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Producer</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Entertainment Manager</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Church Administrator</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Ministry Executive</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Marketing Specialist</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Non-Profit Manager</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Educator</li>`,
      `<div class='mt-3' style='color: gray;'><b>Degree Benefits:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Comprehensive music and entertainment business education</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Business training for ministry</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Biblical foundation for music and ministry</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Preparation for careers in music, entertainment, and ministry</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Opportunities for service in churches and ministries</li>`,
      `<div class='mt-3' style='color: gray;'><b>Admission Requirements:</b></div>`,
      `<div style='color: gray;'>Typically:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>High school diploma or equivalent</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Minimum GPA (varies by institution)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Test scores (e.g., SAT, ACT)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Audition or music portfolio</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Letters of recommendation</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Personal statement or essay</li>`,
      `<div class='mt-3' style='color: gray;'><b>Duration:</b> 2 years (full-time)</div>`,
      `<div class='mt-3' style='color: gray;'><b>Credit Hours:</b> 60-70</div>`,
      `<div class='mt-3' style='color: gray;'><b>Transferable Skills:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music and entertainment business management</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Business and ministry leadership</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Biblical knowledge and application</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Communication and interpersonal skills</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Entrepreneurial and critical thinking</li>`,
    ],
    professorImg: "../../assets/img/team/logo.png", // Update the professor image URL as needed
    professorName: "HBIU", // Update the professor name as needed
    category: "Music and Entertainment Business",
    enrolled: 88,
    courseTime: "2 Years",
    courseFees: "$19,000",
    lectures: 4,
    quizes: " ",
    duration: "2 Years",
    language: "English",
    skillLevel: "Advanced",
    location: "Online/On campus",
    students: 145,
    certificate: "Yes",
    assessments: "Yes",
  },
  // Add more page data objects here
];
