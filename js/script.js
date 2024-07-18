
// Panier

let panierTotalAchat = 0;
let panierTotalLocation = 0;


const btnsAcheter = document.querySelectorAll('.btn-acheter');


btnsAcheter.forEach(btn => {
    btn.addEventListener('click', function() {
        let prixText = btn.previousElementSibling.textContent.trim();
        let prix = parseFloat(prixText.match(/[\d\.]+/)); 
        panierTotalAchat += prix;
        updatePanierTotal('achat');
        toggleRetirerButton(btn);
    });
});


const btnsLouer = document.querySelectorAll('.btn-louer');


btnsLouer.forEach(btn => {
    btn.addEventListener('click', function() {
        let prixText = btn.previousElementSibling.textContent.trim();
        let prix = parseFloat(prixText.match(/[\d\.]+/)); 
        panierTotalLocation += prix;
        updatePanierTotal('location');
        toggleRetirerButton(btn);
    });
});


function updatePanierTotal(type) {
    if (type === 'achat') {
        const panierTotalAchatElement = document.getElementById('panier-total-achat');
        panierTotalAchatElement.textContent = `Panier Achat: $${panierTotalAchat.toFixed(2)}`; 
    } else if (type === 'location') {
        const panierTotalLocationElement = document.getElementById('panier-total-location');
        panierTotalLocationElement.textContent = `Panier Location: $${panierTotalLocation.toFixed(2)}`; 
    }
}


function toggleRetirerButton(btn) {
    btn.nextElementSibling.style.display = 'inline-block';
}


const btnsRetirerAchat = document.querySelectorAll('.btn-retirer-achat');


btnsRetirerAchat.forEach(btn => {
    btn.addEventListener('click', function() {
        let prixText = btn.previousElementSibling.previousElementSibling.textContent.trim();
        let prix = parseFloat(prixText.match(/[\d\.]+/)); 
        updatePanierTotal('achat');
        toggleRetirerButton(btn.nextElementSibling);
    });
});


const btnsRetirerLocation = document.querySelectorAll('.btn-retirer-location');


btnsRetirerLocation.forEach(btn => {
    btn.addEventListener('click', function() {
        let prixText = btn.previousElementSibling.previousElementSibling.textContent.trim();
        let prix = parseFloat(prixText.match(/[\d\.]+/)); 
        panierTotalLocation -= prix;
        updatePanierTotal('location');
        toggleRetirerButton(btn.nextElementSibling);
    });
});
