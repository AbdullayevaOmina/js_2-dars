/*Foydalanuvchidan nechchi yoshligi so'raladi va 
1) nechchinchi yil tug'ilganligini chiqariladi 
2) 3yil dan keyin nechcha yoshga kirishi chiqariladi. 
3) yosh so'raladi va o'sha yoshga kirishi uchun yana necha yil borligi chiqariladi */

let age = prompt("Salom!👋 \nYoshingizni nechida?");
alert("Siz " + (2023 - age) + " yilda tug'ilganekansiz.");
alert("Siz 3 yildan keyin " + (3 + +age) + " yoshga to'lasiz");
let kelasi_yosh = prompt("Biron bir yoshni kiriting.");

if (+kelasi_yosh < +age){
	let kelasi_yos = prompt("Siz allaqachon bu yoshga to'lib bolgansiz.\nIltimmos boshqa yosh kiriting.")
	alert(kelasi_yos+" ga tolishingizga hali " + (+kelasi_yos - +age ) + " yil bor ekan.")
}
 else {
	alert(kelasi_yosh+" ga tolishingizga hali " + (+kelasi_yosh - +age) + " yil bor ekan.")
}
