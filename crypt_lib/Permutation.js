class Permutation{
		constructor(division){
		this.name = "Permutation Cipher";
		this.para_div = division;
		division.innerHTML = '';
		this.initDiv();
	}

	encrypt(ptext){
		return ptext;
	}

	decrypt(ctext){
		return ctext;
	}

	getparameters(){
		this.pad = parseInt(document.getElementById('key1').value, 10);
		this.pos = parseInt(document.getElementById('key2').value, 10);
		this.permutation = this.getpermutation(this.pad, this.pos);
		console.log(this.permutation);
	}

	getpermutation(pad, pos){
		var temp = [];
		for(var i = 0; i < pad; i++){
			temp.push(i);
		}
		var help = this.getpermutation_help(pad - 1, pos);
		var result = [];
		for(var i = 0; i < pad; i++){
			result.push(temp.splice(help[i], 1));
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