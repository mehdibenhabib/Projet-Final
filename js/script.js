
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
        panierTotalAchat -= prix;
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


// contact

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

  
    var response = document.getElementById('response');
    response.innerHTML = `Merci ${name}! Votre message "${message}" a été envoyé.`;
    
  });





// login

  function showCreateAccount() {
    var loginForm = document.getElementById('login-form');
    var createAccountForm = document.getElementById('create-account-form');
    loginForm.style.animation = 'fadeOut 0.5s ease-out forwards';
    createAccountForm.style.animation = 'fadeIn 0.5s ease-out forwards';
    setTimeout(function() {
        loginForm.style.display = 'none';
        createAccountForm.style.display = 'block';
    }, 500);
}

function showLoginForm() {
    var loginForm = document.getElementById('login-form');
    var createAccountForm = document.getElementById('create-account-form');
    createAccountForm.style.animation = 'fadeOut 0.5s ease-out forwards';
    loginForm.style.animation = 'fadeIn 0.5s ease-out forwards';
    setTimeout(function() {
        createAccountForm.style.display = 'none';
        loginForm.style.display = 'block';
    }, 500);
}

  