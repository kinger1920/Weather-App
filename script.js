const apiKey = "7491656195ac46238be152847241701";
const apiUrl = "https://api.weatherapi.com/v1/current.json?key=" + apiKey;
const regex = /^([^0-9]*)$/;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("stadt").addEventListener("click", function() {
        document.getElementById("stadt")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search").click();
    }
});
    });
});


async function update(){
    let input = document.getElementById("stadt").value;
    if (input.match(regex) == null){
        alert("Keine Zahlen, nur Buchstaben!");
        return;
    }
    if (input == ""){
        alert("Bitte eine Stadt eingeben.");
        return;
    }

    const request = new Request(apiUrl + "&q=" + input + "&lang=de" );
    const response = await fetch(request);
    const test = await response.json();

    let output = document.getElementById("output");
    let img = document.createElement("img");
    img.src="https:"+ test.current.condition.icon;

    output.innerText = "Stadt: " + test.location.name + 
        "\n Land: " + test.location.country + 
        "\n Temperatur: " + test.current.temp_c + "°C" +
        "\n Gefühlt: " + test.current.feelslike_c + "°C\n";
    
    document.getElementById("output").appendChild(img);
}
