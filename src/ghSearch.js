const searchbar = document.querySelector('.search_bar');
const searchtxt = document.querySelector('.searchtxt');
const name = document.querySelector('.name');
const followers = document.querySelector('.followers');
const repo = document.querySelector('.repo');
const img = document.querySelector('.img')
const details = document.querySelector('.details');
details.style.display = "none";

searchbar.addEventListener('submit', (event) =>{
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
        if(data.status!=404 && data.name){
            console.log(data);
            name.innerText = data.name;
            followers.innerText = data.followers;
            img.src = data.avatar_url;
            repo.innerText = `${data.name}'s repos`;
            repo.href = `https://github.com/${data.login}?tab=repositories`;
            details.style.display = "block";
        }
        else{
            details.style.display = "none";
            alert('user does not exist')
        }
    }
    )
}

