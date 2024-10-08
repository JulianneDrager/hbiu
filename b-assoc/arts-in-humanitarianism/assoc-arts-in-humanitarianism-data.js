const pagesData = [
  {
    title:
      "<span style='color: black;'>Associate of Science in Humanitarianism and Conflict Response</span>",
    imageUrl: "../../assets/img/course/aa-8.jpg",
    credits: 60 - 70,
    length: "2 YEARS",
    description: [
      `<div style='color: gray;' class='mb-10'><strong>Program Description</strong></div>`,
      `<div style='color: gray;' class='mb-10'>The Associate of Science Degree in Humanitarianism and Conflict Response is a two-year undergraduate degree that prepares students to respond to humanitarian crises and conflicts. Humanitarianism and conflict response are two interconnected fields that address the complexities of human suffering and crisis. Humanitarianism focuses on alleviating suffering, promoting dignity, and protecting human life, while conflict response addresses the specific challenges posed by conflicts, disasters, and other crises. Humanitarianism is a values-driven approach that prioritizes the well-being and dignity of individuals affected by crises. It encompasses:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Relief aid (food, shelter, healthcare)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Protection (human rights, safety)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Advocacy (policy change, awareness)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Capacity building (local resilience, empowerment)</li>`,
      `<div style='color: gray;'>Students will learn what conflict response involves addressing the humanitarian needs arising from conflicts, natural disasters, and other crises. Effective conflict response requires:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Emergency response (search and rescue, relief aid)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Conflict resolution (mediation, negotiation)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Post-conflict reconstruction (rebuilding, recovery)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Prevention (early warning systems, conflict mitigation)</li>`,
      `<div class='mt-3' style='color: gray;'><b>Key Principles:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Neutrality: Impartiality in providing aid</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Impartiality: No discrimination based on race, religion, or politics</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Independence: Autonomy from political or military agendas</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Humanity: Respect for human life and dignity</li>`,
      `<div class='mt-3' style='color: gray;'><b>Challenges and Opportunities:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Funding constraints</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Access limitations</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Security risks</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Coordination complexities</li>`,
      `<div style='color: gray;'>Despite these challenges, opportunities exist:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Innovative technologies (data analytics, drones)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Collaborative partnerships (NGOs, governments)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Local capacity building</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Evidence-based decision-making</li>`,
      `<div class='mt-3' style='color: gray;'><b>Real-World Examples:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Syrian Civil War: Humanitarian organizations provide critical aid amidst conflict.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Rohingya Refugee Crisis: International response prioritizes protection and relief.</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Ebola Outbreak: Humanitarian efforts focus on containment and community engagement.</li>`,
      `<div style='color: gray;'>Conclusion: Humanitarianism and conflict response require a nuanced understanding of the complex interplay between crisis, compassion, and resilience. By upholding core principles and addressing challenges, we can:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Save lives</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Protect dignity</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Promote peace</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Foster resilience</li>`,
      `<div style='color: gray;'>Students will learn how to prioritize humanitarianism and conflict response, working together to alleviate suffering and promote a more just and peaceful world.</div>`,
      `<div class='mt-3' style='color: gray;'><b>Sources:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>United Nations Office for the Coordination of Humanitarian Affairs (OCHA)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>International Committee of the Red Cross (ICRC)</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Humanitarian Coalition</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>World Health Organization (WHO)</li>`,
      `<div class='mt-3' style='color: gray;'><b>Core Areas:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Humanitarian Studies</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Conflict Response and Resolution</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>International Relations</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Disaster Response and Recovery</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Cultural Competence and Awareness</li>`,
      `<div class='mt-3' style='color: gray;'><b>Program Objectives:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Understand humanitarian principles and practices</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Develop conflict response and resolution skills</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Analyze global humanitarian issues</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Cultivate cultural competence and awareness</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Prepare for careers in humanitarian aid and conflict response</li>`,
      `<div class='mt-3' style='color: gray;'><b>Coursework:</b></div>`,
      `<div style='color: gray;'>Typical courses include:</div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Introduction to Humanitarianism</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Conflict Response and Resolution</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>International Humanitarian Law</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Disaster Response and Recovery Operations</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Cultural Anthropology and Diversity</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Human Rights and Advocacy</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Global Health in Humanitarian Crises</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Refugee and Migration Studies</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Humanitarian Logistics and Supply Chain Management</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Capstone Project in Humanitarianism and Conflict Response</li>`,
      `<div class='mt-3' style='color: gray;'><b>Career Paths:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Humanitarian Aid Worker</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Conflict Resolution Specialist</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Disaster Response Coordinator</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Refugee Support Worker</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>International Development Professional</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Human Rights Advocate</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Emergency Manager</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Non-Profit Professional (humanitarian sector)</li>`,
      `<div class='mt-3' style='color: gray;'><b>Degree Benefits:</b></div>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Comprehensive humanitarian education</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Conflict response and resolution skills</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Cultural competence and awareness</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Preparation for careers in humanitarian aid</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Opportunities for service in international organizations</li>`,
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
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Humanitarian response and coordination</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Conflict resolution and negotiation</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Cultural competence and awareness</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>International relations and diplomacy</li>`,
      `<li style='list-style-type: disc; margin-left: 2rem; color: gray;'>Project management and logistics</li>`,
    ],
    professorImg: "../../assets/img/team/logo.png", // Update the professor image URL as needed
    professorName: "HBIU", // Update the professor name as needed
    category: "Humanitarianism and Conflict Response",
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
