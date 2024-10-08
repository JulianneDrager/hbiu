const pagesData = [
  {
    title:
      "<span style='color: black;'>Associate of Arts in Music Production and Ministry</span>",
    imageUrl: "../../assets/img/course/ma-17.jpg",
    credits: 50,
    length: "2 YEARS",
    description: [
      `<div style='color: gray;'><strong>Program Description</strong></div>`,
      `<div style='color: gray;'>The Associate of Arts in Music Production and Ministry is a two-year undergraduate degree that combines music, production, and ministry training. This program equips students with the essential skills and techniques for composing and editing music, as well as for engaging in the music production sector. Participants acquire proficiency in music creation software, virtual instruments, recording fundamentals, and studio methodologies. Additionally, they develop an understanding of industry-standard practices for producing music tailored for visual media.</div>`,
      `<div class='mt-3' style='color: gray;'><b>Core Areas:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Theory and History</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Performance (vocal or instrumental)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Production and Recording</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Worship Ministry and Leadership</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Biblical Studies and Theology</li>`,
      `<div class='mt-3' style='color: gray;'><b>Program Objectives:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Develop musical skills and knowledge</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Understand music production and recording techniques</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Cultivate worship ministry and leadership abilities</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Integrate biblical principles into music ministry</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Prepare for careers in music, production, and ministry</li>`,
      `<div class='mt-3' style='color: gray;'><b>Coursework:</b></div>`,
      `<div style='color: gray;'>Typical courses include:</div>`,
      `<div style='color: gray;'>All students must declare an area of emphasis (Keyboard, Instrumental, Vocal, or Composition)</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 201 Music Theory and Composition</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 202 Music Performance and Ensemble</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 203 Recording and Music Production</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 204 Worship Ministry and Leadership</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 205 Biblical Foundations for Ministry</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 206 Music History and Appreciation</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 207 Sound Design and Live Sound</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 208 Music Business and Industry</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 001 Theory and Musicianship 1 *</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 002 Theory and Musicianship 2 *</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 003 Theory and Musicianship 3</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 004 Theory and Musicianship 4</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 041AD Applied Music Lessons (must be completed four times for a total of 4 units)</li>`,
      `<div style='color: gray;'>One of the following large ensemble courses must be completed 4 times for a total of 4-8 units:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 034AD The Study of Concert Choir</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 054AD The Study of Symphony Orchestra</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 074AD The Study of Symphonic Band</li>`,
      `<div style='color: gray;'>All music majors are required to enroll in piano classes until the piano proficiency requirement is met.</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 020AD Piano</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 010 Music Appreciation</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 011 Music Appreciation/Jazz</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 013 Music of the World</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 014 History of Rock and Roll</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 030 Beginning Voice</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 036 Chamber Singers Renaissance</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 037 Chamber Singers Classical</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 038 Chamber Singers Romantic</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 039 Chamber Singers 20th Century</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 072AD Jazz Orchestra</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MUS 180 The Music Business</li>`,
      `<div class='mt-3' style='color: gray;'><b>Career Paths:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Worship Leader</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Pastor</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Producer</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Recording Engineer</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Minister</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Christian Music Artist</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Educator</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Sound Technician</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music Director</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Ministry Coordinator</li>`,
      `<div class='mt-3' style='color: gray;'><b>Degree Benefits:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Comprehensive music and production education</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Ministry training and leadership development</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Biblical foundation for music ministry</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Preparation for careers in music and ministry</li>`,
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
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Music performance and production</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Worship ministry and leadership</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Biblical knowledge and application</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Technical skills (recording, sound design)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Communication and teamwork</li>`,
    ],
    professorImg: "../../assets/img/team/logo.png", // Update the professor image URL as needed
    professorName: "HBIU", // Update the professor name as needed
    category: "Addiction Counseling",
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