const url = "https://api.openweathermap.org/data/2.5/"
//azmi deliaslan github-project api key 
const key = "50a7aa80fa492fa92e874d23ad061374"

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var button= document.querySelector('.submit');

input.addEventListener("keydown", function(event) {if (event.key === "Enter") {submitInput();}});
button.addEventListener("click", submitInput);

function submitInput() {
  //Changing Data Language also 
  var lang;
  var element = document.querySelector(".translation");
  var secondClass = element.classList[1];
  if(secondClass == "turkish"){
    lang = 'tr';
  }
  else if(secondClass == "english"){
    lang = 'en';
  }
  else{
    lang = 'en';
  }
  //getting data from my api in openmatter
let query = `${url}weather?q=${input.value}&appid=${key}&units=metric&lang=${lang}`
fetch(query).then(response => response.json()).then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = descValue.toUpperCase();
  temp.innerHTML =`${Math.round(tempValue)}°C`;
  input.value ="";

})

.catch(err => {
  if (lang === "tr") {
    alert("Lütfen geçerli bir şehir adı girin!");
  } else {
    alert("Please enter a valid city name!");
  }
});

}

