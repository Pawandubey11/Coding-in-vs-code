document.addEventListener ('DOMContentLoaded', ()=>{


 const Input = document.getElementById("Input-container");
const info = document.getElementById("wheather-info");
const cityNmae1 = document.getElementById("city-name");
 const temp = document.getElementById("temperture");
  const des = document.getElementById("description");
  const error = document.getElementById("error-message");
   const text = document.getElementById("text1");
  
const API_KEY = "cea903df6788831ea65b2f7a9b42969a";


   text2.addEventListener('click',async ()=>{
   const city = text.value.trim();
    if (!city)return;
    

    try {
        const wheatherData = await feachWhweaterData (city);
        DisplayData (wheatherData);
    } catch (error) {
      showError();  
    }

   })

 async  function feachWhweaterData (city){
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}`;

  const response =  await fetch(url);

  console.log(typeof response);
  console.log("response : ", response);
    if(!response.ok){
      throw new Error("Data is not find");
      
    }
  const data =   await response.rejson();
  return data;
   }

   function DisplayData(data){
     console.log(data);
const {name,main,wheather} = data;
cityNmae1.textContent = name;

temp.textContent = `temperature ${main.temp}`;
des.textContent = `desprication ${wheather[0].description}`;  
// info.remove('hidden')
    info.classList.remove("hidden");
    error - message.classList.add("hidden");
   }

   function showError (){
info.classList.remove('hidden');
    error - message.classList.add('hidden');

   }
})