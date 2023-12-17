function reinitialiser() {
    event.preventDefault();
    document.querySelector("form").reset();
    choix();
}

function choix() {
    var newsletterChecked = document.getElementById("newsletter").checked;

    var periodeNewsletterDiv = document.getElementById("periode_newsletter_div");
    periodeNewsletterDiv.style.display = newsletterChecked ? "block" : "none";
}