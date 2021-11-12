var isim=prompt("Isminizi giriniz...")
console.log(isim)

let isimDegistirme = document.querySelector("#name");
isimDegistirme.innerHTML = isim;


var anlikTarih = new Date();
var tarih = anlikTarih.getHours() + ":" + anlikTarih.getMinutes() + ":" + anlikTarih.getSeconds();

let date = document.querySelector("#myClock")
date.innerHTML = tarih;