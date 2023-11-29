const month = document.querySelector("#month")
const day = document.querySelector("#day")
const year = document.querySelector("#Year")

const hour =document.querySelector("#Hours")
const minite =document.querySelector("#Minites")

const second =document.querySelector("#Seconds")
const MOrA = document.querySelector(".morningorafternoon")


const dayNames = [,"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]




const monthName =["San","Feb","Mar","Apl","May","June","Jul","Aug","Sep","Oct","Nov","Dec"]
const dataTime = new Date()

month.innerHTML=dataTime.getDate()
day.innerHTML= monthName[dataTime.getMonth()];
year.innerHTML =dataTime.getFullYear();

if (dataTime.getHours()>12) {
    MOrA.innerHTML = "PM"
}
else{
    MOrA.innerHTML = "AM"
}

function clock(){

    const dataTime = new Date()

month.innerHTML=dataTime.getDate()
day.innerHTML= monthName[dataTime.getMonth()];
year.innerHTML =dataTime.getFullYear();


    // month.innerHTML=dataTime.getDate()
    // day.innerHTML= monthName[dataTime.getMonth()];
    // year.innerHTML =dataTime.getFullYear();

    if(dataTime.getHours()< 10){
        hour.innerHTML =`0 ${dataTime.gethour()}:`
    }
else{
    hour.innerHTML=dataTime.getHours()+":"
    minite.innerHTML=dataTime.getMinutes()+":"
    second.innerHTML=dataTime.getSeconds()+":"

}

    
 }
 setInterval(clock,400)