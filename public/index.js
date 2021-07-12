const currentDate = document.querySelector('#date');
const weatherIcon = document.querySelector('weathericon');
const cityName = document.querySelector('#inp');
const btn = document.querySelector('#submit-btn');
const temp = document.querySelector('.temp');
const locationUsed = document.querySelector('.location');


let tempStatus = "Clouds";
let weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

let month = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
let currentTime = new Date();
    let currentMonth =  currentTime.getMonth();
    let todayDate = currentTime.getDate();
    let hours = currentTime.getHours();
    let min = currentTime.getMinutes();
    if(min < '10'){
        min = "0" + min;

    }
const getCurrentDay = () => {
    
    currentDate.innerHTML = `${weekday[currentTime.getDay()]}  |  ${month[currentMonth]} ${todayDate} | ${hours}:${min}`;
   
}

getCurrentDay();

const getInfo = async(event)=>{
    event.preventDefault();
   let city_Name = cityName.value;
   
    if(city_Name == ""){
        alert('Please Write correct city Name');
        
    }else{
      try{ let url = `http://api.openweathermap.org/data/2.5/weather?q=${city_Name}&appid=f3efe161ff0aa76b321eba4d11a14c3a`;
        const res = await fetch(url);
        const data = await res.json();
        const arr = [data];
        temp.innerHTML = (arr[0].main.temp -273.15).toFixed(2);
        locationUsed.innerText = `${arr[0].name},${arr[0].sys.country}`;

    }catch{
         
    }
    }
}

btn.addEventListener('click', getInfo);

