class Vigenere{
		constructor(division){
		this.name = "Vigenere Cipher";
		this.para_div = division;
		division.innerHTML = '';
		this.initDiv();
	}

	encrypt(ptext){
		var result = '';
		var a_code = 'a'.charCodeAt(0);
		var A_code = 'A'.charCodeAt(0);
		for(var i = 0; i < ptext.length; i++){
			var n = ptext[i].charCodeAt(0);
			if(n - 'a'.charCodeAt(0) < 26 && n - 'a'.charCodeAt(0) >= 0){
				n = n - a_code;
				var pos = i % this.keylen;
				var char_add = getchar(n + (this.cipherkey[pos].charCodeAt(0) - a_code));
				result += char_add;
			}
			else if(n - 'A'.charCodeAt(0) < 26 && n - 'A'.charCodeAt(0) >= 0){
				n = n - A_code;
				var pos = i % this.keylen;
				var char_add = getchar(n + (this.cipherkey[pos].charCodeAt(0) - a_code));
				result += char_add.toUpperCase();
			}
			else{
				result += ptext[i];
			}
		}
		return result;
	}

	decrypt(ctext){
		var result = '';
		var a_code = 'a'.charCodeAt(0);
		var A_code = 'A'.charCodeAt(0);
		for(var i = 0; i < ctext.length; i++){
			var n = ctext[i].charCodeAt(0);
			if(n - 'a'.charCodeAt(0) < 26 && n - 'a'.charCodeAt(0) >= 0){
				n = n - a_code;
				var pos = i % this.keylen;
				var char_add = getchar(n - (this.cipherkey[pos].charCodeAt(0) - a_code));
				result += char_add;
			}
			else if(n - 'A'.charCodeAt(0) < 26 && n - 'A'.charCodeAt(0) >= 0){
				n = n - A_code;
				var pos = i % this.keylen;
				var char_add = getchar(n - (this.cipherkey[pos].charCodeAt(0) - a_code));
				result += char_add.toUpperCase();
			}
			else{
				result += ctext[i];
			}
		}
		return result;
	}

	getparameters(){
		this.cipherkey = document.getElementById('key1').value.toLowerCase();
		console.log(this.cipherkey);
		this.keylen = this.cipherkey.length;
		console.log(this.keylen);
	}

	initDiv(){
		var node = document.createTextNode("Key");
		var keyinput = document.createElement("textarea");
		keyinput.id = "key1";
		keyinput.cols="50";
		keyinput.rows="1";

		this.para_div.appendChild(document.createTextNode(this.name));
		this.para_div.appendChild(document.createElement('br'));
		this.para_div.appendChild(node);
		this.para_div.appendChild(document.createElement('br'));
		this.para_div.appendChild(keyinput);
	}
}