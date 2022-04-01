const citys = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const temps = document.querySelector('.temps');
const maxmin = document.querySelector('.maxmin');
const apikey = 'dccedc7eb27b0452b1152beab94e38c8';

let apiCall = function (city) {

  let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=fr`;

  fetch(url1).then((response) => response.json().then((data) => {

    console.log(data);

    citys.innerText = data.name;
    temperature.innerText = `${Math.round(data.main.temp)}°`;
    temps.innerText = data.weather[0].description;
    maxmin.innerText = `Max. ${Math.round(data.main.temp_max)} Min. ${Math.round(data.main.temp_min)}`;


    //const imgBg = data.weather[0].description;

    switch (imgBg) {

      case "couvert":
        document.body.style.backgroundImage = new URL("https://sebhastian.com/img/default.png");
        break;

      case 'peu nuageux':
        document.body.style.background = new URL('./images./sunny.jpeg');
        break;

      case 'ciel dégagé':
        document.body.style.background = new URL('');
        break;

      case 'pluie modérée':
        document.body.style.background = new URL('');
        break;

      case 'chute de neige':
        document.body.style.background = new URL('');
        break;

      case 'légère pluie':
        document.body.style.background = new URL('');
        break;

      case 'partiellement nuageux':
        document.body.style.background = new URL('');
        break;

      case 'brume':
        document.body.style.backgroundColor = new URL('');
        break;
    }

  })).catch((error) => {
    console.log(error);
  });
};

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#input-city').value;
    apiCall(ville);
  
  
  });