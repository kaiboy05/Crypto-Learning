class Substitution{
	constructor(division){
		this.name = "Substitution Cipher";
		this.para_div = division;
		division.innerHTML = '';
		this.initDiv();
	}

	encrypt(ptext){
		var key = this.cipherkey
		return ptext.toLowerCase().split('').map(function(c){
			var n = c.charCodeAt(0);
			if(n - 'a'.charCodeAt(0) < 26 && n - 'a'.charCodeAt(0) >= 0){
				n = n - 'a'.charCodeAt(0);
				return key[n];
			}
			else{
				return c;
			}
		}).join('');
	}

	decrypt(ctext){
		var key = this.d_key
		return ctext.split('').map(function(c){
			if(c in key){
				return key[c];
			}
			else{
				return c;
			}
		}).join('');
	}

	getparameters(){
		this.cipherkey = document.getElementById('key1').value;
		if(this.cipherkey.length < 26){
			alert('Not enough length of key');
		}
		var i = 0;
		this.d_key = {};
		for(var i = 0; i < this.cipherkey.length; i++){
			this.d_key[this.cipherkey[i]] = String.fromCharCode(i + 'a'.charCodeAt(0));
		}
	}

	initDiv(){
		var node = document.createTextNode("Key (first 26 characters)");
		var keyinput = document.createElement("textarea");
		keyinput.id = "key1";
		keyinput.cols="50";
		keyinput.rows="1";

		var header = document.createElement('p');
		header.appendChild(document.createTextNode(this.name))
		this.para_div.appendChild(header);
		this.para_div.appendChild(node);
		this.para_div.appendChild(document.createElement('br'));
		this.para_div.appendChild(keyinput);
	}
}