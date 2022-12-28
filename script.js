const url = "https://api.openweathermap.org/data/2.5/"
//azmi deliaslan github-project api key 
const key = "50a7aa80fa492fa92e874d23ad061374"

var input = document.querySelector('.input_text');
var main = document.querySelector('#city');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var button= document.querySelector('.submit');

input.addEventListener("keydown", function(event) {if (event.key === "Enter") {submitInput();}});
button.addEventListener("click", submitInput);

let cities = [];

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
  //Adding more cities option 
  let city = {
      name: nameValue,
      temp: tempValue,
      desc: descValue
    }

    cities.push(city);
    input.value ="";
    displayCities();

})

.catch(err => {
  if (lang === "tr") {
    alert("Lütfen geçerli bir şehir adı girin!");
  } else {
    alert("Please enter a valid city name!");
  }
});

}
//adding city and display it
function displayCities() {
  let container = document.querySelector('.card_container');
  container.innerHTML = '';

  for (let i = 0; i < cities.length; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h1 class="name">${cities[i].name}</h1>
      <p class="temp">${Math.round(cities[i].temp)}<sup>°C<sup></p>
      <p class="desc">${cities[i].desc.toUpperCase()}</p>
    `;
    container.appendChild(card);
  }
}
