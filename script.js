const url = "https://api.openweathermap.org/data/2.5/"
const key = "4dbca05d52ebdef13340615f9f30ed63"

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

button.addEventListener('click', function(name){
let query = `${url}weather?q=${input.value}&appid=${key}`
fetch(query).then(response => response.json()).then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("Please Enter Valuable City Name!"));
})
