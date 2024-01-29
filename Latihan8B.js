alert ("Menu Makanan \n1.Nasi Goreng Rp .15000 \n2.Mie Ayam Rp .10000 \n3.Bubur Ayam Rp. 7000" );
var makanan = prompt("Silahkan memesan");
var pesanan = prompt("Mau pesan berapa?");
var x = 15000
var y = 10000
var z = 7000
var totalHarga = x * pesanan;
if (makanan == "Mie ayam") {
  totalHarga = y * pesanan;
} else if (makanan == "Bubur Ayam") {
  totalHarga = z * pesanan;
}

alert("Pesanan Anda:\nMakanan: " +
 makanan +"\nJumlah porsi: " + pesanan + 
"\nTotal harga: Rp. " + totalHarga );

alert ("Terimakasih sudah mampir");