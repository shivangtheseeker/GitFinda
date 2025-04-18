import '../styles/style.css'
import '../styles/header.css'
import '../styles/profile.css'
import '../styles/repo_list.css'
import '../styles/utility.css'


const body = document.querySelector("body");
const darkMode = document.querySelector(".dark_mode");
const lightMode = document.querySelector(".light_mode");
const modeSwitcher = document.querySelector(".mode_switcher");
const repoHeader = document.querySelector('.repo_toggle');
const profile = document.querySelector('.profile')
const profilePic = document.querySelector('.profile_pic')


modeSwitcher.addEventListener('click', ()=>{
    if(body.dataset.theme === "dark"){
        body.dataset.theme = "light";
        lightMode.style.display = "none";
        darkMode.style.display = "block";
    }
    else{
        body.dataset.theme = "dark";
        lightMode.style.display = "block";
        darkMode.style.display = "none";

    }

})




function createStickyObserver(targetElement, stuckClass) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          entry.target.classList.add(stuckClass);
        } else {
          entry.target.classList.remove(stuckClass);
        }
      },
      {
        rootMargin: "-1px 0px 0px 0px",
        threshold: 1
      }
    );
  
    observer.observe(targetElement);
}
  
createStickyObserver(repoHeader , 'stuck'); 
