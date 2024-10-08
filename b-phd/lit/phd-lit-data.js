const pagesData = [
  {
    title: "Doctor of Philosophy (Ph.D.) in English with a Major in Literature",
    imageUrl: "../../assets/img/course/phd-7.jpg",
    credits: 120,
    length: "3 YEARS",
    description: [
      `<div>A Doctor of Philosophy (Ph.D.) in English with a Major in Literature is a terminal degree that focuses on the advanced study of English literature, preparing students for careers in research, academia, and writing.</div>`,

      `<div class='mb-20'>This degree program typically covers:</div>`,
      `<li style='margin-left: 2rem; margin-top:1rem'>1. Literary Theory and Criticism</li>`,
      `<li style='margin-left: 2rem'>2. British and American Literature (including specializations like Renaissance, Romanticism, Modernism, etc.)</li>`,
      `<li style='margin-left: 2rem'>3. World Literature and Comparative Studies</li>`,
      `<li style='margin-left: 2rem'>4. Genre studies (e.g., poetry, novel, drama)</li>`,
      `<li style='margin-left: 2rem'>5. Period studies (e.g., medieval, Victorian, modern)</li>`,
      `<li style='margin-left: 2rem'>6. Author studies (e.g., Shakespeare, Austen, Joyce)</li>`,
      `<li style='margin-left: 2rem'>7. Thematic studies (e.g., gender, race)</li>`,

      `<div class='mb-1 mt-20'>The program culminates in an original dissertation that contributes to the field of literary studies. Graduates with a Ph.D. in English with a Major in Literature can pursue careers as:</div>`,
      `<li style='margin-left: 2rem'>1. University professors or researchers</li>`,
      `<li style='margin-left: 2rem'>2. Literary critics or scholars</li>`,
      `<li style='margin-left: 2rem'>3. Writers or editors</li>`,
      `<li style='margin-left: 2rem'>4. Publishing industry professionals</li>`,
      `<li style='margin-left: 2rem'>5. Cultural or literary critics</li>`,

      `<div class='mt-30'>Key skills and knowledge gained through this degree program include:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>1. Advanced understanding of literary theories and methods</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>2. Expertise in literary analysis and interpretation</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>3. Strong research and writing skills</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>4. Ability to teach and communicate complex ideas</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>5. Knowledge of literary history and cultural contexts</li>`,

      `<div class='mb-1, mt-4'><b>Coursework:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>English Language and Linguistics</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Literary Theory and Criticism</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>British and American Literature (including specializations like Renaissance, Romanticism, Modernism, etc.)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>World Literature and Comparative Studies</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Rhetoric and Composition</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Research Methods and Scholarly Writing</li>`,

      `<div class='mb-1, mt-4'><b>Minor in Literature:</b></div>`,
      `<div>Additional coursework in literary studies, such as:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Genre studies (e.g., poetry, novel, drama)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Period studies (e.g., medieval, Victorian, modern)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Author studies (e.g., Shakespeare, Austen, Joyce)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Thematic studies (e.g., gender, race, identity in Christ)</li>`,

      `<li style='list-style-type: disc; margin-left: 2rem'>Original research and analysis of a literary topic or theme</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Contribution to the field of literary studies</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Written and oral defense of the dissertation</li>`,

      `<div class='mb-1, mt-4'><b>Career Opportunities:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>University professor or researcher</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Literary critic or scholar</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Writer or editor</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Publishing industry professional</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Cultural or literary critic</li>`,

      `<div class='mb-1, mt-4'><b>Skills and Knowledge:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Advanced understanding of literary theories and methods</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Expertise in literary analysis and interpretation</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Strong research and writing skills</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Ability to teach and communicate complex ideas</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'>Knowledge of literary history and cultural contexts</li>`,

      `<div class='mb-1, mt-4'><b>Doctor of Ministry (D.Min.) in Education:</b></div>`,
      `<div>A Doctor of Ministry (D.Min.) in Education is a professional doctoral degree that focuses on the advanced study of ministry and education, preparing students for leadership roles in religious education, teaching, and ministry.</div>`,

      `<div class='mt-10'>This degree program typically covers:</div>`,
      `<li style='margin-left: 2rem'>1. Ministry and Education Theory</li>`,
      `<li style='margin-left: 2rem'>2. Curriculum Design and Development</li>`,
      `<li style='margin-left: 2rem'>3. Teaching and Learning Strategies</li>`,
      `<li style='margin-left: 2rem'>4. Religious Education Leadership</li>`,
      `<li style='margin-left: 2rem'>5. Spiritual Formation and Direction</li>`,
      `<li style='margin-left: 2rem'>6. Research Methods and Dissertation</li>`,

      `<div class='mb-1 mt-20'>The program culminates in an original dissertation that contributes to the field of ministry and education. Graduates with a D.Min. in Education can pursue careers as:</div>`,
      `<li style='margin-left: 2rem'>1. Religious educators</li>`,
      `<li style='margin-left: 2rem'>2. Ministry leaders</li>`,
      `<li style='margin-left: 2rem'>3. Teachers and professors</li>`,
      `<li style='margin-left: 2rem'>4. Curriculum developers</li>`,
      `<li style='margin-left: 2rem'>5. Spiritual directors</li>`,
      `<li style='margin-left: 2rem'>6. Church administrators</li>`,

      `<div class='mt-30'>Key skills and knowledge gained through this degree program include:</div>`,
      `<li style='margin-left: 2rem'>1. Advanced understanding of ministry and education theories</li>`,
      `<li style='margin-left: 2rem'>2. Expertise in curriculum design and development</li>`,
      `<li style='margin-left: 2rem'>3. Effective teaching and learning strategies</li>`,
      `<li style='margin-left: 2rem'>4. Leadership and administration skills</li>`,
      `<li style='margin-left: 2rem'>5. Spiritual formation and direction</li>`,
      `<li style='margin-left: 2rem'>6. Research and dissertation skills</li>`,
    ],
    professorImg: "../../assets/img/team/logo.png", // Update the professor image URL as needed
    professorName: "HBIU", // Update the professor name as needed
    category: "Education",
    enrolled: 62,
    courseTime: "03 Years",
    courseFees: "$40,000",
    lectures: 4,
    quizes: " ",
    duration: "3 Years",
    language: "English",
    skillLevel: "Basic",
    location: "Online/On Campus",
    students: 75,
    certificate: "Yes",
    assessments: "Yes",
  },
  // Add more page data objects here
];
