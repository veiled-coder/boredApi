console.log('wahaka');

let btn = document.getElementById('btn-action')
let activity = document.querySelector('.activity')


btn.addEventListener('click', function () {
    fetch('https://apis.scrimba.com/bored/api/activity').
        then(res => res.json()).
    then(data=>activity.innerHTML=`${data.activity}` )
})