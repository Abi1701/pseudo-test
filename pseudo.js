//kelipatan 5
const arrayRange = (start, stop, step) =>
	Array.from(
		{ length: (stop - start) / step + 1 },
		(value, index) => start + index * step
	);
const range = arrayRange(50, 100, 10);

console.log(range);
//conditional angka
function number(n) {
	if (n <= 60) {
		return "kurang";
	}
	if (n > 60 && n <= 70) {
		return "cukup";
	}
	if (n > 70 && n <= 80) {
		return "Baik";
	}
	if (n > 80) {
		return "Luar Biasa";
	}
}
console.log(number(95));

//soal deret fibonacci 20
function fibonacci(n) {
	let fib = [0, 1];
	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib;
}
console.log(fibonacci(20));
//pyramid test
let n = 4;
let string = "";
for (let i = 1; i <= n; i++) {
	for (let j = 0; j < i; j++) {
		string += "*";
	}
	string += "\n";
}
console.log(string);

//Test Terbilang menjadi Kalimat
const numbersToWords = {
	0: "Nol",
	1: "Satu",
	2: "Dua",
	3: "Tiga",
	4: "Empat",
	5: "Lima",
	6: "Enam",
	7: "Tujuh",
	8: "Delapan",
	9: "Sembilan",
	10: "Sepuluh",
	11: "Sebelas",
	12: "Dua Belas",
	13: "Tiga Belas",
	14: "Empat Belas",
	15: "Lima Belas",
	16: "Enam Belas",
	17: "Tujuh Belas",
	18: "Delapan Belas",
	19: "Sembilan Belas",
	20: "Dua Puluh",
	30: "Tiga Puluh",
	40: "Empat Puluh",
	50: "Lima Puluh",
	60: "Enam Puluh",
	70: "Tujuh Puluh",
	80: "Delapan Puluh",
	90: "Sembilan Puluh",
};
function convertNumberToWords(number) {
	if (number in numbersToWords) return numbersToWords[number];
	let words = "";
	if (number >= 1000) {
		words += convertNumberToWords(Math.floor(number / 1000)) + " Ribu ";
		number %= 1000;
	}
	if (number >= 100) {
		words += convertNumberToWords(Math.floor(number / 100)) + " ratus";
		number %= 100;
	}
	if (number > 0) {
		if (words !== "") words += " ";
		if (number < 20) words += numbersToWords[number];
		else {
			words += numbersToWords[Math.floor(number / 10) * 10];

			if (number % 10 > 0) {
				words += "-" + numbersToWords[number % 10];
			}
		}
	}

	return words;
}

console.log(convertNumberToWords(5900));
