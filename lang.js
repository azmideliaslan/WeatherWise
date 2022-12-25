/*
  I wrote dynamic code for maximum 5 languages. Maybe in the future I can add 3 more
*/
var english = document.getElementById("en"),
    turkish = document.getElementById("tr"),
    change_text = document.getElementById("translate");

english.addEventListener("click", function() {
    change(english, turkish);
  }, false
);

turkish.addEventListener("click", function() {
    change(turkish, english);
  }, false
);

function change(lang_on, lang_off) {
  if (!lang_on.classList.contains("current_lang")) {
    lang_on.classList.add("current_lang");
    lang_off.classList.remove("current_lang");
  }

  if (lang_on.innerHTML == "EN") {
    change_text.classList.add("english");
    change_text.classList.remove("turkish");
    document.querySelector(".mainT").innerHTML = "Welcome to WeatherWise";
    document.querySelector(".mainP").innerHTML = "Weather Site - Getting Instant Temperature Information";
    document.querySelector(".submit").innerHTML = "Submit";
    document.querySelector(".input_text").placeholder = "Enter the city";
  }
  else if (lang_on.innerHTML == "TR") {
    change_text.classList.add("turkish");
    change_text.classList.remove("english");
    document.querySelector(".mainT").innerHTML = "WeatherWise'a Hoşgeldiniz ";
    document.querySelector(".mainP").innerHTML = "Hava Durumu Sitesi - Anlık Sıcaklık Bilgisi Alın";
    document.querySelector(".submit").innerHTML = "Gönder";
    document.querySelector(".input_text").placeholder = "Şehir Giriniz";
  }
}
  