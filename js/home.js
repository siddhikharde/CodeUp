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
}