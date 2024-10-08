const courses = [
  {
    tag: "Arts in divinity",
    imgSrc: "./assets/img/course/ma-2.jpg",
    link: "b-assoc/arts-in-divinity/assoc-arts-in-divinity.html",
    title: "Associate of Arts in Divinity (AAD)",
    description:
      "An Associate of Arts in Divinity (AAD) is a two-year undergraduate degree combining theological studies and liberal arts. This program is intended to equip dedicated individuals aged 18 and older, who do not possess a degree, for roles in support and associate ministry.",
    rating: 4.0,
  },
  {
    tag: "Theology",
    imgSrc: "./assets/img/course/ma-3.jpg",
    link: "b-assoc/theology/assoc-theology.html",
    title: "Associate in Theology (ATH)",
    description:
      "Two-year undergraduate degree focusing on theology, biblical studies, and ministry. Survey courses on the Old and New Testaments guide students through the various books of the Bible, offering insights into their historical context, background, and contemporary relevance.",
    rating: 4.0,
  },
  {
    tag: "Prophetic Ministry",
    imgSrc: "./assets/img/course/ma-4.jpg",
    link: "b-assoc/prophetic-ministry/assoc-prophetic-ministry.html",
    title: "Associate in Prophetic Ministry (APM)",
    description:
      "Two-year undergraduate degree focused on equipping students for prophetic ministry preparation, leadership, and evangelism practices. Prophetic ministry represents a spiritual practice found in various religious traditions, notably within Christianity. ",
    rating: 4.0,
  },
  {
    tag: "Christian Leadership & Culture",
    imgSrc: "./assets/img/course/ma-4.jpg",
    link: "b-assoc/christian-leadership/assoc-christian-leadership.html",
    title: "Assoc. in Christian Leadership & Culture (AACLCM) ",
    description:
      "Two-year undergraduate degree that combines biblical studies, leadership principles, and cultural management. Rigorous biblical education is provided by distinguished faculty with extensive ministry backgrounds.",
    rating: 4.0,
  },
  {
    tag: "Christian Education",
    imgSrc: "./assets/img/course/ma-6.jpg",
    link: "b-assoc/christian-education/assoc-christian-education.html",
    title: "Assoc. in Christian Education (AACE) ",
    description:
      "The Associate of Arts in Christian Education degree is tailored for individuals aspiring to serve in the establishment of Christian Education within churches and Christian schools in their community. These courses lay the essential skills for theological & biblical comprehension.",
    rating: 4.0,
  },
  {
    tag: "Chaplaincy",
    imgSrc: "./assets/img/course/ma-7.jpg",
    link: "b-assoc/arts-in-chaplaincy/assoc-arts-in-chaplaincy.html",
    title: "Associate of Arts in Chaplaincy (AAC)",
    description:
      "Two-year undergraduate degree preparing students for chaplaincy roles. A chaplain provides ministry and spiritual support in a secular place such as a healthcare facility, university campus, business workplace, prison, law enforcement, and many other locations.",
    rating: 4.0,
  },
  {
    tag: "Emergency Management",
    imgSrc: "./assets/img/course/ma-8.jpg",
    link: "b-assoc/emergency-management/assoc-emergency-management.html",
    title: "Assoc. in Emergency Management & Faith-Based Initiative (AAEMFBI)",
    description:
      "A MA of Arts in Christian Leadership and Cultural Management focuses on developing leadership within a Christian context. Courses include leadership theory, cultural management, and ethical decision-making.",
    rating: 4.0,
  },
  {
    tag: "Humanitarianism and Conflict",
    imgSrc: "./assets/img/course/ma-9.jpg",
    link: "b-assoc/arts-in-humanitarianism/assoc-arts-in-humanitarianism.html",
    title: "Assoc. in Humanitarianism and Conflict Response (AAHCR) ",
    description:
      "Two-year undergraduate degree preparing students to respond to humanitarian crises and conflicts. These are two interconnected fields that address the complexities of human suffering and crisis. ",
    rating: 4.0,
  },
  {
    tag: "Music, Production & Ministry",
    imgSrc: "./assets/img/course/ma-10.jpg",
    link: "b-assoc/arts-in-ministry-of-music/assoc-arts-in-ministry-of-music.html",
    title: "Assoc. in Music, Production, and Ministry (AAMPM)",
    description:
      "Two-year undergraduate degree combining music, production, and ministry. This program equips students with the essential skills for composing and editing music, as well as for engaging in the music production sector.",
    rating: 4.0,
  },
  {
    tag: "Music & Theory ",
    imgSrc: "./assets/img/course/ma-11.jpg",
    link: "b-assoc/arts-in-ministry-of-music-theory/assoc-arts-in-ministry-of-music-theory.html",
    title: "Assoc. in Ministry of Music & Theory (AAMMT) ",
    description:
      "Two-year undergraduate degree that combines music theory, ministry training, and practical music skills. This program equips you with biblical knowledge and critical-thinking abilities essential for analyzing various leadership styles, philosophical frameworks, theories, and dynamics of change. ",
    rating: 4.0,
  },
  {
    tag: "Fine Arts, Dance, & Theater",
    imgSrc: "./assets/img/course/ma-12.jpg",
    link: "b-assoc/arts-in-ministry-of-fine-arts/assoc-arts-in-ministry-of-fine-arts.html",
    title: "Assoc. in Ministry of Fine Arts, Dance, & Theater (AAMFDT)",
    description:
      "Two-year undergraduate degree that combines the skills of fine arts, dance, theater, and ministry training. We strive to view our students as unique individuals and talents. Consequently, we will take into account your personal aspirations and objectives as we assist you in reaching your full potential as an artist.",
    rating: 4.0,
  },
  {
    tag: "Business and Ministry",
    imgSrc: "./assets/img/course/ma-13.jpg",
    link: "b-assoc/arts-in-ministry-of-business/assoc-arts-in-ministry-of-business.html",
    title: "Assoc. in Business Management and Ministry (AABMM)",
    description:
      "Two-year undergraduate degree combining business management principles with ministry training. The Associate of Arts in Management equips you with a managerial position by offering a comprehensive understanding of business, management, and economics, complemented by liberal arts courses.",
    rating: 4.0,
  },
  {
    tag: "Pastoral Education",
    imgSrc: "./assets/img/course/ma-14.jpg",
    link: "/b-assoc/sci-clinical-pastor-education/assoc-sci-clinical-pastor-education.html",
    title: "Assoc. of Science. in Clinical Pastoral Education (AS-CPE) ",
    description:
      "Two-year undergraduate degree that combines theological education with clinical training in pastoral care, preparing students for chaplaincy, pastoral ministry, or other roles in spiritual care.",
    rating: 4.0,
  },
  {
    tag: "Chaplaincies Pastoral Counseling",
    imgSrc: "./assets/img/course/ma-15.jpg",
    link: "b-assoc/sci-clinical-chaplaincies-pastor-counsel/assoc-sci-clinical-chaplaincies-pastor-counsel.html",
    title: "Assoc. of Science and Clinical Chaplaincies Pastoral Counseling",
    description:
      "An Assoc. of Science in Clinical Chaplaincy & Pastoral Counseling is a two-year undergraduate degree preparing students for chaplaincy, pastoral counseling, and spiritual roles.",
    rating: 4.0,
  },
  {
    tag: "Life Coaching",
    imgSrc: "./assets/img/course/ma-16.jpg",
    link: "b-assoc/arts-in-life-coaching/assoc-arts-in-life-coaching.html",
    title: "Associate of Arts in Life Coaching (AALC)",
    description:
      "Life coaches offer specialized support to assist clients in identifying and achieving significant objectives, designed to teach mold you as a life coach to with your own coaching business.",
    rating: 4.0,
  },
  {
    tag: " Music & Business Minor Ministry",
    imgSrc: "./assets/img/course/ma-17.jpg",
    link: "b-assoc/arts-in-music-minor-business-ministry/assoc-arts-in-music-minor-business-ministry.html",
    title: "Assoc in Music & Business with Business in Ministry Minor (AAMBM)",
    description:
      "Two-year undergraduate degree combining music and entertainment business with business ministry studies allowing you to embark on a rewarding, dynamic career in management in the field of performing arts and entertainment.",
    rating: 4.0,
  },
  {
    tag: "Marketing Faith Initiative Minor",
    imgSrc: "./assets/img/course/ma-18.jpg",
    link: "b-assoc/arts-in-marketing-minor-faith-base/assoc-arts-in-marketing-minor-faith-base.html",
    title:
      "Assoc. of Arts in Marketing and Advertising with a Faith-Based Initiative Minor (AAMAFBI) ",
    description:
      "Two-year undergraduate degree combining marketing and advertising with faith-based studies. Designed to equip you with the skills to thrive as a marketing, sales professional.",
    rating: 4.0,
  },
  {
    tag: " IT Support Ministry Minor",
    imgSrc: "./assets/img/course/ma-19.jpg",
    link: "b-assoc/arts-in-it-support-minor-ministry-support/assoc-arts-in-it-support-minor-ministry-support.html",
    title: "Assoc. of Arts in IT Support with Ministry Support Minor (AAITMS)",
    description:
      "Two-year undergraduate degree combining Information Technology (IT) support courses with ministry support studies. Our online IT Essentials Program is designed to meet the demands of the ever-evolving technology sector.",
    rating: 4.0,
  },
  {
    tag: "Christian Counseling",
    imgSrc: "./assets/img/course/ma-14.jpg",
    link: "/b-assoc/sci-christian-counseling/assoc-sci-christian-counseling.html",
    title: "Associate of Science in Christian Counseling (ASCC) ",
    description:
      "Two-year undergraduate degree that combines coursework in psychology, theology, and counseling techniques from a Christian perspective.Explore Personality, Behavior, and Human Development with an Associate Degree in Christian Counseling.",
    rating: 4.0,
  },
];
