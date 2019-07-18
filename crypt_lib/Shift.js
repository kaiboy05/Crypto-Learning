class Rot{
	constructor(division){
		this.name = "Shift Cipher";
		this.para_div = division;
		division.innerHTML = '';
		this.initDiv();
	}

	encrypt(ptext){
		var key = this.cipherkey
		return ptext.split('').map(function(c){
			var n = c.charCodeAt(0);
			if(n - 'a'.charCodeAt(0) < 26 && n - 'a'.charCodeAt(0) >= 0){
				n = n - 'a'.charCodeAt(0);
				n = (n + key) % 26;
				return String.fromCharCode(n + 'a'.charCodeAt(0));
			}
			else if(n - 'A'.charCodeAt(0) < 26 && n - 'A'.charCodeAt(0) >= 0){
				n = n - 'A'.charCodeAt(0);
				n = (n + key) % 26;
				return String.fromCharCode(n + 'A'.charCodeAt(0));
			}
			else{
				return c;
			}
		}).join('');
	}

	decrypt(ctext){
		var key = this.cipherkey
		return ctext.split('').map(function(c){
			var n = c.charCodeAt(0);
			if(n - 'a'.charCodeAt(0) < 26 && n - 'a'.charCodeAt(0) >= 0){
				n = n - 'a'.charCodeAt(0);
				n = (n - key) % 26;
				if(n < 0){
					n += 26;
				}
				return String.fromCharCode(n + 'a'.charCodeAt(0));
			}
			else if(n - 'A'.charCodeAt(0) < 26 && n - 'A'.charCodeAt(0) >= 0){
				n = n - 'A'.charCodeAt(0);
				n = (n - key) % 26;
				if(n < 0){
					n += 26;
				}
				return String.fromCharCode(n + 'A'.charCodeAt(0));
			}
			else{
				return c;
			}
		}).join('');
	}

	getparameters(){
		this.cipherkey = document.getElementById('key1').value;
		this.cipherkey = parseInt(this.cipherkey, 10);
	}

	initDiv(){
		var node = document.createTextNode("Key (1 - 26)");
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