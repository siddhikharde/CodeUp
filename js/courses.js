

let searchCard = () => {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const cards = document.querySelectorAll('.course-card');
    cards.forEach(card => {
        const title = card.querySelector('.course-info h2').innerText.toLowerCase();
        const discrip = card.querySelector('.course-info p').innerText.toLowerCase();
        card.style.display = (title.includes(searchInput) || discrip.includes(searchInput)) ? "block" : "none";
    })
};

let filterCards = () => {
    const value = document.getElementById("level").value;
    const cards = document.querySelectorAll(".course-card");
    cards.forEach(card => {
        card.style.display = (card.dataset.level === value || value === "All") ? "block" : "none";
    })
}

let setEnrolledState = (button) => {
    let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const btns = document.querySelectorAll(".enroll-btn");
    const courseId = button.dataset.id;
    button.style.backgroundColor = "#e6ffe6"
    button.style.color = "#003300"
    button.innerText = "Enrolled";
    button.style.fontWeight = "550"
    if (!enrolledCourses.includes(courseId)) {
        enrolledCourses.push(courseId);
        localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
    }
}


let initEnrollment = () => {
    let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const btns = document.querySelectorAll(".enroll-btn");
    btns.forEach(btn => {
        const courseId = btn.dataset.id;
        if (enrolledCourses.includes(courseId)) {
            btn.style.backgroundColor = "#e6ffe6"
            btn.style.color = "#003300"
            btn.innerText = "Enrolled";
            btn.style.fontWeight = "550"
        }
        btn.onclick = () => setEnrolledState(btn);
    });
}



let overlay = (courseId) => {
     const overlayDiv = document.querySelector(".demo-con");
     overlayDiv.style.display="block";
    const videoContainer = document.getElementById("vedio");
    let vedioURL= "";  
    switch (courseId) {
        case "React":
            videoURL = "https://www.youtube.com/embed/Tn6-PIqc4UM?si=Ja_nLds_YhUY2VJ_";
            break;
        case "AdvJs":
            videoURL = "https://www.youtube.com/embed/hQVTIJBZook?si=XnZ1sv1659BgyS8v";
            break;
        case "NodeJs":
            videoURL = "https://www.youtube.com/embed/fBNz5xF-Kx4?si=ZzW4akyi79h5-aN2";
            break;
        case "Css":
            videoURL = "https://www.youtube.com/embed/jV8B24rSN5o?si=T39YQ6pMiBZvxnZb";
            break;
        case "Python":
            videoURL = "https://www.youtube.com/embed/r-uOLxNrNk8?si=qDxOPd_ktnD2A8CE";
            break;
        case "Ui-Ux":
            videoURL = "https://www.youtube.com/embed/c9Wg6Cb_YlU?si=v9r_51bBXs_8GTMU";
            break;
    }
       videoContainer.innerHTML = `
        <iframe  src="${videoURL}" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;
}

const initDemoBtns=()=>{
    const demoBtns=document.querySelectorAll(".demo-btn");
    demoBtns.forEach(btn=>{
        const courseId=btn.dataset.id;
        btn.onclick=()=>overlay(courseId);
    })
}   
window.onload=()=>{
   initEnrollment();
   initDemoBtns();
}

const hideDemo=()=>{
    let hideDemoContent=document.querySelector(".demo-con");
    hideDemoContent.style.display="none";
}

const addHeadingToDemo=()=>{
    let getHeading=document.querySelectorAll(".course-info h2");
    const setHeading=document.querySelector(".demo-heading h2");
    
    getHeading.forEach(heading=>{
        setHeading.innerText=`Demo : ${heading.innerText}`;
    })
    
}

const cardContainer = document.querySelector('.course-cards-container');
const imgURL= [
    "../images/course-page-imgs/react.png",
    "../images/course-page-imgs/advjs.jpeg",
    "../images/course-page-imgs/nodejs.jpeg",
    "../images/course-page-imgs/css.jpeg",
    "../images/course-page-imgs/python.jpeg",
    "../images/course-page-imgs/ui-ux.jpeg"
];

const courses = ["React Fundamentals", "Advanced JavaScript", "Node.js Backend Development", "CSS Grid & Flexbox", "Python Data Science", "UI/UX Design"];
const descriptions = [
    "Learn the fundamentals of React, including components, state, and props.",
    "Master advanced JavaScript concepts including closures, prototypes, and async programming.",
    "Build scalable backend applications with Node.js, Express, and MongoDB.",
    "Design responsive layouts using CSS Grid and Flexbox techniques.",
    "Explore data science concepts and libraries using Python.",
    "Understand the principles of UI/UX design and create user-friendly interfaces."
];
const levels = ["Beginner", "Advanced", "Intermediate", "Beginner", "Intermediate", "Beginner"];
const duration=["8 hours", "10 hours", "12 hours", "6 hours", "14 hours", "8 hours"];
const popular = ["1,250", "900", "2,100", "1,800", "950", "1,400"];
const rating =[4.8, 4.7, 4.6, 4.9, 4.8, 4.8];
const price=[ "1500", "2000", "1699", "999", "1500","2000" ]


 for(let i=0;i<courses.length;i++){
    cardContainer.innerHTML+=`
      <div class="course-card" data-level="${levels[i]}">
            <div class="img-container">
                <img src="${imgURL[i]}" alt="${courses[i]}">

                <span>${levels[i]}</span>

            </div>
            <div class="course-info">
                <h2>${courses[i]}</h2>
                <p>${descriptions[i]}</p>
                <div class="rating-con">
                    <div class="rating"><img src="../images/course-page-imgs/clock.png" alt="people" height="16px">
                        <span>${duration[i]}</span>
                    </div>
                    <div class="rating"> <img src="../images/course-page-imgs/people.png" alt="clock" height="19px">
                        <span>${popular[i]}</span>
                    </div>
                    <div class="rating"><img src="../images/course-page-imgs/star.png" alt="star" height="16px">
                        <span>${rating[i]}</span>
                    </div>
                </div>
            </div>
            <div class="price-btn-container">
                <div class="price">
                    <span> ₹${price[i]}</span>
                </div>
                <div class="btn-container">
                    <button class="demo-btn" data-id="${courses[i]}" onclick="overlay(this)">Demo</button>
                    <button class="enroll-btn" data-id="${courses[i]}">
                        Enroll
                    </button>
                </div>
            </div>
        </div>
    `

 }