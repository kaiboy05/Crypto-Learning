class Affine{
	constructor(division){
		this.name = "Affine Cipher";
		this.para_div = division;
		division.innerHTML = '';
		this.coprimes = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
		this.inv = [1, 9, -5, -11, 3, -7, 7, -3, 11, -9, -1];
		this.initDiv();
	}

	encrypt(ptext){
		var a = this.a
		var b = this.b
		return ptext.split('').map(function(c){
			var n = c.charCodeAt(0);
			if(n - 'a'.charCodeAt(0) < 26 && n - 'a'.charCodeAt(0) >= 0){
				n = n - 'a'.charCodeAt(0);
				var result = getchar(a * n + b)
				return result;
			}
			else if(n - 'A'.charCodeAt(0) < 26 && n - 'A'.charCodeAt(0) >= 0){
				n = n - 'A'.charCodeAt(0);
				var result = getchar(a * n + b)
				return result.toUpperCase();
			}
			else{
				return c;
			}
		}).join('');
	}

	decrypt(ctext){
		var a = this.a
		var b = this.b
		var inverse = this.getinverse(a);
		return ctext.split('').map(function(c){
			var n = c.charCodeAt(0);
			if(n - 'a'.charCodeAt(0) < 26 && n - 'a'.charCodeAt(0) >= 0){
				n = n - 'a'.charCodeAt(0);
				var result = getchar((n - b) * inverse)
				return result;
			}
			else if(n - 'A'.charCodeAt(0) < 26 && n - 'A'.charCodeAt(0) >= 0){
				n = n - 'A'.charCodeAt(0);
				var result = getchar((n - b) * inverse)
				return result.toUpperCase();
			}
			else{
				return c;
			}
		}).join('');
	}

	getparameters(){
		this.a = parseInt(document.getElementById('key1').value, 10);
		this.b = parseInt(document.getElementById('key2').value, 10);
	}

	getinverse(num){
		for(var i = 0; i < this.coprimes.length; i++){
			if(this.coprimes[i] == num){
				return this.inv[i];
			}
		}
	}

	initDiv(){
		var node0 = document.createTextNode("ax + b")

		var node1 = document.createTextNode("a: 	");
		var keyinput = document.createElement("select");
		keyinput.id = "key1";
		for (var i = 0; i < this.coprimes.length; i++) {
			var option = document.createElement("option");
			option.value = this.coprimes[i];
			option.text = this.coprimes[i];
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

		this.para_div.appendChild(document.createTextNode(this.name));
		this.para_div.appendChild(document.createElement('br'));
		this.para_div.appendChild(node0);
		this.para_div.appendChild(document.createElement('br'));
		this.para_div.appendChild(node1);
		this.para_div.appendChild(keyinput);
		this.para_div.appendChild(document.createElement('br'));
		this.para_div.appendChild(node2);
		this.para_div.appendChild(keyinput2);

	}
}