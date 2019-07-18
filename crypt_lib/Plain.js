class Plain{
	constructor(division){
		this.name = "Plain";
		this.para_div = division;
		division.innerHTML = '';
		this.initDiv()
	}

	encrypt(ptext){
		return ptext;
	}

	decrypt(ctext){
		return ctext;
	}

	getparameters(){
		return 0;
	}

	initDiv(){
		var node = document.createTextNode("No parameters")

		this.para_div.appendChild(document.createTextNode(this.name));
		this.para_div.appendChild(document.createElement('br'));
		this.para_div.appendChild(node);
		this.para_div.appendChild(document.createElement('br'));
	}
}

function getchar(num){
	console.log(num);
	num = num % 26
	console.log(num);
	num = num < 0 ? num + 26 : num
	return String.fromCharCode('a'.charCodeAt(0) + num);
}

// class Basic{
// 	constructor(division){
// 		this.name = "Plain";
// 		this.para_div = division;
// 		division.innerHTML = '';
// 		this.initDiv()
// 	}

// 	encrypt(ptext){
// 		return ptext + "abcdfghjkl";
// 	}

// 	decrypt(ctext){
// 		return ctext + "cbadfghjkl";
// 	}

// 	getparameters(){
// 		return 0;
// 	}

// 	initDiv(){
// 		var para = document.createElement("p");
// 		var node = document.createTextNode("Key")
// 		var keyinput = document.createElement("textarea")
// 		keyinput.id = "key1"
// 		keyinput.cols="50"
// 		keyinput.rows="1"

// 		para.appendChild(node)

// 		this.para_div.appendChild(para)
// 		this.para_div.appendChild(keyinput)
// 	}
// }