document.addEventListener("DOMContentLoaded", function() {
    
    const ora = new Date().getHours();
    let mesajSalut = "";

    if (ora >= 6 && ora < 12) {
        mesajSalut = "Bună dimineața! Bine ai venit pe pagina mea.";
    } else if (ora >= 12 && ora < 18) {
        mesajSalut = "Bună ziua! Bine ai venit pe pagina mea.";
    } else {
        mesajSalut = "Bună seara! Bine ai venit pe pagina mea.";
    }

    const headerElement = document.querySelector("header");

    if (headerElement) {
        const paragrafNou = document.createElement("p");
        
        paragrafNou.textContent = mesajSalut;

        paragrafNou.style.marginTop = "10px";
        paragrafNou.style.fontWeight = "bold";
        paragrafNou.style.color = "var(--secondary-color, #3498db)"; 

        headerElement.appendChild(paragrafNou);
    }
});

//Validare formular

document.addEventListener("DOMContentLoaded", function () {
    const formular = document.getElementById("contact-form");
    if (formular) {
        formular.addEventListener("submit", submitForm);
    }

    const ora = new Date().getHours();
    let mesajSalut = "";
    if (ora >= 6 && ora < 12) mesajSalut = "Bună dimineața! Bine ai venit pe pagina mea.";
    else if (ora >= 12 && ora < 18) mesajSalut = "Bună ziua! Bine ai venit pe pagina mea.";
    else mesajSalut = "Bună seara! Bine ai venit pe pagina mea.";

    const headerElement = document.querySelector("header");
    if (headerElement) {
        const paragrafNou = document.createElement("p");
        paragrafNou.textContent = mesajSalut;
        paragrafNou.style.marginTop = "10px";
        paragrafNou.style.fontWeight = "bold";
        paragrafNou.style.color = "var(--secondary-color, #3498db)";
        headerElement.appendChild(paragrafNou);
    }
});

function submitForm(event) {
    event.preventDefault();

    const numeCamp = document.getElementById("name");
    const emailCamp = document.getElementById("email");
    const mesajCamp = document.getElementById("message");

    const nume = numeCamp ? numeCamp.value.trim() : "";
    const email = emailCamp ? emailCamp.value.trim() : "";
    const mesaj = mesajCamp ? mesajCamp.value.trim() : "";

    let notificare = document.getElementById("notificare-formular");
    if (!notificare) {
        notificare = document.createElement("p");
        notificare.id = "notificare-formular";
        notificare.style.marginTop = "15px";
        notificare.style.fontWeight = "bold";
        notificare.style.textAlign = "center";
        event.target.appendChild(notificare);
    }

    if (nume.length < 2) {
        notificare.textContent = "Eroare: Numele trebuie să aibă cel puțin 2 caractere.";
        notificare.style.color = "#e74c3c";
        return;
    }

    if (!email.includes("@")) {
        notificare.textContent = "Eroare: Adresa de email trebuie să conțină caracterul '@'.";
        notificare.style.color = "#e74c3c";
        return;
    }

    if (mesaj.length < 10) {
        notificare.textContent = "Eroare: Mesajul trebuie să aibă cel puțin 10 caractere.";
        notificare.style.color = "#e74c3c";
        return;
    }

    notificare.textContent = "Formularul a fost trimis cu succes! Îți mulțumesc pentru mesaj.";
    notificare.style.color = "#2ecc71";

    event.target.reset();
}