
let ratedStars = 0
const allStars = document.querySelectorAll(".numbers");
const btn = document.querySelector(".btn");

allStars.forEach((star,i)=>{
    star.onclick=function(){
        let currentStarLevel = i+1;
        ratedStars=currentStarLevel;
        allStars.forEach((star,j)=>{
            if(currentStarLevel>=j+1){
                star.innerHTML = '&#9733;'
                star.classList.add("active")
            }else{
                star.innerHTML = '&#9734;'
                
                star.classList.remove("active")
            }
        })
    }
})

btn.addEventListener('click',()=>{
    document.querySelector(".container1").style.display="none";
    document.querySelector(".container2").style.display="flex";
    document.querySelector(".ratedOutput").innerHTML = `You selected ${ratedStars} out of 5`
})