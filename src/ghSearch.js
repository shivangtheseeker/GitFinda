const searchicon = document.querySelector('.search_icon');
const searchBar = document.querySelector('.search_bar')
const searchtxt = document.querySelector('.searchtxt');
const profileName = document.querySelector('.profile_mainname');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following')
const img = document.querySelector('.profile_pic')
const userLocation = document.querySelector('.user_location')
const company = document.querySelector('.user_company')
const bio = document.querySelector('.profile_bio')
const userName = document.querySelector('.profile_username')
const userMail = document.querySelector('.user_mail')
const profileBtn = document.querySelector('.btnCta')
const repoBundle = document.querySelector('.repo_bundle')
const bundler = document.querySelector('.bundler')
//const details = document.querySelector('.details');
//details.style.display = "none";

searchicon.addEventListener('click', (event) =>{
    event.preventDefault();
    if(searchtxt.value!=''){
        showprofile()
    }
    else{
        alert('plz type something');
        
    }

    searchtxt.value = '';
    
})

const showprofile = ()=>{

    fetch(`https://api.github.com/users/${searchtxt.value.trim()}`)
    .then(responsive => responsive.json())
    .then(data=>{
        bundler.style.visibility = 'visible';
        if(data.status!=404 && data.name){
            console.log(data);
            profileName.innerText = data.name;
            followers.innerText = data.followers;
            following.innerText = data.following;
            img.src = data.avatar_url;
            userName.innerText = data.login
            userLocation.innerText = data.location || "Not Available"; 
            userLocation.style.color = data.location ? "var(--theme-clr-dark)" : "var( --secondary-txt-clr)"; 

            company.innerText = data.company || "Not Available";
            company.style.color = data.company ? "var(--theme-clr-dark)" : "var( --secondary-txt-clr)";

            bio.innerText = data.bio || " ";

            if (!data.email) {
               userMail.style.color = "var( --secondary-txt-clr)";
               userMail.removeAttribute("href"); 
               userMail.style.pointerEvents = "none"; 
               userMail.innerText = "E-mail not available"; 
            } else {
               userMail.href = `mailto:${data.email}`;
               userMail.style.pointerEvents = "auto";
            }

            profileBtn.addEventListener('click', () =>{
                profileBtn.href = data.html_url;

            })

            return fetch(`https://api.github.com/users/${data.login}/repos`)
        }
        else{
            alert('user does not exist')
            bundler.style.visibility = 'hidden';
        }
    }
    )
    .then(respo => respo.json())
    .then(respo => {
        console.log(respo)
        repoBundle.innerHTML = '';
        if(respo){
            for(let i = 0 ; i <= respo.length ; i++){
                let repo = ` 
                 <div class="repo_card_details">
                   <h1 class="repo_card_heading">${respo[i].full_name.split("/")[1]}</h1>
                   <div class="status">
                     <p class="repo_card_status">${respo[i].visibility}</p>
                   </div>
                 </div>
                 <div class="repo_card_lang">
                   <div class="lang_clr"></div>
                   <p class="lang_name">${respo[i].language}</p>
                 </div>
                `;

                let article = document.createElement('article');
                article.setAttribute('class' , 'repo_cards');
                article.innerHTML = repo;
                repoBundle.appendChild(article);

                


            }
        }
    })
}

