import '../styles/style.css'
import '../styles/header.css'
import '../styles/profile.css'
import '../styles/repo_list.css'
import '../styles/utility.css'


let body = document.querySelector("body");
let darkMode = document.querySelector(".dark_mode");
let lightMode = document.querySelector(".light_mode");
let modeSwitcher = document.querySelector(".mode_switcher");
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
