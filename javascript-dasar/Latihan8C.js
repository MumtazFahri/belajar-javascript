var pilihanUser = prompt("Apakah kamu memilih Gajah, Semut, atau Manusia?");
var pilihanComputer = Math.random();

if(!["Gajah", "Semut", "Manusia"].includes( pilihanUser)) {
    alert("Yang bener dong")
}

if(pilihanComputer <0.34) {
    pilihanComputer = "Gajah";
}else if (pilihanComputer > 0.34 && pilihanComputer <=0.67) {
    pilihanComputer= "Manusia";
}else {
    pilihanComputer = "Semut";
}

// Hasil permainan
var hasilPermainan = "";
if (pilihanUser == pilihanComputer) {
    hasilPermainan = "Seri";
} else if ((pilihanUser == "Gajah" && pilihanComputer == "Semut") ||
           (pilihanUser == "Semut" && pilihanComputer == "Manusia") ||
           (pilihanUser == "Manusia" && pilihanComputer == "Gajah")) {
    hasilPermainan = "Pemain menang";
} else {
    hasilPermainan = "Komputer menang";
}
alert("Hasil permainan: " + hasilPermainan);

