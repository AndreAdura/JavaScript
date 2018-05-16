
let conditions = document.getElementById('conditions');
conditions.checked = false;

let	submitButton = document.getElementById('submit');

conditions.onclick = function(){

	if(conditions.checked === true){
	submitButton.removeAttribute('disabled');
} else	{
	submitButton.setAttribute('disabled','yes')
}

}


let	emailBox = document.getElementById('inputBoxEmail');
emailBox.onclick = function() {
	emailBox.style.background = "lightblue";
}


emailBox.onblur = function() {
	emailBox.style.background = "yellow";
}

let passwordBox = document.getElementById('inputBoxPassword');
passwordBox.onclick = function(){
	passwordBox.style.background = "lightblue";
}

passwordBox.onblur = function(){
	passwordBox.style.background = "yellow";
}


