const pagesData = [
  {
    title:
      "<span style='color: black;'>Associate of Arts in Christian Education (AACE)</span>",
    imageUrl: "../../assets/img/course/ma-17.jpg",
    credits: 60 - 70,
    length: "2 YEARS",
    description: [
      `<div style='color: gray;'><strong>Program Description</strong></div>`,
      `<div style='color: gray;'>The Associate of Arts in Christian Education degree is tailored for individuals aspiring to serve in the establishment or management of Christian Education departments within churches and Christian schools. This program offers a comprehensive biblical and theological foundation for those pursuing careers as ministers of Christian education, children's ministry leaders, youth ministers, or adult ministry leaders.</div>`,
      `<div class='mt-3' style='color: gray;'><b>Foundational Courses</b></div>`,
      `<div style='color: gray;'>These courses lay the essential groundwork for theological and biblical comprehension and are required for all students enrolling in a degree program at Logos University. They are compulsory for all undergraduate students.</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Church History 1</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>New Testament Survey</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Old Testament Survey</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Christology</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Hermeneutics</li>`,
      `<div class='mt-3' style='color: gray;'><b>Core Concentration Courses</b></div>`,
      `<div style='color: gray;'>Core concentration courses form the essential study for the major.</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Introduction to Christian Education</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Dynamics of Teaching Methods</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Principles of Teaching</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Theology of Christian Education</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Classroom Management</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Curriculum Development</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Ministry to Children</li>`,
      `<div style='color: gray;'>It is a two-year undergraduate degree that prepares students to teach, minister, and serve in various Christian educational settings.</div>`,
      `<div class='mt-3' style='color: gray;'><b>Core Areas:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Biblical Studies (Old and New Testament)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Christian Education</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Ministry and Evangelism</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Child and Adolescent Development</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Education Principles and Methods</li>`,
      `<div class='mt-3' style='color: gray;'><b>Program Objectives:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Understand biblical foundations for Christian education</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Develop teaching and ministry skills</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Cultivate spiritual growth and discipleship</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Prepare for Christian education roles</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Develop critical thinking and communication skills</li>`,
      `<div class='mt-3' style='color: gray;'><b>Coursework:</b></div>`,
      `<div style='color: gray;'>Typical courses include, but are not limited to:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Biblical Foundations for Education</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Principles of Christian Education</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Teaching Methods and Strategies</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Children's Ministry</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Youth Ministry</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Christian Curriculum Development</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Classroom Management</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Educational Psychology</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Philosophy of Christian Education</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Ministry Internship</li>`,
      `<div class='mt-3' style='color: gray;'><b>Career Paths:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Christian School Teacher</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Children's Minister</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Youth Minister</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Sunday School Teacher</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Christian Education Director</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Ministry Coordinator</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Camp Director</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Christian Non-Profit Professional</li>`,
      `<div class='mt-3' style='color: gray;'><b>Degree Benefits:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Biblical foundation for education</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Teaching and ministry skills</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Spiritual growth and discipleship</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Preparation for Christian education roles</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Opportunities for vocational ministry</li>`,
      `<div class='mt-3' style='color: gray;'><b>Admission Requirements:</b></div>`,
      `<div style='color: gray;'>Typically:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>High school diploma or equivalent</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Minimum GPA (varies by institution)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Test scores (e.g., SAT, ACT)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Letters of recommendation</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Personal statement or essay</li>`,
      `<div class='mt-3' style='color: gray;'><b>Duration:</b> 2 years (full-time)</div>`,
      `<div class='mt-3' style='color: gray;'><b>Credit Hours:</b> 60-70</div>`,
      `<div class='mt-3' style='color: gray;'><b>Transferable Skills:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Teaching and communication</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Ministry and evangelism</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Leadership and teamwork</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Critical thinking and problem-solving</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Spiritual guidance and discipleship</li>`,
    ],
    professorImg: "../../assets/img/team/logo.png", // Update the professor image URL as needed
    professorName: "HBIU", // Update the professor name as needed
    category: "Christian Education",
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