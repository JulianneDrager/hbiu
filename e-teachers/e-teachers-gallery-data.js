const galleryData = [
  {
    title: "Gallery",
    description:
      "Bachelor, Master, PhD, congratulations on your accomplishment",
    items: [
      {
        imgSrc: "./assets/img/team/teach/2.jpg",
        imgAlt: "Prof. Dr. Shantel Cox",
        description: `<h4 class='mb-1'>Prof. Dr. Shantel Cox</h4>
                      <p style='line-height:normal'>Instructor: BA, MA & PHD in Business Admin.</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/3a.jpg",
        imgAlt: "Dr. Martha Kirungi Nafula",
        description: `<h4 class='mb-1'>Dr. Martha Kirungi Nafula</h4>
                      <p style='line-height:normal'>Lecturer: Bachelor of Law</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/3.jpg",
        imgAlt: "Prof. Dr. Richard Reeves",
        description: `<h4 class='mb-1'>Prof. Dr. Richard Reeves</h4>
        <p style='line-height:normal'>Instructor & Program Dir. | MA & PhD Counseling... </p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/4.jpg",
        imgAlt: "Dr. Spencer C. Lofton Sr",
        description: `<h4 class='mb-1'>Dr. Spencer C. Lofton Sr</h4>
                      <p style='line-height:normal'>Instructor: Addiction-BA, MA in Market & Ad.</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/5.jpg",
        imgAlt: "Dr. Jackie Evans Phillips",
        description: `<h4 class='mb-1'>Dr. Jackie Evans Phillips</h4>
      <p style='line-height:normal'>Instructor: Christian Counseling PhD & MA </p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/6.jpg",
        imgAlt: "Dr. Samuel O Israel",
        description: `<h4 class='mb-1'>Dr. Samuel O Israel</h4>
      <p style='line-height:normal'>Instructor: Cert. & BA in Music Prod. & Media...</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/7.jpg",
        imgAlt: "Dr. Tymon More",
        description: `<h4 class='mb-1'>Dr. Tymon More</h4>
      <p style='line-height:normal'>Instructor: Chaplaincy and Life Coach Cert.</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/8.jpg",
        imgAlt: "Dr. Marie A. Aupont",
        description: `<h4 class='mb-1'>Dr. Marie A. Aupont</h4>
      <p style='line-height:normal'>Dir. of Nursing and state board course cert. prep.</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/9.jpg",
        imgAlt: "Dr. Myma Esi Atta Wilson",
        description: `<h4 class='mb-1'>Dr. Myma Esi Atta Wilson</h4>
      <p style='line-height:normal'>Instructor: MA & PhD Humanitarian & Confl. Res.</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/10.jpg",
        imgAlt: "Dr. Wanda Olivia Page",
        description: `<h4 class='mb-1'>Dr. Wanda Olivia Page</h4>
      <p style='line-height:normal'>Instructor: Leadership & Cultural Mgmt MA...</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/11.jpg",
        imgAlt: "Dr. Willington Kalule",
        description: `<h4 class='mb-1'>Dr. Willington Kalule</h4>
      <p style='line-height:normal'>BA in Leadership and Cultural Management...</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/12.jpg",
        imgAlt: "Dr. Vendatta Hilton",
        popupLink: "./assets/img/team/teach/94.jpg",
        description: `<h4 class='mb-1'>Dr. Vendatta Hilton</h4>
                      <p style='line-height:normal'>Instructor: BA in Divinity (USA Classes)</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/13.jpg",
        imgAlt: "Dr. Pastor Emmah King'oo",
        popupLink: "./assets/img/team/teach/95.jpg",
        description: `<h4 class='mb-1'>Dr. Pastor Emmah King'oo</h4>
                      <p style='line-height:normal'>Diploma in Christian Counseling</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/14.jpg",
        imgAlt: "Dr. Abigael Tome",
        popupLink: "./assets/img/team/teach/96.jpg",
        description: `<h4 class='mb-1'>Dr. Abigael Tome</h4>
      <p style='line-height:normal'>Instructor: ASc in Business Mgmt., Minor in Ministry...</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/15.jpg",
        imgAlt: "Dr. Ester Olayinka Diya",
        popupLink: "./assets/img/team/teach/97.jpg",
        description: `<h4 class='mb-1'>Dr. Ester Olayinka Diya</h4>
                      <p style='line-height:normal'>Instructor: MA in Law, Minor in Ministry Legal Study</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/16.jpg",
        imgAlt: "Dr. Tracy V. Allen",
        popupLink: "./assets/img/team/teach/98.jpg",
        description: `<h4 class='mb-1'>Dr. Tracy V. Allen</h4>
      <p style='line-height:normal'>Instructor: Biz Admin. BA, Minor in Bis. Ministry...</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/17.jpg",
        imgAlt: "Jonathan Cunningham",
        description: `<h4 class='mb-1'>Jonathan Cunningham</h4>
                      <p style='line-height:normal'>MA in Music Production</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/18.jpg",
        imgAlt: "Dr. Jane Lilumbi Wangusi",
        description: `<h4 class='mb-1'>Dr. Jane Lilumbi Wangusi</h4>
                      <p style='line-height:normal'>Instructor: Certificate in Addiction Counseling</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/19.jpg",
        imgAlt: "Dr. Diana Brown",
        description: `<h4 class='mb-1'>Dr. Diana Brown</h4>
                      <p style='line-height:normal'>Teacher: BA in Theology</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/20.jpg",
        imgAlt: "Prof. Dr. John Lule Kutyamukamaa",
        description: `<h4 class='mb-1'>Prof. Dr. John Lule Kutyamukamaa</h4>
                      <p style='line-height:normal'>Instructor: MA in Public Health (FBI)</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/21.jpg",
        imgAlt: "Dr. Stephen Teigut",
        popupLink: "./assets/img/team/teach/103.jpg",
        description: `<h4 class='mb-1'>Dr. Stephen Teigut</h4>
                      <p style='line-height:normal'>Instructor: MA in Theology</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/22.jpg",
        imgAlt: "Dr. Michael Seku",
        popupLink: "./assets/img/team/teach/104.jpg",
        description: `<h4 class='mb-1'>Dr. Michael Seku</h4>
                      <p style='line-height:normal'>Instructor: BA, Diploma & Cert. in Chaplaincy</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/23.jpg",
        imgAlt: "Dr. David Amusavi",
        popupLink: "./assets/img/team/teach/105.jpg",
        description: `<h4 class='mb-1'>Dr. David Amusavi</h4>
                      <p style='line-height:normal'>Instructor: Diploma Pastoral Training</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/24.jpg",
        imgAlt: "Dr. Catherine Ngambi",
        popupLink: "./assets/img/team/teach/106.jpg",
        description: `<h4 class='mb-1'>Dr. Catherine Ngambi</h4>
                      <p style='line-height:normal'>Instructor: BA in Theology</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/25.jpg",
        imgAlt: "Bishop Dr. Florence Mbengei",
        popupLink: "./assets/img/team/teach/107.jpg",
        description: `<h4 class='mb-1'>Bishop Dr. Florence Mbengei</h4>
                      <p style='line-height:normal'>Teacher: BA in Theology</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/26.jpg",
        imgAlt: "Dr. Yvonne Solomon",
        popupLink: "./assets/img/team/teach/108.jpg",
        description: `<h4 class='mb-1'>Dr. Yvonne Solomon</h4>
                      <p style='line-height:normal'>Teacher: BA in Biblical Christian Counseling</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/27.jpg",
        imgAlt: "Dr. Pauline Osbourne",
        popupLink: "./assets/img/team/teach/109.jpg",
        description: `<h4 class='mb-1'>Dr. Pauline Osbourne</h4>
                      <p style='line-height:normal'>Instructor: Leadership & Cultural Mgmt PHD...</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/28.jpg",
        imgAlt: "Dr. Paul Wairama",
        popupLink: "./assets/img/team/teach/110.jpg",
        description: `<h4 class='mb-1'>Dr. Paul Wairama</h4>
                      <p style='line-height:normal'>Teacher: BA in Public Health</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/29.jpg",
        imgAlt: "Dr. Rev. Anthony Mwanthi",
        popupLink: "./assets/img/team/teach/111.jpg",
        description: `<h4 class='mb-1'>Dr. Rev. Anthony Mwanthi</h4>
                      <p style='line-height:normal'>Instructor: BA in Humanitarian & Confl. Res.</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/30.jpg",
        imgAlt: "Rev. Dr. Martin Nyaga",
        popupLink: "./assets/img/team/teach/112.jpg",
        description: `<h4 class='mb-1'>Rev. Dr. Martin Nyaga</h4>
                      <p style='line-height:normal'>Instructor: BA & MA in Biblical Counseling</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/31.jpg",
        imgAlt: "Dr. Norah Ogutu",
        popupLink: "./assets/img/team/teach/113.jpg",
        description: `<h4 class='mb-1'>Dr. Norah Ogutu</h4>
                      <p style='line-height:normal'>Instructor: BA in Marketing & Advertising</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/32.jpg",
        imgAlt: "Dr. Rev Dr. Joseph Mutisya",
        popupLink: "./assets/img/team/teach/114.jpg",
        description: `<h4 class='mb-1'>Dr. Rev Dr. Joseph Mutisya</h4>
                      <p style='line-height:normal'>Instructor: MA in Edu. & Christian Studies</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/33.jpg",
        imgAlt: "Dr. Obbo Allan",
        popupLink: "./assets/img/team/teach/115.jpg",
        description: `<h4 class='mb-1'>Dr. Obbo Allan</h4>
                      <p style='line-height:normal'>Instructor: Diploma/BA in IT Support & Technologies</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/34.jpg",
        imgAlt: "Dr. Rita Wanjiru",
        popupLink: "./assets/img/team/teach/116.jpg",
        description: `<h4 class='mb-1'>Dr. Rita Wanjiru</h4>
                      <p style='line-height:normal'>Instructor: Diploma/BA in Christian Education</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      {
        imgSrc: "./assets/img/team/teach/35.jpg",
        imgAlt: "Dr. Martin Otiso",
        popupLink: "./assets/img/team/teach/117.jpg",
        description: `<h4 class='mb-1'>Dr. Martin Otiso</h4>
                      <p style='line-height:normal'>Instructor: BA & Diploma in Marketing</p>`,
        alink: `<a href="#">LEARN MORE</a>`,
      },
      // Add more items with unique descriptions as needed
    ],
  },
];
