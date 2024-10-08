const courses = [
  {
    tag: "Health Care Management",
    imgSrc: "./assets/img/course/ma-2.jpg",
    link: "b-ma/healthcare/ma-healthcare.html",
    title: "MA in Health Care Management",
    description:
      "This is a graduate-level program that focuses on preparing individuals for leadership and management roles in healthcare. You will gain skills to navigate the complex healthcare landscape, manage healthcare organizations, and improve the delivery of healthcare services.",
    rating: 4.0,
  },
  {
    tag: "Public Health FB",
    imgSrc: "./assets/img/course/ma-3.jpg",
    link: "b-ma/public-health-faith-based/ma-public-health-faith-based.html",
    title: "MA in Public Health Faith Based",
    description:
      "A Master of Arts in Public Health Faith Based focuses on integrating faith and public health principles to address health disparities and promote wellness in communities. The program includes courses on health promotion, epidemiology, and community health.",
    rating: 4.0,
  },
  {
    tag: "Public Health",
    imgSrc: "./assets/img/course/ma-4.jpg",
    link: "b-ma/public-health/ma-public-health.html",
    title: "MA in Public Health",
    description:
      "A Master of Arts in Public Health provides a comprehensive understanding of public health principles, including but not limited to, disease prevention, health promotion, and health policy. Preparing for leadership roles in various public health organizations.",
    rating: 4.0,
  },
  {
    tag: "Business Management",
    imgSrc: "./assets/img/course/ma-5.jpg",
    link: "b-ma/business-management/ma-business-management.html",
    title: "MA in Business Management",
    description:
      "A MA of Arts in Business Management equips individuals with the skills needed to manage and lead businesses effectively. The program covers topics such as organizational behavior, strategic management, and financial management.",
    rating: 4.0,
  },
  {
    tag: "Life Coaching",
    imgSrc: "./assets/img/course/ma-6.jpg",
    link: "b-ma/life-coaching/ma-life-coaching.html",
    title: "MA in Life Coaching",
    description:
      "A Master of Arts in Life Coaching prepares individuals to help clients achieve personal and professional goals. The program includes courses on coaching techniques, goal setting, and motivational strategies.",
    rating: 4.0,
  },
  {
    tag: "Psychology",
    imgSrc: "./assets/img/course/ma-7.jpg",
    link: "b-ma/psychology/ma-psychology.html",
    title: "MA of Science (MS) in Psychology",
    description:
      "A Master of Science in Psychology provides advanced knowledge of psychological theories and practices. The program prepares individuals for careers in counseling, research, and clinical psychology.",
    rating: 4.0,
  },
  {
    tag: "Leadership and Cultural Management",
    imgSrc: "./assets/img/course/ma-8.jpg",
    link: "b-ma/leadership-and-cultural-management/ma-leadership-and-cultural-management.html",
    title: "MA in Leadership and Cultural Management",
    description:
      "A MA of Arts in Christian Leadership and Cultural Management focuses on developing leadership skills within a Christian context. The program includes courses on leadership theory, cultural management, and ethical decision-making.",
    rating: 4.0,
  },
  {
    tag: "Marketing & Advertising",
    imgSrc: "./assets/img/course/ma-9.jpg",
    link: "b-ma/marketing-and-advertising/ma-marketing-and-advertising.html",
    title: "MA in Marketing & Advertising",
    description:
      "A Master of Arts in Marketing and Advertising provides individuals with the skills needed to create and manage effective marketing campaigns. The program covers topics such as consumer behavior, digital marketing, and brand management.",
    rating: 4.0,
  },
  {
    tag: "Biblical Counseling",
    imgSrc: "./assets/img/course/ma-10.jpg",
    link: "b-ma/biblical-counseling/ma-biblical-counseling.html",
    title: "MA in Biblical Counseling",
    description:
      "A Master of Arts in Biblical Counseling prepares individuals to provide counseling services based on biblical principles. The program includes comprehensive courses on the following: Counseling techniques, biblical studies, and pastoral care.",
    rating: 4.0,
  },
  {
    tag: "Christian Counseling & Psychology",
    imgSrc: "./assets/img/course/ma-11.jpg",
    link: "b-ma/christian-counseling-and-psychology/ma-christian-counseling-and-psychology.html",
    title: "MA in Christian Counseling & Psychology",
    description:
      "A MA of Arts in Christian Counseling and Psychology combines psychological theories with Christian principles providing holistic counseling, covering counseling techniques, spiritual formation, and ethical issues.",
    rating: 4.0,
  },
  {
    tag: "Christian Law",
    imgSrc: "./assets/img/course/ma-12.jpg",
    link: "b-ma/laws/ma-laws.html",
    title: "MA of Laws (LL.M.)",
    description:
      "A Master of Laws in Christian Law will provide students with advanced and focused legal education with a isolated concentration on Christian principles and ethics. The program prepares individuals for careers in various legal practices, academia, and ministry.",
    rating: 4.0,
  },
  {
    tag: "Ministry",
    imgSrc: "./assets/img/course/ma-13.jpg",
    link: "b-ma/ministry/ma-ministry.html",
    title: "MA of Arts in Ministry",
    description:
      "A Master of Arts in Ministry will prepare willing individuals for various leadership roles within the religious organizations. This intricate program will include multiple courses on the following: theology, pastoral care, and practicing church administration etiquette.",
    rating: 4.0,
  },
  {
    tag: "Business Administration",
    imgSrc: "./assets/img/course/ma-14.jpg",
    link: "/b-ma/business-administration/ma-business-administration.html",
    title: "MA in Business Administration",
    description:
      "A Master of Arts in Business Management equips individuals with the skills needed to manage and lead businesses effectively. The program covers topics such as organizational behavior, strategic management, and financial management.",
    rating: 4.0,
  },
  {
    tag: "Music Production",
    imgSrc: "./assets/img/course/ma-15.jpg",
    link: "b-ma/music-production/ma-music-production.html",
    title: "MA in Music Production",
    description:
      "A Master of Arts in Music Media Production provides willing individuals with the skills needed to produce and manage music media projects. This program will cover the following topics, including, music theory, audio engineering, and media production.",
    rating: 4.0,
  },
  {
    tag: "Humanitarianism & Conflict Response",
    imgSrc: "./assets/img/course/ma-16.jpg",
    link: "b-ma/humanitarianism-and-conflict-response/ma-humanitarianism-and-conflict-response.html",
    title: "MA in Humanitarianism & Conflict Response",
    description:
      "A MA of Arts in Humanitarianism and Conflict Response prepares students to work in humanitarian aid and conflict resolution. The program includes international relations, disaster management, and peace-building.",
    rating: 4.0,
  },
  {
    tag: "Addiction Counselling",
    imgSrc: "./assets/img/course/ma-17.jpg",
    link: "b-ma/addiction-counseling/ma-addiction-counseling.html",
    title: "MA of Science in Addiction Counselling",
    description:
      "A MA of Sci. in Addiction Counselling provides skills to help clients overcome addiction. The program covers counseling techniques, addiction theory, and recovery strategies.",
    rating: 4.0,
  },
  {
    tag: "Social Work",
    imgSrc: "./assets/img/course/ma-18.jpg",
    link: "b-ma/social-work/ma-social-work.html",
    title: "MA in Social Work",
    description:
      "A Master of Arts in Social Work prepares individuals for careers in working in social services and community organizations. The program includes courses focused on social work theory, practice, and ethics.",
    rating: 4.0,
  },
  {
    tag: "Divinity & Chaplaincy",
    imgSrc: "./assets/img/course/ma-19.jpg",
    link: "b-ma/divinity-and-chaplaincy/ma-divinity-and-chaplaincy.html",
    title: "MA in Divinity & Chaplaincy",
    description:
      "A Master of Arts in Divinity and Chaplaincy prepares individuals for roles as chaplains and spiritual leaders. The program will include various courses on the following: theology, pastoral care, and ethical issues.",
    rating: 4.0,
  },
  {
    tag: "Counseling & Psychology",
    imgSrc: "./assets/img/course/ma-20.jpg",
    link: "b-ma/counseling-and-psychology/ma-counseling-and-psychology.html",
    title: "MA in Counseling & Psychology",
    description:
      "A MA of Arts in Christian Counseling & Psych. w/a focus on Clinical Mental Health combines psychological theories and biblical principles, covering holistic counseling skills, spiritual formation, and ethical issues.",
    rating: 4.0,
  },
  {
    tag: "Christian Leadership",
    imgSrc: "./assets/img/course/ma-21.jpg",
    link: "b-ma/christian-leadership/ma-christian-leadership.html",
    title: "MA in Christian Leadership",
    description:
      "A Master of Arts in Christian Leadership focuses on developing leadership skills within a Christian context. The program includes courses on leadership theory, cultural management, and ethical decision-making.",
    rating: 4.0,
  },
  {
    tag: "Education",
    imgSrc: "./assets/img/course/ma-22.jpg",
    link: "b-ma/education/ma-education.html",
    title: "MA of Arts in Education",
    description:
      "A Master of Arts in Christian Leadership focuses on developing leadership skills within a Christian context. The program includes courses on leadership theory, cultural management, and ethical decision-making.",
    rating: 4.0,
  },
  {
    tag: "Theology",
    imgSrc: "./assets/img/course/ma-23.jpg",
    link: "b-ma/theology/ma-theology.html",
    title: "MA in Theology",
    description:
      "A Master of Arts in Christian Leadership focuses on developing leadership skills within a Christian context. The program includes courses on leadership theory, cultural management, and ethical decision-making.",
    rating: 4.0,
  },
];
