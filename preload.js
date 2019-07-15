var crypt_types = [
	"Plain"
];

function genOptions(selection){
	for(var i = 0; i < crypt_types.length; i++){
		var option = document.createElement("option");
		option.value = crypt_types[i];
		option.text = crypt_types[i];
		selection.add(option);
	}
	initParameters();
}

var selection = document.getElementById("selection");
var parameter_division = document.getElementById("parameters");
var cipher;

function initParameters(){
	var select = selection.value;
	if(select == crypt_types[0]){
		cipher = new Plain(parameter_division)
	}
}

function encrypt_generate(){
	var ptext = document.getElementById("e_plaintext").value;
	cipher.getparameters()
	var ctext = cipher.encrypt(ptext);
	document.getElementById("e_ciphertext").value = ctext;
}

function decrypt_generate(){
	var ctext = document.getElementById("d_ciphertext").value;
	cipher.getparameters()
	var ptext = cipher.decrypt(ctext);
	document.getElementById("d_plaintext").value = ptext;
}

genOptions(selection);


