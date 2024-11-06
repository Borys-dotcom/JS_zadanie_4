let jsonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach((element, index) => {
    console.log(`${index} - imię: ${element.firstName}, nazwisko: ${element.lastName}.`);
});