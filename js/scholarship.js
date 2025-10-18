
const scholarships = [
  {
    imgUrl:'../images/scholarship-page-imgs/hdfc.png',
    title: 'HDFC Educational Crisis Scholarship',
    subtitle:'HDFC Bank',
    category:'Need-Based',
    description: 'Supporting economically disadvantaged students to continue their education without financial burden.',
    amount:'Up to ₹75,000/year',
    duration:'Till completion of course',
    deadLine:'Deadline: March 31, 2025 (Expired)',
    benifit:'Complete tuition fee coverage + ₹1,000/month for books and stationery',
    eligibility1:'Family annual income below ₹25,000',
    eligibility2:'Currently enrolled in Class 6th to 12th',
    expireStatus:'Expired',
    link: 'https://www.buddy4study.com/page/hdfc-bank-parivartans-ecss-programme'
  },
    {
    imgUrl:'../images/scholarship-page-imgs/she-scho.png',
    title: 'INSPIRE Scholarship (SHE)',
    subtitle:'Department of Science & Technology',
    category:'Merit-Based',
    description: 'Inspiring excellence in natural sciences and encouraging research career.',
    amount:'₹80,000/year',
    duration:'5 years',
    deadLine:'Deadline: June 30, 2025 ',
    expireStatus:'Expired',
    benifit:'₹80,000/year + Research exposure + Summer internships',
    eligibility1:'Top 1% students in Class 12th board exams<',
    eligibility2:'Pursuing Natural & Basic Sciences',
    link: 'https://www.buddy4study.com/scholarship/inspire-scholarship-for-higher-education-she'
    },
    {
    imgUrl:'../images/scholarship-page-imgs/tata-scho.png',
    title: 'Tata Trusts Scholarship',
    subtitle:'Tata Trusts',
    category:'Merit-Based',
    description: 'Empowering talented students to pursue higher education at world-class institutions.',
    amount:'Up to ₹4,00,000/year',
    duration:'Till completion of course',
    deadLine:'Deadline: August 31, 2025',
    expireStatus:'Expired',
    benifit:'Full tuition + Living expenses + Travel allowance',
    eligibility1:'Graduation from recognized Indian university',
    eligibility2:'Minimum 65% aggregate marks',
    link: 'https://www.buddy4study.com/page/the-tata-capital-pankh-scholarship-programme'
    },
    {
    imgUrl:'../images/scholarship-page-imgs/group.png',
    title: 'Google Women Techmakers Scholarship',
    subtitle:'Google',
    category:'Women',
    description: 'Supporting economically disadvantaged students to continue their education without financial burden.',
    amount:'Up to $10,000',
    duration:'1 year',
    deadLine:'Deadline: September 30, 2025',
    expireStatus:'Expired',
    benifit:'₹1,00,000 + Mentorship + Google events access',
    eligibility1:'Currently enrolled in Bachelor\'s /Master\'s programs',
    eligibility2:'Female students in computer science',
    link: 'https://collegedunia.com/scholarship/282-googles-women-techmakers-program'
    },
    {
    imgUrl:'../images/scholarship-page-imgs/kishori-scho.png',
    title: 'Kishore Vaigyanik Protsahan Yojana (KVPY)',
    subtitle:'Department of Science & Technology',
    category:'Research-Based',
    description: 'Supporting economically disadvantaged students to continue their education without financial burden.',
    amount:'₹84,000/year + ₹28,000 contingency',
    duration:'Till PhD completion',
    deadLine:'Deadline: September 15, 2024',
    expireStatus:'Expired',
    benifit:'₹7,000/month (SA/SX) or ₹7,000/month (SB) + Annual contingency',
    eligibility1:'Currently enrolled in Bachelor\'s /Master\'s programs',
    eligibility2:'Class 11th, 12th, or 1st year UG students',
    link: 'https://www.indiascienceandtechnology.gov.in/nurturing-minds/scholarships/school/kishore-vaigyanik-protsahan-yojana-kvpy'
    },
    {
         imgUrl:'../images/scholarship-page-imgs/blue-scholarship.png',
    title: 'Reliance Foundation Undergraduate Scholarship',
    subtitle:'Reliance Foundation',
    category:'Need-Based',
    description: 'Transforming lives through quality education and holistic development.',
    amount:'₹2,00,000/year',
    duration:'4 years',
    deadLine:'Deadline: June 30, 2025 (Expired)',
    expireStatus:'Expired',
    benifit:'₹2,00,000/year + Mentorship + Skill development workshops',
    eligibility1:'Class 12th pass with minimum 60% marks',
    eligibility2:'Family income below ₹6 lakh/year',
    link: 'https://www.buddy4study.com/page/reliance-foundation-scholarships'

    },
    {
         imgUrl:'../images/scholarship-page-imgs/merit-scho.png',
    title: 'National Means-cum-Merit Scholarship',
    subtitle:'Ministry of Education',
    category:'Merit-Based',
    description: 'Preventing dropout and encouraging meritorious students from economically weaker sections.',
    amount:'₹12,000/year',
    duration:'4 years (Class 9-12)',
    deadLine:' Deadline: October 31, 2024 ',
    expireStatus:'Expired',
    benifit:'₹12,000/year for Classes 9th to 12th',
    eligibility1:'Studying in Class 9th',
    eligibility2:'Minimum 55% marks in Class 8th',
    link: 'https://www.buddy4study.com/article/nmms-scholarship-school-students'
    },
    {
             imgUrl:'../images/scholarship-page-imgs/birla.png',
    title: 'Aditya Birla Scholarship',
    subtitle:'Aditya Birla Group',
    category:'Merit-Based',
    description: 'Nurturing future leaders through financial support and leadership development.',
    amount:'₹1,75,000/year',
    duration:' 2 years',
    deadLine:' Deadline: August 15, 2024 ',
    expireStatus:'Expired',
    benifit:'₹1,75,000/year + Leadership development programs',
    eligibility1:'Top engineering or management institutes',
    eligibility2:'Excellent academic record',
    link: 'https://www.buddy4study.com/page/aditya-birla-capital-scholarship'
    }
];

const cardContainer = document.querySelector('.scho-cards-container');
for(let i=0; i<scholarships.length; i++){
    cardContainer.innerHTML+=`
   <div class="scho-card" data-category="${scholarships[i].category}">
            <div class="scho-header">
                <div class="scho-img">
                    <img src="${scholarships[i].imgUrl}" alt="scholarship-img">
                </div>
                <div class="scho-text">
                    ${scholarships[i].title}<br>
                    <span>${scholarships[i].subtitle}</span>
                </div>
                <div class="scho-categorie categorie-need">${scholarships[i].category}</div>
            </div>
            <div class="scho-info">
                <p>${scholarships[i].description}
                </p>
                <ul>
                    <li><img src="../images/scholarship-page-imgs/dollar.png" alt="dollar"> ${scholarships[i].amount}</li>
                    <li><img src="../images/scholarship-page-imgs/time.png" alt="time"> ${scholarships[i].duration}
                    </li>
                    <li><img src="../images/scholarship-page-imgs/calendar.png" alt="calendar">${scholarships[i].deadLine} <span>(${scholarships[i].expireStatus})</span></li>
                </ul>
            </div>
            <div class="benifits-con">
                <h3>Benefits:</h3>

                <div class="benifits">
                    <p>${scholarships[i].benifit}</p>
                </div>
            </div>
            <div class="eligibility-con">
                <h3>Key Eligibility:</h3>
                <div class="eligibility">
                    <ul>
                        <li>${scholarships[i].eligibility1}</li>
                        <li>${scholarships[i].eligibility2}</li>
                    </ul>
                </div>
            </div>
            <div class="apply-btn-con">
                <a href="${scholarships[i].link}" target="_blank"
                    class="apply-btn">Apply
                    Now<img src="../images/scholarship-page-imgs/send.png" alt=""></a>
            </div>
        </div>

`;
}

function filterCards() {
    const value=document.getElementById('categories').value;
const cards= document.querySelectorAll('.scho-card');
cards.forEach(card=>{
    card.style.display=(value=== "All" || card.dataset.category=== value) ? "block" : "none";
})
}

let searchScholarships = () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const cards =document.querySelectorAll('.scho-card');
    cards.forEach(card=>{
        const title = card.querySelector('.scho-text').innerText.toLowerCase();
        const description = card.querySelector('.scho-info p').innerText.toLowerCase();
        const eligibility = card.querySelector('.eligibility li').innerText.toLowerCase();
        card.style.display = (title.includes(searchInput) || description.includes(searchInput) || eligibility.includes(searchInput)) ? "block" : "none";
    });
}
