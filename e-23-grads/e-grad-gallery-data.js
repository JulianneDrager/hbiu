const galleryData = [
  {
    title: "Gallery",
    description:
      "Bachelor, Master, PhD, congratulations on your accomplishment",
    items: [
      {
        imgSrc: "./assets/img/graduates/1.jpg",
        imgAlt: "HRH King Geoffrey Wayabire",
        popupLink: "./assets/img/graduates/1.jpg",
        description: `<h4 class='mb-1'>HRH King Geoffrey Wayabire</h4>
                        <p style='line-height:normal'>PhD in Christian Counseling & Psych., MA of Sci. Christian Counsel & Psych. (Minor Clinical Mental Health Counsel)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/2.jpg",
        imgAlt: "Corrie Betts",
        popupLink: "./assets/img/graduates/2.jpg",
        description: `<h4 class='mb-1'>Corrie Betts</h4>
                        <p style='line-height:normal'>Doctor of Humane Letters</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/3.jpg",
        imgAlt: "Spencer C. Lofton Sr",
        popupLink: "./assets/img/graduates/3.jpg",
        description: `<h4 class='mb-1'>Spencer C. Lofton Sr</h4>
                        <p style='line-height:normal'>Doctor of Divinity (Minor in Clinical Mental Health Counseling), Master of Arts in Divinity (Minor in Christian Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/4.jpg",
        imgAlt: "Moses Jedidiah Muwanguzi",
        popupLink: "./assets/img/graduates/4.jpg",
        description: `<h4 class='mb-1'>Moses Jedidiah Muwanguzi</h4>
                        <p style='line-height:normal'>PhD in Christian Counsel & Psych., MA of Sci. in Christian Counsel & Psych. (Minor in Clinical Mental Health Counsel)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/5.jpg",
        imgAlt: "Rogers Kayongo",
        popupLink: "./assets/img/graduates/5.jpg",
        description: `<h4 class='mb-1'>Rogers Kayongo</h4>
                        <p style='line-height:normal'>PhD in Christian Counseling & Psych., MA of Sci. in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/6.jpg",
        imgAlt: "Maurice Bellamy",
        popupLink: "./assets/img/graduates/6.jpg",
        description: `<h4 class='mb-1'>Maurice Bellamy</h4>
                        <p style='line-height:normal'>PhD in Leadership</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/7.jpg",
        imgAlt: "Dr. Alford Miller",
        popupLink: "./assets/img/graduates/7.jpg",
        description: `<h4 class='mb-1'>Dr. Alford Miller</h4>
                        <p style='line-height:normal'>PhD in Christian Counseling & Psych., MA of Sci. in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/8.jpg",
        imgAlt: "Jameka Morrison-Jefferies",
        popupLink: "./assets/img/graduates/8.jpg",
        description: `<h4 class='mb-1'>Jameka Morrison-Jefferies</h4>
                        <p style='line-height:normal'>BA in Bis. Admin. (Minor Ministry Ethical Prct.), MA in Bis. Mgmt. (Minor in Leadership Faith-Based Organizations)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/9.jpg",
        imgAlt: "Vendatta Hilton",
        popupLink: "./assets/img/graduates/9.jpg",
        description: `<h4 class='mb-1'>Vendatta Hilton</h4>
                        <p style='line-height:normal'>PhD in Christian Counseling & Psych., MA of Sci. in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/10.jpg",
        imgAlt: "Godwin Ogbevire Ube",
        popupLink: "./assets/img/graduates/10.jpg",
        description: `<h4 class='mb-1'>Godwin Ogbevire Ube</h4>
                        <p style='line-height:normal'>Doctor in Divinity (Minor in Christian Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/11.jpg",
        imgAlt: "Olanrewaju Peter Abraham",
        popupLink: "./assets/img/graduates/11.jpg",
        description: `<h4 class='mb-1'>Olanrewaju Peter Abraham</h4>
                        <p style='line-height:normal'>Doctor of Agriculture (Minor in Faith-Based Initiative)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/12.jpg",
        imgAlt: "Willie Tolbert",
        popupLink: "./assets/img/graduates/12.jpg",
        description: `<h4 class='mb-1'>Willie Tolbert</h4>
                        <p style='line-height:normal'>Master of Art in Business Management (Minor in Faith-Based Management)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/13.jpg",
        imgAlt: "Dr. Denrich Everett",
        popupLink: "./assets/img/graduates/13.jpg",
        description: `<h4 class='mb-1'>Dr. Denrich Everett</h4>
                        <p style='line-height:normal'>PhD in Christian Counseling & Psych, MA of Sci. in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/14.jpg",
        imgAlt: "Shanekia Robinson",
        popupLink: "./assets/img/graduates/14.jpg",
        description: `<h4 class='mb-1'>Shanekia Robinson</h4>
                        <p style='line-height:normal'>PhD in Public Health (Minor in Faith-Based Initiative)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/15.jpg",
        imgAlt: "Joyce Bellamy",
        popupLink: "./assets/img/graduates/15.jpg",
        description: `<h4 class='mb-1'>Joyce Bellamy</h4>
                        <p style='line-height:normal'>PhD in Christian Counseling & Psych., MA of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/16.jpg",
        imgAlt: "Dr. Trudy Davis",
        popupLink: "./assets/img/graduates/16.jpg",
        description: `<h4 class='mb-1'>Dr. Trudy Davis</h4>
                        <p style='line-height:normal'>PhD in Christian Counseling & Psych., MA of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/17.jpg",
        imgAlt: "Denise Tolbert",
        popupLink: "./assets/img/graduates/17.jpg",
        description: `<h4 class='mb-1'>Denise Tolbert</h4>
                        <p style='line-height:normal'>PhD in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/18.jpg",
        imgAlt: "Wanda Olivia Page",
        popupLink: "./assets/img/graduates/18.jpg",
        description: `<h4 class='mb-1'>Wanda Olivia Page</h4>
                        <p style='line-height:normal'>PhD in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/19.jpg",
        imgAlt: "Dr. Marie A. Aupont",
        popupLink: "./assets/img/graduates/19.jpg",
        description: `<h4 class='mb-1'>Dr. Marie A. Aupont</h4>
                        <p style='line-height:normal'>PhD in Christian Counsel & Psych., MA of Sci. in Christian Counseling & Psych. (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/20.jpg",
        imgAlt: "Tameka Barnes",
        popupLink: "./assets/img/graduates/20.jpg",
        description: `<h4 class='mb-1'>Tameka Barnes</h4>
                        <p style='line-height:normal'>Dr. in Health Care Mgmt. (Minor in Christian Leadership), Master in Health Care Management (Minor in Faith-Based Management)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/21.jpg",
        imgAlt: "Yemisi Dunmoye",
        popupLink: "./assets/img/graduates/21.jpg",
        description: `<h4 class='mb-1'>Yemisi Dunmoye</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/22.jpg",
        imgAlt: "Juliette Henry Kersaint",
        popupLink: "./assets/img/graduates/22.jpg",
        description: `<h4 class='mb-1'>Juliette Henry Kersaint</h4>
                        <p style='line-height:normal'>Master of Science in Psychotherapy (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/23.jpg",
        imgAlt: "Kafoui Grace Thomas",
        popupLink: "./assets/img/graduates/23.jpg",
        description: `<h4 class='mb-1'>Kafoui Grace Thomas</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/24.jpg",
        imgAlt: "Oswalyn Facey",
        popupLink: "./assets/img/graduates/24.jpg",
        description: `<h4 class='mb-1'>Oswalyn Facey</h4>
                        <p style='line-height:normal'>PhD in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/25.jpg",
        imgAlt: "Dr. Penny Tate",
        popupLink: "./assets/img/graduates/25.jpg",
        description: `<h4 class='mb-1'>Dr. Penny Tate</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/26.jpg",
        imgAlt: "Ester Olayinka Diya",
        popupLink: "./assets/img/graduates/26.jpg",
        description: `<h4 class='mb-1'>Ester Olayinka Diya</h4>
                        <p style='line-height:normal'>Doctor of Divinity (Minor in Christian Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/27.jpg",
        imgAlt: "Alice Avotri",
        popupLink: "./assets/img/graduates/27.jpg",
        description: `<h4 class='mb-1'>Alice Avotri</h4>
                        <p style='line-height:normal'>Bachelor of Science in Healthcare Management (Minor in Ministry), MA of Sci. in Health Care Management (Minor in Christian Leadership)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/28.jpg",
        imgAlt: "Josette Hill-Wilson",
        popupLink: "./assets/img/graduates/28.jpg",
        description: `<h4 class='mb-1'>Josette Hill-Wilson</h4>
                        <p style='line-height:normal'>PhD in Leadership and Cultural Management Ministry</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/29.jpg",
        imgAlt: "Dr. Warren Bonner Sr.",
        popupLink: "./assets/img/graduates/29.jpg",
        description: `<h4 class='mb-1'>Dr. Warren Bonner Sr.</h4>
                        <p style='line-height:normal'>Bachelor in Theology (Minor in Christian Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/30.jpg",
        imgAlt: "Dr. B. Evans",
        popupLink: "./assets/img/graduates/30.jpg",
        description: `<h4 class='mb-1'>Dr. B. Evans</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/31.jpg",
        imgAlt: "Paul Mitchell Ellington DD",
        popupLink: "./assets/img/graduates/31.jpg",
        description: `<h4 class='mb-1'>Paul Mitchell Ellington DD</h4>
                        <p style='line-height:normal'>PhD in Christian Counsel & Psych., MA of Sci. in Christian Counsel& Psych.(Minor in Clinical Mental Health Counsel)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/32.jpg",
        imgAlt: "Olajuwon Sowande",
        popupLink: "./assets/img/graduates/32.jpg",
        description: `<h4 class='mb-1'>Olajuwon Sowande</h4>
                        <p style='line-height:normal'>Dr.of Christian Leadership & Business, MA of Sci. in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/33.jpg",
        imgAlt: "Junior Bennett",
        popupLink: "./assets/img/graduates/33.jpg",
        description: `<h4 class='mb-1'>Junior Bennett</h4>
                        <p style='line-height:normal'>Dr. of Divinity (Minor in Christian Leadership), BA of Sci. in Counseling, MA of Sci. Christian Counsel & Psych. (Minor in Clinical Mental Health Counsel)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/34.jpg",
        imgAlt: "Adrian Kimoy Branford",
        popupLink: "./assets/img/graduates/34.jpg",
        description: `<h4 class='mb-1'>Adrian Kimoy Branford</h4>
                        <p style='line-height:normal'>Bachelor of Arts in Theology (Minor in Christian Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/35.jpg",
        imgAlt: "Ebony King",
        popupLink: "./assets/img/graduates/35.jpg",
        description: `<h4 class='mb-1'>Ebony King</h4>
                        <p style='line-height:normal'>Master in Divinity (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/36.jpg",
        imgAlt: "Maniche Bennett",
        popupLink: "./assets/img/graduates/36.jpg",
        description: `<h4 class='mb-1'>Maniche Bennett</h4>
                        <p style='line-height:normal'>PhD in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/37.jpg",
        imgAlt: "Maria Edunsin",
        popupLink: "./assets/img/graduates/37.jpg",
        description: `<h4 class='mb-1'>Maria Edunsin</h4>
                        <p style='line-height:normal'>Doctor of Humanitarian, Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/38.jpg",
        imgAlt: "Cherie Sims",
        popupLink: "./assets/img/graduates/38.jpg",
        description: `<h4 class='mb-1'>Cherie Sims</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/39.jpg",
        imgAlt: "Tammy Morgan DD",
        popupLink: "./assets/img/graduates/39.jpg",
        description: `<h4 class='mb-1'>Tammy Morgan DD</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/40.jpg",
        imgAlt: "Myma Esi Atta Wilson",
        popupLink: "./assets/img/graduates/40.jpg",
        description: `<h4 class='mb-1'>Myma Esi Atta Wilson</h4>
                        <p style='line-height:normal'>Doctor of Christian Leadership</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/41.jpg",
        imgAlt: "Maryse Sanon",
        popupLink: "./assets/img/graduates/41.jpg",
        description: `<h4 class='mb-1'>Maryse Sanon</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/42.jpg",
        imgAlt: "Dr. Rosa Lee Smith Hill",
        popupLink: "./assets/img/graduates/42.jpg",
        description: `<h4 class='mb-1'>Dr. Rosa Lee Smith Hill</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/43.jpg",
        imgAlt: "Hargrett Annie Lucille",
        popupLink: "./assets/img/graduates/43.jpg",
        description: `<h4 class='mb-1'>Hargrett Annie Lucille</h4>
                        <p style='line-height:normal'>BA of Science in Christian Counseling, MA of Sci. in Christian Counsel & Psych. (Minor in Clinical Mental Health Counsel)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/44.jpg",
        imgAlt: "Sheryl Marie Jones",
        popupLink: "./assets/img/graduates/44.jpg",
        description: `<h4 class='mb-1'>Sheryl Marie Jones</h4>
                        <p style='line-height:normal'>PhD in Journalism (Minor in Faith-Based Media)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/45.jpg",
        imgAlt: "Keresha Harriott",
        popupLink: "./assets/img/graduates/45.jpg",
        description: `<h4 class='mb-1'>Keresha Harriott</h4>
                        <p style='line-height:normal'>Master in Education (Minor in Ministry Diverse Education)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/46.jpg",
        imgAlt: "Loria M. Morrison",
        popupLink: "./assets/img/graduates/46.jpg",
        description: `<h4 class='mb-1'>Loria M. Morrison</h4>
                        <p style='line-height:normal'>Doctor of Divinity and Christian Counseling</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/47.jpg",
        imgAlt: "Gwendolyn Goodman",
        popupLink: "./assets/img/graduates/47.jpg",
        description: `<h4 class='mb-1'>Gwendolyn Goodman</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/48.jpg",
        imgAlt: "Patricia Smith",
        popupLink: "./assets/img/graduates/48.jpg",
        description: `<h4 class='mb-1'>Patricia Smith</h4>
                        <p style='line-height:normal'>Doctor of Divinity (Minor in Christian Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/49.jpg",
        imgAlt: "Crystal Spencer",
        popupLink: "./assets/img/graduates/49.jpg",
        description: `<h4 class='mb-1'>Crystal Spencer</h4>
                        <p style='line-height:normal'>Doctor of Divinity, Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/50.jpg",
        imgAlt: "Dr. Brenda Adkins",
        popupLink: "./assets/img/graduates/50.jpg",
        description: `<h4 class='mb-1'>Dr. Brenda Adkins</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/51.jpg",
        imgAlt: "Nadine Wizzard-Edwards",
        popupLink: "./assets/img/graduates/51.jpg",
        description: `<h4 class='mb-1'>Nadine Wizzard-Edwards</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/52.jpg",
        imgAlt: "Kejuanna Owens",
        popupLink: "./assets/img/graduates/52.jpg",
        description: `<h4 class='mb-1'>Kejuanna Owens</h4>
                        <p style='line-height:normal'>Master of Arts in Business (Minor in Faith-Based Initiative)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/53.jpg",
        imgAlt: "Pauline N Osbourne",
        popupLink: "./assets/img/graduates/53.jpg",
        description: `<h4 class='mb-1'>Pauline N Osbourne</h4>
                        <p style='line-height:normal'>Doctor of Divinity, Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/54.jpg",
        imgAlt: "Linda Knight",
        popupLink: "./assets/img/graduates/54.jpg",
        description: `<h4 class='mb-1'>Linda Knight</h4>
                        <p style='line-height:normal'>PhD in Business Management, Master of Arts in Business Management (Minor in Leadership Faith-Based Organization)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/55.jpg",
        imgAlt: "Tatianna J. Butler",
        popupLink: "./assets/img/graduates/55.jpg",
        description: `<h4 class='mb-1'>Tatianna J. Butler</h4>
                        <p style='line-height:normal'>Bachelor of Science in Advanced Clinical Chaplaincy-Pastoral Psychotherapy</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/56.jpg",
        imgAlt: "Linace Gordon-Coleman",
        popupLink: "./assets/img/graduates/56.jpg",
        description: `<h4 class='mb-1'>Linace Gordon-Coleman</h4>
                        <p style='line-height:normal'>Doctor of Divinity</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/57.jpg",
        imgAlt: "Monica Harrell",
        popupLink: "./assets/img/graduates/57.jpg",
        description: `<h4 class='mb-1'>Monica Harrell</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/58.jpg",
        imgAlt: "Ebony Armour",
        popupLink: "./assets/img/graduates/58.jpg",
        description: `<h4 class='mb-1'>Ebony Armour</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/59.jpg",
        imgAlt: "Dr. Stacia M Williams",
        popupLink: "./assets/img/graduates/59.jpg",
        description: `<h4 class='mb-1'>Dr. Stacia M Williams</h4>
                        <p style='line-height:normal'>PhD in Christian Counsel & Psych., MA of Sci. in Christian Counseling & Psych. (Minor in Clinical Mental Health Counsel)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/60.jpg",
        imgAlt: "Marian Reid",
        popupLink: "./assets/img/graduates/60.jpg",
        description: `<h4 class='mb-1'>Marian Reid</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/61.jpg",
        imgAlt: "Tetla Adina Ross",
        popupLink: "./assets/img/graduates/61.jpg",
        description: `<h4 class='mb-1'>Tetla Adina Ross</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/62.jpg",
        imgAlt: "Brittany McGhie",
        popupLink: "./assets/img/graduates/62.jpg",
        description: `<h4 class='mb-1'>Brittany McGhie</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/63.jpg",
        imgAlt: "Cheryl Epps",
        popupLink: "./assets/img/graduates/63.jpg",
        description: `<h4 class='mb-1'>Cheryl Epps</h4>
                        <p style='line-height:normal'>Master of Science in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/64.jpg",
        imgAlt: "RJo Winch",
        popupLink: "./assets/img/graduates/64.jpg",
        description: `<h4 class='mb-1'>RJo Winch</h4>
                        <p style='line-height:normal'>Doctor of Humane Letters</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/65.jpg",
        imgAlt: "Gina Ann McDonald",
        popupLink: "./assets/img/graduates/65.jpg",
        description: `<h4 class='mb-1'>Gina Ann McDonald</h4>
                        <p style='line-height:normal'>Doctor of Humane Letters</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/66.jpg",
        imgAlt: "Bruce Carter",
        popupLink: "./assets/img/graduates/66.jpg",
        description: `<h4 class='mb-1'>Bruce Carter</h4>
                        <p style='line-height:normal'>Doctor of Divinity, Doctor of Theology</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/67.jpg",
        imgAlt: "Corrida Resto Barnes",
        popupLink: "./assets/img/graduates/67.jpg",
        description: `<h4 class='mb-1'>Corrida Resto Barnes</h4>
                        <p style='line-height:normal'>Doctor of Divinity</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/68.jpg",
        imgAlt: "Roselyn Ranti Majekodunmi",
        popupLink: "./assets/img/graduates/68.jpg",
        description: `<h4 class='mb-1'>Roselyn Ranti Majekodunmi</h4>
                        <p style='line-height:normal'>Doctor of Healthcare Leadership, Strategy Management and Faith-Based Initiatives</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/69.jpg",
        imgAlt: "Joana Theano-Guillaume",
        popupLink: "./assets/img/graduates/69.jpg",
        description: `<h4 class='mb-1'>Joana Theano-Guillaume</h4>
                        <p style='line-height:normal'>MA in Christian Counsel& Psych. (Minor Clinical Mental Health Counseling), Dr.of Divinity</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/70.jpg",
        imgAlt: "Elliott McKnight",
        popupLink: "./assets/img/graduates/70.jpg",
        description: `<h4 class='mb-1'>Elliott McKnight</h4>
                        <p style='line-height:normal'>Doctor of Divinity</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/71.jpg",
        imgAlt: "Kenneth R. Jackson Sr.",
        popupLink: "./assets/img/graduates/71.jpg",
        description: `<h4 class='mb-1'>Kenneth R. Jackson Sr.</h4>
                        <p style='line-height:normal'>Doctor of Leadership and Humanitarianism</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/72.jpg",
        imgAlt: "Samuel Sanki Mulumba",
        popupLink: "./assets/img/graduates/72.jpg",
        description: `<h4 class='mb-1'>Samuel Sanki Mulumba</h4>
                        <p style='line-height:normal'>Doctor of Divinity</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/73.jpg",
        imgAlt: "Adewale Joseph Adelegan",
        popupLink: "./assets/img/graduates/73.jpg",
        description: `<h4 class='mb-1'>Adewale Joseph Adelegan</h4>
                        <p style='line-height:normal'>Doctor of Christian Leadership</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/74.jpg",
        imgAlt: "Cassidy Marriott",
        popupLink: "./assets/img/graduates/74.jpg",
        description: `<h4 class='mb-1'>Cassidy Marriott</h4>
                        <p style='line-height:normal'>Master in Christian Counseling & Psychology (Minor in Clinical Mental Health Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/75.jpg",
        imgAlt: "Jesus Ruiz",
        popupLink: "./assets/img/graduates/75.jpg",
        description: `<h4 class='mb-1'>Jesus Ruiz</h4>
                        <p style='line-height:normal'>Doctor of Divinity</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/76.jpg",
        imgAlt: "Carmen Coates",
        popupLink: "./assets/img/graduates/76.jpg",
        description: `<h4 class='mb-1'>Carmen Coates</h4>
                        <p style='line-height:normal'>Doctor of Christian Leadership</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/77.jpg",
        imgAlt: "Kavan Weise",
        popupLink: "./assets/img/graduates/77.jpg",
        description: `<h4 class='mb-1'>Kavan Weise</h4>
                        <p style='line-height:normal'>Doctor of Leadership and Humanitarianism</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/78.jpg",
        imgAlt: "Juliet Bernard",
        popupLink: "./assets/img/graduates/78.jpg",
        description: `<h4 class='mb-1'>Juliet Bernard</h4>
                        <p style='line-height:normal'>Doctor of Christian Counseling</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/79.jpg",
        imgAlt: "Pamela Fairley",
        popupLink: "./assets/img/graduates/79.jpg",
        description: `<h4 class='mb-1'>Pamela Fairley</h4>
                        <p style='line-height:normal'>Doctor of Ministry</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/80.jpg",
        imgAlt: "Dedevi Benissan",
        popupLink: "./assets/img/graduates/80.jpg",
        description: `<h4 class='mb-1'>Dedevi Benissan</h4>
                        <p style='line-height:normal'>Doctor of Christian Leadership & Business</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/81.jpg",
        imgAlt: "Isaac Chepsergon",
        popupLink: "./assets/img/graduates/81.jpg",
        description: `<h4 class='mb-1'>Isaac Chepsergon</h4>
                        <p style='line-height:normal'>Bachelor in Theology (Minor in Christian Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/82.jpg",
        imgAlt: "Martha Aduvukha",
        popupLink: "./assets/img/graduates/82.jpg",
        description: `<h4 class='mb-1'>Martha Aduvukha</h4>
                        <p style='line-height:normal'>Bachelor in Theology (Minor in Christian Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/83.jpg",
        imgAlt: "John Kirui",
        popupLink: "./assets/img/graduates/83.jpg",
        description: `<h4 class='mb-1'>John Kirui</h4>
                        <p style='line-height:normal'>Bachelor in Theology (Minor in Christian Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/84.jpg",
        imgAlt: "Akaya Samson",
        popupLink: "./assets/img/graduates/84.jpg",
        description: `<h4 class='mb-1'>Akaya Samson</h4>
                        <p style='line-height:normal'>Bachelor in Theology (Minor in Christian Counseling)</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/85.jpg",
        imgAlt: "Gladyce Atemba",
        popupLink: "./assets/img/graduates/84.jpg",
        description: `<h4 class='mb-1'>Gladyce Atemba</h4>
                        <p style='line-height:normal'>Bachelor in Theology, Minor in Christian Counseling</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/86.jpg",
        imgAlt: "Chaplain Edward Lianda",
        popupLink: "./assets/img/graduates/84.jpg",
        description: `<h4 class='mb-1'>Chaplain Edward Lianda</h4>
                        <p style='line-height:normal'> Master in Divinity, Minor in Chaplaincy</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/87.jpg",
        imgAlt: "Monicah Marira",
        popupLink: "./assets/img/graduates/84.jpg",
        description: `<h4 class='mb-1'>Monicah Marira</h4>
                        <p style='line-height:normal'>Bachelor in Theology, Minor in Christian Counseling</p>`,
      },
      {
        imgSrc: "./assets/img/graduates/88.jpg",
        imgAlt: "Lucy Anjichi",
        popupLink: "./assets/img/graduates/84.jpg",
        description: `<h4 class='mb-1'>Lucy Anjichi</h4>
                        <p style='line-height:normal'>Bachelor in Theology, Minor in Christian Counseling</p>`,
      },
    ],
  },
];
