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
                    <button> <a href="#">View Details</a></button>
                </div>
    </div>
            </div>
    `}

