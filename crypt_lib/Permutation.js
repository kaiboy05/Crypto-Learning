class Permutation{
		constructor(division){
		this.name = "Permutation Cipher";
		this.para_div = division;
		division.innerHTML = '';
		this.initDiv();
	}

	encrypt(ptext){
		var result = '';
		var new_length = ptext.length - (ptext.length % this.pad) + this.pad;
		for(var i = 0; i < new_length; i++){
			var r = i % this.pad;
			var d = (i - r) / this.pad;
			console.log(d, r, d + this.permutation[r]);
			var tochange = ptext[d * this.pad + this.permutation[r]];
			if(tochange){
				console.log(tochange);
				result += tochange;
			}
			else{
				result += ' '
			}
		}
		return result;
	}

	decrypt(ctext){
		var result = '';
		this.inverse = this.getpermutation_inv();
		var new_length = ctext.length - (ctext.length % this.pad) + this.pad;
		console.log(this.inverse);
		for(var i = 0; i < new_length; i++){
			var r = i % this.pad;
			var d = (i - r) / this.pad;
			console.log(d, r, d + this.inverse[r]);
			var tochange = ctext[d * this.pad + this.inverse[r]];
			if(tochange){
				console.log(tochange);
				result += tochange;
			}
			else{
				result += ' '
			}
		}
		return result;
	}

	getparameters(){
		this.pad = parseInt(document.getElementById('key1').value, 10);
		this.pos = parseInt(document.getElementById('key2').value, 10);
		this.permutation = this.getpermutation(this.pad, this.pos);
	}

	getpermutation(pad, pos){
		var temp = [];
		for(var i = 0; i < pad; i++){
			temp.push(i);
		}
		var help = this.getpermutation_help(pad - 1, pos);
		var result = [];
		for(var i = 0; i < pad; i++){
			result.push(temp.splice(help[i], 1)[0]);
		}
		return result;
	}

	getpermutation_inv(){
		var result = [];
		for(var i = 0; i < this.permutation.length; i++){
			for(var j = 0; j < this.permutation.length; j++){
				if(this.permutation[j] == i){
					result.push(j);
					break;
				}
			}
		}
		return result;
	}

	getpermutation_help(pad, pos){
		if(pad < 1){
			return [0];
		}
		else{
			var divide = fact(pad);
			var remainder = pos % divide;
			var next = (pos - remainder) / divide;
			var result = this.getpermutation_help(pad - 1, remainder);
			result.unshift(next);
			return result;
		}
	}

	initDiv(){
		var node1 = document.createTextNode("Padding: 	");
		var keyinput = document.createElement("textarea");
		keyinput.id = "key1";
		keyinput.cols ="50";
		keyinput.rows ="1";

		var node2 = document.createTextNode("Position: 	");
		var keyinput2 = document.createElement("textarea");
		keyinput2.id = "key2";
		keyinput2.cols ="50";
		keyinput2.rows ="1";

		var random_but = document.createElement("button");
		random_but.innerHTML = "Generate Random position"
		random_but.addEventListener("click", 
			function(){
				var pad = parseInt(document.getElementById('key1').value, 10);
				if(pad){
					var Sk_size = fact(pad);
					document.getElementById('key2').value = Math.floor(Math.random() * Sk_size);
				}
			}
		)

		var header = document.createElement('p');
		header.appendChild(document.createTextNode(this.name))
		this.para_div.appendChild(header);
		this.para_div.appendChild(node1);
		this.para_div.appendChild(keyinput);
		this.para_div.appendChild(document.createElement('br'));
		this.para_div.appendChild(node2);
		this.para_div.appendChild(keyinput2);
		this.para_div.appendChild(random_but);

	}
}

function fact(num){
	if(num <= 1){return 1;}
	else{
		return num * fact(num - 1);
	}
}