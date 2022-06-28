let submit = document.getElementById('submit');
var array = [];

let calling = async () => {
    var inputName = document.getElementById('profileName').value;
    var url = `https://api.github.com/users/${inputName}`;
    
    try {
        const response = await fetch(url);
        array = await response.json();
        display();
    } catch (e) {
        console.log(e);
    }
}
    let display = () =>{
    userName.innerText = "NAME :  " + array.name;
    followers.innerText = "FOLLOWERS :  " + array.followers;
    following.innerText = "FOLLOWING :  " + array.following;
    repository.innerText = "REPOSITORY :  " + array.public_repos;
    Img.setAttribute('src', array.avatar_url);
    anchor.setAttribute('href', array.html_url);
}

submit.addEventListener('click', calling);
