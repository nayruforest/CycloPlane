// Ajoute une nouvelle valeur dans le localStorage
function AjouterElement() {
			
	var nom = document.forms.ShoppingList.nom.value;
	var donnees = document.forms.ShoppingList.donnees.value;
	localStorage.setItem(nom, donnees);
	AfficherTous();
	
}
//------------------------------------------------------------------------------
// Modifie une valeur existante dans le localStorage
function ModifierElement() {
	var nom1 = document.forms.ShoppingList.nom.value;
	var donnees1 = document.forms.ShoppingList.donnees.value;
	// Vérifie si nom1 existe
	
	// Vérifie si la valeur existe
	if (localStorage.getItem(nom1) != null) {
		// Mise à jour
		localStorage.setItem(nom1, donnees1);
		document.forms.ShoppingList.donnees.value = localStorage.getItem(nom1);
	}
	
	AfficherTous();
}
//-------------------------------------------------------------------------
// Supprime une valeur existante dans la liste d'objets
function SupprimerElement() {
	var nom = document.forms.ShoppingList.nom.value;
	document.forms.ShoppingList.donnees.value = localStorage.removeItem(nom);
	AfficherTous();
}
//-------------------------------------------------------------------------------------
// Réinitialise le localStorage
function ToutSupprimer() {
	localStorage.clear();
	AfficherTous();
}
//--------------------------------------------------------------------------------------
function AfficherTous() {
	if (VerifierNavigateur()) {
		var cle = "";
		var liste = "<tr><th>Élément</th><th>Valeur</th></tr>\n";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			cle = localStorage.key(i);
			liste += "<tr><td>" + cle + "</td>\n<td>"
				+ localStorage.getItem(cle) + "</td></tr>\n";
		}
		// Si la liste est vide
		if (liste == "<tr><th>Élément</th><th>Valeur</th></tr>\n") {
			liste += "<tr><td><i>vide</i></td>\n<td><i>vide</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = liste;
	} else {
		alert('Impossible d\'enregistrer le panier car votre navigateur ne le supporte pas.');
	}
}

/*
 =====> Vérifie si le navigateur supporte localStorage
 // Cette étape n'est peut-être pas nécessaire
*/
function VerifierNavigateur() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// On peut donc utiliser localStorage
		return true;
	} else {
		// Sinon, on ne peut pas
		return false;
	}
}