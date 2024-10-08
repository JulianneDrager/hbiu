const pagesData = [
  {
    title: "Diploma in Computer Science",
    imageUrl: "../../assets/img/course/cert-8.jpg",
    credits: 30,
    length: "3 MONTHS",
    description: [
      `<div>A Diploma in Computer Science is an educational program that provides individuals with a comprehensive understanding of computer science principles, programming languages, software development, and IT fundamentals. This diploma program typically covers a range of topics related to computer science and prepares students for entry-level positions in the field of information technology (IT) or further education in computer science. Here's what you can generally expect from a Diploma in Computer Science program:</div>`,

      `<div class='mt-3'><b>Core Curriculum:</b></div>`,
      `<div>Diploma programs in Computer Science usually include core courses that cover essential aspects of computer science and IT, including:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem'><b>Programming:</b> Learning programming languages such as Java, Python, C++, or others to develop software applications and algorithms.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'><b>Data Structures and Algorithms:</b> Understanding data organization and algorithms for efficient data processing.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'><b>Web Development:</b> Exploring web technologies like HTML, CSS, JavaScript, and web development frameworks.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'><b>Database Management:</b> Learning database design, SQL (Structured Query Language), and database management systems (DBMS).</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'><b>Operating Systems:</b> Understanding the principles and components of operating systems.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'><b>Networking:</b> Basics of computer networking, including network protocols, configurations, and security.</li>`,

      `<div class='mt-3'><b>Practical Application:</b></div>`,
      `<div>Many programs include hands-on labs, coding projects, and software development assignments to help students apply their knowledge and gain practical experience.</div>`,

      `<div class='mt-3'><b>Software Development:</b></div>`,
      `<div>Diploma programs may focus on software development methodologies, tools, and practices.</div>`,

      `<div class='mt-3'><b>IT Fundamentals:</b></div>`,
      `<div>Introduction to IT concepts, hardware, and IT support.</div>`,

      `<div class='mt-3'><b>Ethical and Professional Considerations:</b></div>`,
      `<div>Discussion of ethical and professional responsibilities in the field of computer science and IT.</div>`,

      `<div class='mt-3'><b>Career Opportunities:</b></div>`,
      `<div>Upon completing a Diploma in Computer Science program, individuals may qualify for entry-level positions in various IT-related roles, including:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem'><b>Software Developer:</b> Developing software applications and solutions.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'><b>Web Developer:</b> Creating and maintaining websites and web applications.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'><b>Database Administrator:</b> Managing and maintaining databases.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'><b>Network Technician:</b> Assisting with network administration and troubleshooting.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'><b>IT Support Specialist:</b> Providing technical support to end-users.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem'><b>Systems Analyst:</b> Analyzing and designing IT solutions for organizations.</li>`,

      `<div class='mt-3'><b>Further Education:</b></div>`,
      `<div>Some students may use the diploma program as a stepping stone to pursue further education, such as a bachelor's degree in computer science or a related field.</div>`,

      `<div class='mt-1'>Before enrolling in a Diploma in Computer Science program, individuals should consider their career goals and whether the program aligns with their aspirations for entering the field of computer science and IT.</div>`,

      `<div class='mt-3'><b>Courses:</b></div>`,
      `<div><b>Computer Science 109: Introduction to Programming</b></div>`,
      `<div>Introduction to Programming has been evaluated and recommended for 3 semester hours and may be transferred to over 2,000 colleges and universities. With this self-paced course, you get engaging lessons, expert instructors who make even the most challenging introductory programming topics simple, and an excellent resource for getting a head start on your degree.</div>`,

      `<div class='mt-3'><b>Computer Science 102: Fundamentals of Information Technology</b></div>`,
      `<div>Evaluated and recommended for 3 semester hours and may be transferred to over 2,000 colleges and universities. With this self-paced course, you get engaging lessons, expert instructors who make even the most challenging computer science topics simple, and an excellent resource for getting a head start on your degree.</div>`,

      `<div class='mt-3'><b>Computer Science 204: Database Programming</b></div>`,
      `<div>Database Programming has been evaluated and recommended for 3 semester hours and may be transferred to over 2,000 colleges and universities. With this self-paced course, you get engaging lessons, expert instructors who make even the most challenging database programming topics simple, and an excellent resource for getting a head start on your degree.</div>`,

      `<div class='mt-3'><b>Computer Science 113: Programming in Python</b></div>`,
      `<div>Programming in Python has been evaluated and recommended for 3 semester hours and may be transferred to over 2,000 colleges and universities. With this self-paced course, you get engaging lessons, expert instructors who make even the most challenging Python programming topics simple, and an excellent resource for getting a head start on your degree.</div>`,

      `<div class='mt-3'><b>Computer Science 311: Artificial Intelligence</b></div>`,
      `<div>Artificial Intelligence has been evaluated and recommended for 3 semester hours and may be transferred to over 2,000 colleges and universities. With this self-paced course, you get engaging lessons, expert instructors who make even the most challenging computer science topics simple, and an excellent resource for getting a head start on your degree.</div>`,

      `<div class='mt-3'><b>Computer Science 307: Software Engineering</b></div>`,
      `<div>Software Engineering has been evaluated and recommended for 3 semester hours and may be transferred to over 2,000 colleges and universities. With this self-paced course, you get engaging lessons, expert instructors who make even the most challenging software engineering topics simple, and an excellent resource for getting a head start on your degree.</div>`,

      `<div class='mt-3'><b>Computer Science 108: Introduction to Networking</b></div>`,
      `<div>Introduction to Networking has been evaluated and recommended for 3 semester hours and may be transferred to over 2,000 colleges and universities. With this self-paced course, you get engaging lessons, expert instructors who make even the most challenging computer science networking topics simple, and an excellent resource for getting a head start on your degree.</div>`,

      `<div class='mt-3'><b>Computer Science 111: Programming in C</b></div>`,
      `<div>Programming in C has been evaluated and recommended for 3 semester hours and may be transferred to over 2,000 colleges and universities. With this self-paced course, you get engaging lessons, expert instructors who make even the most challenging computer science topics simple, and an excellent resource for getting a head start on your degree.</div>`,

      `<div class='mt-3'><b>Computer Science 306: Computer Architecture</b></div>`,
      `<div>Computer Architecture has been evaluated and recommended for 3 semester hours and may be transferred to over 2,000 colleges and universities. With this self-paced course, you get engaging lessons, expert instructors who make even the most challenging computer science topics simple, and an excellent resource for getting a head start on your degree.</div>`,

      `<div class='mt-3'><b>Computer Science 335: Mobile Forensics</b></div>`,
      `<div>This course covers topics in mobile forensics within computer science.</b></div>`,
    ],
    professorImg: "../../assets/img/team/logo.png", // Update the professor image URL as needed
    professorName: "HBIU", // Update the professor name as needed
    category: "Computer Science",
    enrolled: 111,
    courseTime: "3 Months",
    courseFees: "$600",
    lectures: 4,
    quizes: " ",
    duration: "3 Months",
    language: "English",
    skillLevel: "Intermediate",
    location: "Online/On Campus",
    students: 114,
    certificate: "Yes",
    assessments: "Yes",
  },
  // Add more page data objects here
];
