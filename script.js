const apisko = "https://restcountries.com/v3.1/all"

function capitalizeWords(str) {
    let words = str.split(' ');
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());  
    let result = capitalizedWords.join(' ');
    return result;
  }
const formularzyk = document.getElementById("jd")

formularzyk.addEventListener("submit", (event) => {
    event.preventDefault();

    let jaki_kraj = capitalizeWords(document.getElementById("krajec").value);

    console.log(jaki_kraj)

    const kraj = document.getElementById("country_name")
    const image = document.getElementById("flag")
    const capital = document.getElementById("capital")

    divek = document.getElementById("krajinfo")
    divek.setAttribute('class','jds')

    foundpe = document.getElementById("found")

    let contry_found = false

    fetch(apisko)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                if (Object.values(data[i].name).includes(jaki_kraj)){
                    divek = document.getElementById("krajinfo")
                    divek.setAttribute('class','none')
                    kraj.textContent = jaki_kraj
                    image.src = data[i].flags.png
                    capital.textContent=data[i].capital
                    foundpe.textContent=''
                    contry_found=true;
                }
            if (contry_found == false){
                foundpe.textContent='Country not found'
            }
                
            }
        });
});
