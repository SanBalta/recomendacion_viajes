const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');

function searchCondition() {
const input = document.getElementById('conditionInput').value.toLowerCase();
const resultDiv = document.getElementById('result');
resultDiv.innerHTML = '';

fetch('travel_recommendation_api.json')
.then(response => response.json())
.then(data => {

const country = data.countries.find(item => item.name.toLowerCase() === input);
const temple = input.toLowerCase();
const beache = input.toLowerCase();



if (country === data.countries[0]) {
    
    console.log(data.temples.length)
    for (let i = 0; i < country.cities.length; i++) {
        const city = country.cities[i]; // Cambiado de country.cities[i] a cities[i]
        resultDiv.innerHTML += 
        `<div class="fnd">
            <img style="width:auto; border-radius:1px;border-radius:15px 15px 0 0;" src="${city.imageUrl}" alt="Image">
            <div class="text-info">
            <p style="font-size:12pt; font-weight:bolder;">${city.name}</p><br>
            <p style="font-size:8pt;">${city.description}</p>
            <button class="visit">Visit</button>
            </div>
        </div><br>`;
    } 
}else if (country === data.countries[1]){
    for (let i = 0; i < country.cities.length; i++) {
        const city = country.cities[i]; // Cambiado de country.cities[i] a cities[i]
        resultDiv.innerHTML += 
        `<div class="fnd">
            <img style="width:auto; border-radius:1px;border-radius:15px 15px 0 0;" src="${city.imageUrl}" alt="Image">
            <div class="text-info">
            <p style="font-size:12pt; font-weight:bolder;">${city.name}</p><br>
            <p style="font-size:8pt;">${city.description}</p>
            <button class="visit">Visit</button>
            </div>
        </div><br>`;
    } 
}else if (country === data.countries[2]){
    for (let i = 0; i < country.cities.length; i++) {
        const city = country.cities[i]; // Cambiado de country.cities[i] a cities[i]
        resultDiv.innerHTML += 
        `<div class="fnd">
            <img style="width:auto; border-radius:1px;border-radius:15px 15px 0 0;" src="${city.imageUrl}" alt="Image">
            <div class="text-info">
            <p style="font-size:12pt; font-weight:bolder;">${city.name}</p><br>
            <p style="font-size:8pt;">${city.description}</p>
            <button class="visit">Visit</button>
            </div>
        </div><br>`;
    }

}else if (temple === 'temples' ){
    for (let i = 0; i < data.temples.length; i++) {
        const t = data.temples[i]; // Cambiado de country.cities[i] a cities[i]
        resultDiv.innerHTML += 
        `<div class="fnd">
            <img style="width:auto; border-radius:1px;border-radius:15px 15px 0 0;" src="${t.imageUrl}" alt="Image">
            <div class="text-info">
            <p style="font-size:12pt; font-weight:bolder;">${t.name}</p><br>
            <p style="font-size:8pt;">${t.description}</p>
            <button class="visit">Visit</button>
            </div>
        </div><br>`;
    }

}else if (beache === 'beaches' ){
    for (let i = 0; i < data.beaches.length; i++) {
        const b = data.beaches[i];
        resultDiv.innerHTML += 
        `<div class="fnd">
            <img style="width:auto; border-radius:1px;border-radius:15px 15px 0 0;" src="${b.imageUrl}" alt="Image">
            <div class="text-info">
            <p style="font-size:12pt; font-weight:bolder;">${b.name}</p><br>
            <p style="font-size:8pt;">${b.description}</p>
            <button class="visit">Visit</button>
            </div>
        </div><br>`;
    }

}else {
resultDiv.innerHTML = 
`<div class="fnd noFound">
    <img src="img/exclamacion.png">
    <p style="color:blue;font-weight:bolder;">Condition not found.</p>
</div>`;

}
})
.catch(error => {
console.error('Error:', error);
resultDiv.innerHTML = 'An error occurred while fetching data.';
});
}


function ClearCondition() {
    const resultDiv = document.getElementById('result');
    const inputField = document.getElementById('conditionInput');
    resultDiv.innerHTML = ''; // Limpiar el contenido de resultados
    inputField.value = ''; // Limpiar el campo de entrada
}


btnSearch.addEventListener('click', searchCondition);
btnClear.addEventListener('click', ClearCondition);

