
//retinem intr-un array ce e la  educatie
const elementeLista = document.querySelectorAll("ol li");
const arrayEducatie = Array.from(elementeLista).map(function (li) {
    return li.textContent.trim();
});
console.log(arrayEducatie);

//doua filtre dupa un cuvant (unul cu Galati si altul Facultate)
document.addEventListener("DOMContentLoaded", function () {
    const elementeLista = document.querySelectorAll("ol li");
    const arrayEducatie = Array.from(elementeLista).map(function (li) {
        return li.textContent.trim();
    });

    const filtruLicenta = arrayEducatie.filter(function (element) {
        return element.includes("Facultate");
    });

    const filtruGalati = arrayEducatie.filter(function (element) {
        return element.includes("Galati");
    });

    console.log(filtruLicenta);
    console.log(filtruGalati);
});

//array doar cu primul cuvant

const primulCuvantArray = arrayEducatie.map(function (element) {
    return element.split(" ")[0];
});
console.log(primulCuvantArray);

//total ani studiu cu reduce

const totalAni = arrayEducatie.reduce(function (acumulator, element) {
    const ani = element.match(/\d{4}/g); 
    
    if (ani && ani.length === 2) {
        const durata = parseInt(ani[1]) - parseInt(ani[0]);
        return acumulator + durata;
    }
    
    return acumulator;
}, 0);

console.log("Total ani de studiu: " + (totalAni + 8));
