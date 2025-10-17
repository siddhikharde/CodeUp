const hideSidebar = () =>{
   const sidebar= document.getElementById("sidebar-container");
    sidebar.style.display="none";
    const hamburger= document.querySelector(".hamburger-menu");
    hamburger.style.opacity="1";
    

}
const showSidebar = () =>{
    const sidebar= document.getElementById("sidebar-container");
    const hamburger= document.querySelector(".hamburger-menu");
    hamburger.style.opacity="0";
     sidebar.style.display="block";
     sidebar.style.opacity="1";
     sidebar.style.zIndex="1100";
     
}

const cardHeading=["Web Development Bootcamp", "Python for Beginners", "Java Programming", "Data Structures & Algorithms"];
const cardDiscription=[
  "Master HTML, CSS, and JavaScript to build stunning websites from scratch",
  "Learn Python programming from basics to advanced concepts with real projects",
  "Build enterprise applications with Java and understand OOP principles",
  "Master DSA concepts essential for technical interviews and problem solving"];
  const timeDuration=["40 hours", "35 hours", "50 hours", "60 hours"];
  const lessonCount=["120 Lessons", "95 Lessons", "140 Lessons", "180 Lessons"];

  const card=document.getElementById("feature-card-container");
  for(let i=0;i<cardHeading.length;i++){
    card.innerHTML+=`
   <div class="feature-course-card" id="feature-card">
    <div class="feature-card-content">
                   <h2 id="cardHeading">
                       ${cardHeading[i]}
                </h2>
                <p id="cardDiscription">
                   ${cardDiscription[i]}
                </p>
                <ul>
                    <li><i class="fa-solid fa-alarm-clock"></i> <span id="duration">${timeDuration[i]}</span></li>
                    <li><i class="fa-solid fa-book"></i> <span id="lessons">${lessonCount[i]}</span></li>
                </ul>
                <div class="btn-container">
                    <button> <a href="./pages/courses.html">View Details</a></button>
                </div>
    </div>
            </div>
    `}

    const feedbackCard=document.getElementById("feedback-cards-container");
    const feedback=[
      "CodeUp helped me transition from a non-tech background to landing my first developer job!",
      "The courses are well-structured and the projects are practical. Best learning investment I've made.",
      "Excellent instructor support and community. I learned more here than in my college courses."
    ]
    const studentName=[
      "Nikita Chavhan",
      "Aditya Singh",
      "Rohan Kharde"
    ]
    const studentRole=[
      "Frontend Developer at TechSolutions",
      "Data Analyst at DataCorp",
      "Software Engineer at Innovatech"
    ]

    for(let i=0;i<feedback.length;i++){
      feedbackCard.innerHTML+=`
     <div class="feedback-card" id="feedback-card">
       <p>"${feedback[i]}"</p>
       <div class="student-info">
           <h3>${studentName[i]}</h3>
           <span>${studentRole[i]}</span>
       </div>
     </div>
    `}
