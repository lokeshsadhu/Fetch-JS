const activityEl=document.getElementById('activity')
const typeEl=document.getElementById('type')
const participantsEl=document.getElementById('participants')
const priceEl=document.getElementById('price')
const linkEl=document.getElementById('link')
const accessibilityEl=document.getElementById('accessibility')
const buttonEl=document.getElementById('button')

const url = 'https://www.boredapi.com/api/activity';
const options = {
	method: 'GET',
};

async function apicall(){
    try {
        const response = await fetch(url, options);
        console.log(response.status)
        const result = await response.json();
        setall(result)
    } catch (error) {
        console.error(error);
    }
}
function setall(result){
    activityEl.textContent=result.activity
    typeEl.textContent=result.type
    participantsEl.textContent=result.participants
    priceEl.textContent=result.price
    if(result.link===""){
        linkEl.textContent="No Link available"
    } else{
        linkEl.textContent=result.link
    }
    accessibilityEl.textContent=result.accessibility
}

buttonEl.addEventListener("click",function(){
    apicall()
})


