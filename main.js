/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = ()=>{
    const header = document.querySelector(".header");
    (this.scrollY >=50) ? header.classList.add("scroll-header")
                        : header.classList.remove("scroll-header");

}
window.addEventListener("scroll",scrollHeader);
