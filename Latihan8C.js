var pilihanUser = prompt("Apakah kamu memilih Gajah, Semut, atau Manusia?");
var pilihanComputer = Math.random();

if(pilihanComputer <0.34) {
    pilihanComputer = "Gajah";
}else if (pilihanComputer > 0.34 && pilihanComputer <=0.67) {
    pilihanComputer= "Manusia";
}else {
    pilihanComputer = "Semut";
}

// Proses permainan
console.log("Pilihan pemain: " + pilihanUser);
console.log("Pilihan komputer: " + pilihanComputer);

// Hasil permainan
var hasilPermainan = "";
if (pilihanUser == pilihanComputer) {
    hasilPermainan = "Seri";
} else if ((pilihanUser == "Gajah" && pilihanComputer == Math.random) ||
           (pilihanUser == "Semut" && pilihanComputer == Math.random) ||
           (pilihanUser == "Manusia" && pilihanComputer == Math.random)) {
    hasilPermainan = "Pemain menang";
} else {
    hasilPermainan = "Komputer menang";
}
alert("Hasil permainan: " + hasilPermainan);


