const bulb = document.getElementById("bulb");
const button = document.querySelector("button");


button.addEventListener('click',function(){
    if(bulb.classList.toggle("lightup")){
        button.textContent="Off"
    } else{
        button.textContent = "On"
    }
})


