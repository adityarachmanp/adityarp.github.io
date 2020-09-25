const output = ['Siswa Hacktiv 8', 'Web Developer', 'Graphic Designer'];
let count = 0;
let index = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == output.length){
		count = 0;
	}

	temp = output[count];

	words = temp.slice(0, ++index);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == temp.length){
		count++;
		index = 0;
	}

	setTimeout(ngetik, 500);

})();