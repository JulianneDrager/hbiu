const courses = [
  {
    tag: "IT Support",
    imgSrc: "./assets/img/course/01-ba-it.jpg",
    link: "bachelors/it/ba-it.html",
    title: "Bachelors: IT Support",
    description:
      "This course provides students with the knowledge and skills required to troubleshoot, maintain, and repair computer systems, networks, and software applications. Students will learn to identify and resolve common IT issues, configure and manage network devices, and provide excellent customer service as an IT support specialist.",
    rating: 4.0,
  },
  {
    tag: "Emergency Management",
    imgSrc: "./assets/img/course/01-ba-em.jpg",
    link: "bachelors/emergency/ba-emg.html",
    title: "Bachelors: Emergency Management",
    description:
      "The Bachelor of Science in Emergency Management with a focus on Faith-Based Community Service prepares students for leadership roles in emergency management and disaster relief in faith-based organizations and communities. The program provides students with knowledge and skills in emergency preparedness, response, and recovery while also integrating principles of faith-based service and community outreach.",
    rating: 4.0,
  },
  {
    tag: "Christian Psychology",
    imgSrc: "./assets/img/course/03.jpg",
    link: "bachelors/christain/ba-chris.html",
    title: "BA in Christian Psychology",
    description:
      "A Bachelor of Science in Christian Psychology is an undergraduate degree program that combines the principles of psychology with a Christian worldview and values. This program is designed to provide students with a strong foundation in psychology while integrating Christian faith and ethics into the study of human behavior and mental processes. Here are some key points to know about a BA in Christian Psychology:",
    rating: 4.0,
  },
  {
    tag: "Education",
    imgSrc: "./assets/img/course/16.jpg",
    link: "bachelors/education/ba-edu.html",
    title: "BA in Education",
    description:
      "A Bachelor of Arts (BA) in Education is an undergraduate degree program that focuses on preparing individuals for careers in education. This program is designed to equip students with the knowledge and skills needed to become effective educators, teachers, or professionals in various educational settings. Here are some key points to know about a BA in Education:",
    rating: 4.0,
  },
  {
    tag: "Health Ministry & Social Services",
    imgSrc: "./assets/img/course/05a.jpg",
    link: "bachelors/health/ba-health.html",
    title: "BA in Health Ministry & Social Services",
    description:
      "A 'BA in Ministry of Health and Social Services' is not a standard academic degree program. Instead, it appears to be related to employment or a position within a government agency or ministry responsible for health and social services. Program is 4 Years but can complete in 3 . In many countries, government ministries or departments oversee public health initiatives, healthcare systems, and social welfare programs.",
    rating: 4.0,
  },
  {
    tag: "Theology",
    imgSrc: "./assets/img/course/06a.jpg",
    link: "bachelors/theology/ba-theology.html",
    title: "BA in Theology",
    description:
      "Bachelor of Arts (BA) in Theology is an undergraduate academic degree program that focuses on the study of religious beliefs, practices, and related subjects. This degree is typically offered for individuals interested in deepening their understanding of religion, theology, and related fields. Here are some key points to know about a BA in Theology:",
    rating: 4.0,
  },
  {
    tag: "Law",
    imgSrc: "./assets/img/course/05.jpg",
    link: "bachelors/law/ba-law.html",
    title: "BA in Law",
    description:
      "A is an undergraduate academic degree program that provides a foundational understanding of legal principles, concepts, and systems. It is often considered a preliminary step for individuals interested in pursuing a legal career or related fields. Here are some key points to know about a BA in Law program: The LLB program with a focus on Christian Legal Studies provides students with a strong foundation in the law while also exploring the intersections of law, ethics, and Christian theology.",
    rating: 4.0,
  },
  {
    tag: "Business Administration",
    imgSrc: "./assets/img/course/08.jpg",
    link: "bachelors/biz-admin/ba-biz-admin.html",
    title: "BA in Business Administration",
    description:
      "A Bachelor of Business Administration (BBA) is an undergraduate academic degree program that focuses on various aspects of business management and administration. It is a popular choice for individuals who want to pursue careers in business, management, or related fields. Here are some key points to know about a BBA program:",
    rating: 4.0,
  },
  {
    tag: "Christian Education",
    imgSrc: "./assets/img/course/06b.jpg",
    link: "bachelors/chris-edu/ba-chris-edu.html",
    title: "BA in Christian Education",
    description:
      "A Bachelor of Arts (BA) in Christian Education is an undergraduate degree program that focuses on preparing individuals to work in various educational roles within a Christian or religious context. This program combines principles of education with a strong foundation in Christian theology and faith. Here are some key points to know about a BA in Christian Education:",
    rating: 4.0,
  },
  {
    tag: "Chaplaincy",
    imgSrc: "./assets/img/course/10.jpg",
    link: "bachelors/chaplaincy/ba-chap.html",
    title: "BA in Chaplaincy",
    description:
      "A Bachelor of Arts (BA) in Chaplaincy is an undergraduate degree program designed to prepare individuals for the role of a chaplain. Chaplains are spiritual care providers who offer support, counseling, and spiritual guidance in various settings, including hospitals, prisons, military units, universities, and religious organizations. Here are some key points to know about a BA in Chaplaincy:",
    rating: 4.0,
  },
  {
    tag: "Data Analytics",
    imgSrc: "./assets/img/course/11.jpg",
    link: "bachelors/data-analytics/ba-data-ana.html",
    title: "BA in Data Analytics",
    description:
      "Bachelor of Science Data Management and Data Analytics degree program is focused on three key areas: programming skills including scripting, data management, data wrangling, Python, R, and machine learning, math skills including statistical analysis, probability, and data science techniques, and business influence skills including leadership, communication, critical thinking, and visualization.",
    rating: 4.0,
  },
  {
    tag: "Music Production",
    imgSrc: "./assets/img/course/12.jpg",
    link: "bachelors/music/ba-music.html",
    title: "BA in Music Production",
    description:
      "Gain an expert-level education in creating and producing music. Throughout this program, you will learn to multitrack record, overdub, edit, and mix music in a variety of styles using complex digital audio systems. This program will give you the analytical and professional skills needed for a variety of music production-focused careers including music producer, recording engineer, mix engineer, mastering engineer, live sound engineer, sound technician, and more.",
    rating: 4.0,
  },
  {
    tag: "Humanitarianism & Conflict Response",
    imgSrc: "./assets/img/course/13.jpg",
    link: "bachelors/humanitarian/ba-human.html",
    title: "BA in Humanitarianism & Conflict Response",
    description:
      "We believe that even the world’s most destructive conflicts can be resolved to create a more peaceful future. With a bachelor’s degree in conflict resolution from Portland State University, you will be able to participate and contribute to this important work locally and globally. As a conflict resolution major, you will learn to analyze conflict, uncovering the underpinnings of conflict dynamics in a wide variety of settings and scales. ",
    rating: 4.0,
  },

  {
    tag: "Marketing & Advertising",
    imgSrc: "./assets/img/course/15.jpg",
    link: "bachelors/marketing/ba-market.html",
    title: "BA in Marketing & Advertising",
    description:
      "Program can be completed in 3 years . A Bachelor of Arts in Marketing Advertising is an undergraduate degree program that focuses on the principles and practices of marketing and advertising. The program is designed to equip students with knowledge and skills in areas such as consumer behavior, market research, branding, advertising strategies, digital marketing, and communication.",
    rating: 4.0,
  },
  {
    tag: "Divinity",
    imgSrc: "./assets/img/course/10a.jpg",
    link: "bachelors/divinity/ba-divinity.html",
    title: "BA in Divinity",
    description:
      "A Bachelor of Arts (BA) in Divinity is an undergraduate degree program that focuses on the study of religious and theological topics. This program is typically offered by religiously affiliated institutions or universities with strong theological departments. Here are some key points to know about a BA in Divinity:",
    rating: 4.0,
  },
];
