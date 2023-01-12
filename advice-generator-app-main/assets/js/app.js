let advice = document.getElementById("advice");
let advID = document.getElementById("adv-id");

function fetch_api_data() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      advID.innerHTML = `Advice #${data.slip.id}`;
      advice.innerHTML = `"${data.slip.advice}"`;
    });
}

fetch_api_data();
