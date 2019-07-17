class Affine{
	constructor(division){
		this.name = "Affine Cipher";
		this.para_div = division;
		division.innerHTML = '';
		this.initDiv();
	}

	getchar(num){
		num = num % 26
		num = num < 0 ? num + 26 : num
		return String.fromCharCode('a'.charCodeAt(0) + num);
	}

	encrypt(ptext){
		return ptext;
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
		return ctext;
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

	}

	initDiv(){
		var node0 = document.createTextNode("ax + b")

		var node1 = document.createTextNode("a: 	");
		var keyinput = document.createElement("select");
		keyinput.id = "key1";
		var coprimes = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25]
		for (var i = 0; i < coprimes.length; i++) {
			var option = document.createElement("option");
			option.value = coprimes[i];
			option.text = coprimes[i];
			keyinput.appendChild(option);
		}

		var node2 = document.createTextNode("b: 	");
		var keyinput2 = document.createElement("select");
		keyinput2.id = "key2";
		for (var i = 0; i < 26; i++) {
			var option = document.createElement("option");
			option.value = i;
			option.text = i;
			keyinput2.appendChild(option);
		}

		this.para_div.appendChild(node0);
		this.para_div.appendChild(document.createElement('br'))
		this.para_div.appendChild(node1);
		this.para_div.appendChild(keyinput);
		this.para_div.appendChild(document.createElement('br'))
		this.para_div.appendChild(node2);
		this.para_div.appendChild(keyinput2);

	}
}