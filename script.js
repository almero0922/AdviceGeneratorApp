const ca = document.getElementById('ca');
const idE = document.getElementById('id');
const textE = document.getElementById('text');
ca.addEventListener('click', () => {
    restApiCall();
})

function restApiCall(){
    fetch(' https://api.adviceslip.com/advice' ,  { cache: "no-cache" })
    .then(response => response.json())
    .then(data => {

        idE.innerText = "ADVICE #" + data.slip.id;
        textE.innerText = '"'+data.slip.advice+'"';
    })
}
