const pagesData = [
  {
    title: "<span style='color: black;'>Master's in Social Work</span>",
    imageUrl: "../../assets/img/course/ma-18.jpg",
    credits: 60,
    length: "2 YEARS",
    description: [
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Social Work Policy and Law: Exploration of social work policy development, social work regulations, and the legal aspects of social work management.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Quality Improvement in Social Work: Understanding quality improvement methodologies, client safety, and strategies for enhancing social work service quality.</li>`,
      `<div class='mt-3' style='color: gray;'><b>2. Specializations:</b> Some programs offer specialized tracks or concentrations that allow students to focus on specific areas within social work management, such as:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Hospital Administration: Concentrating on management roles within hospitals and social work systems.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Social Work Informatics: Emphasizing the use of technology and data in social work management and decision-making.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Long-Term Care Administration: Focusing on management positions in nursing homes, assisted living facilities, and other long-term care settings.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Social Work Policy and Advocacy: Preparing students for roles in social work policy analysis, advocacy, and government affairs.</li>`,
      `<div class='mt-3' style='color: gray;'><b>3. Social Work Leadership Skills:</b> Developing leadership and interpersonal skills that are essential for managing social work teams and organizations effectively.</div>`,
      `<div class='mt-3' style='color: gray;'><b>4. Research and Analysis:</b> Training in research methodologies and data analysis, often culminating in a research project or thesis.</div>`,
      `<div class='mt-3' style='color: gray;'><b>5. Practicum or Internship:</b> Many programs include a practicum or internship experience that allows students to gain hands-on experience in social work management settings.</div>`,
      `<div class='mt-3' style='color: gray;'><b>6. Capstone Project:</b> Some programs require a capstone project in which students apply their knowledge and skills to address a real-world social work management challenge.</div>`,
      `<div class='mt-3' style='color: gray;'><b>7. Ethical Considerations:</b> Exploration of ethical dilemmas and considerations specific to social work, such as client confidentiality and end-of-life care.</div>`,
      `<div class='mt-3' style='color: gray;'><b>8. Interdisciplinary Perspective:</b> An interdisciplinary approach, often involving collaboration with professionals from various social work fields, including medicine, nursing, and public health.</div>`,
      `<div class='mt-3' style='color: gray;'><b>9. Career Opportunities:</b> Graduates of Master's in Social Work Management programs can pursue a wide range of careers, including:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Hospital Administrator: Overseeing the operations of hospitals or social work systems.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Social Work Consultant: Providing consulting services to social work organizations in areas such as strategy, operations, and financial management.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Social Work Policy Analyst: Analyzing social work policy issues and working for government agencies, think tanks, or advocacy organizations.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Social Work Informatics Manager: Managing social work data and information systems.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Long-Term Care Administrator: Managing long-term care facilities, such as nursing homes and assisted living centers.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Social Work Quality Improvement Manager: Leading initiatives to improve the quality and safety of social work services.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Social Work Compliance Officer: Ensuring that social work organizations adhere to regulatory and legal requirements.</li>`,
      `<div style='color: gray;'>Before enrolling in a Master's in Social Work Management program, it's essential to research the specific program's curriculum, faculty expertise, and other details.</div>`,
      `<div class='mt-3' style='color: gray;'><b>Program Sequence:</b></div>`,
      `<div class='mt-3' style='color: gray;'><b>Year 1 - Fall 1</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>STAT 515 - Scientific Inquiry and Research (3)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>HTCA 554 - Leadership and Organizational Behavior (3)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>RELB 510 - Identity and Mission in Faith-Based Social Work (2)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>HCM 601- Social Work Ministry 1 (3)</li>`,
      `<div style='color: gray;'>Total: 8 Credit Hours</div>`,
      `<div class='mt-3' style='color: gray;'><b>Year 1 - Spring 1</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>ACCT 520 - Managerial Accounting for Social Work (3)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>MKTG 520 - Marketing and Planning in Social Work (3)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>FNCE 521 - Social Work Financial Management (3)</li>`,
      `<div style='color: gray;'>Total: 9 Credit Hours</div>`,
      `<div class='mt-3' style='color: gray;'><b>Year 1 - Summer 1</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>HTCA 543 - Ethical and Legal Issues in Social Work (3)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>HTCA 585 - Human Resources Management (3)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>HTCA 613 - Social Work Systems and Operations Management (3)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>HTCA 549 - Ethical and Legal Issues in Social Work in Faith Based (3)</li>`,
      `<div style='color: gray;'>Total: 9 Credit Hours</div>`,
      `<div class='mt-3' style='color: gray;'><b>Year 2 - Fall 2</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>HTCA 605 - Health Insurance, Managed Care and Reimbursement (3)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>HTCA 640 - Managerial Epidemiology (3)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>ECON 550 - Economics of Social Work (3)</li>`,
    ],
    professorImg: "../../assets/img/team/logo.png", // Update the professor image URL as needed
    professorName: "HBIU", // Update the professor name as needed
    category: "Health Sciences",
    enrolled: 92,
    courseTime: "2 Years",
    courseFees: "$21,000",
    lectures: 4,
    quizes: " ",
    duration: "2 Years",
    language: "Spanish",
    skillLevel: "Advanced",
    location: "Hybrid",
    students: 150,
    certificate: "No",
    assessments: "Yes",
  },
  // Add more page data objects here
];
