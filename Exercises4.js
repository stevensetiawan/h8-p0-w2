var tahun = 2004
var bulan = 2 
var tanggal = 29
if (tahun < 1900 || tahun > 2200){
    console.log("Masukkan tahun dari 1900 - 2200")
}
else if((bulan === 1 || bulan === 3 || bulan === 5 || bulan === 7 || bulan === 8 || bulan === 10 || bulan === 12) && (tanggal > 31 || tanggal < 1) ){
   console.log("Masukkan tanggal antara 1 - 31")
}
else if((bulan === 4 || bulan === 6 || bulan === 9 || bulan === 11) && (tanggal > 30 || tanggal < 1)){
    console.log("Masukkan tanggal antara 1 - 30")
}
else if(bulan === 2 && tahun % 4 === 0 && (tanggal > 29 || tanggal < 1)){
    console.log("Masukkan tanggal antara 1 - 29")
}
else if (bulan === 2 && tahun % 4 !== 0 && (tanggal > 28 || tanggal < 1)){
    console.log("Masukkan tanggal antara 1 - 28")
}
else if (bulan > 12 || bulan < 1){
    console.log("Masukkan bulan antara 1 - 12")
}
else {
switch(bulan){
    case 1 : {console.log(`'${tanggal} Januari ${tahun}'`); break}
    case 2 : {console.log(`'${tanggal} Februari ${tahun}'`); break}
    case 3 : {console.log(`'${tanggal} Maret ${tahun}'`); break}
    case 4 : {console.log(`'${tanggal} April ${tahun}'`); break}
    case 5 : {console.log(`'${tanggal} Mei ${tahun}'`); break}
    case 6 : {console.log(`'${tanggal} Juni ${tahun}'`); break}
    case 7 : {console.log(`'${tanggal} Juli ${tahun}'`); break}
    case 8 : {console.log(`'${tanggal} Agustus ${tahun}'`); break}
    case 9 : {console.log(`'${tanggal} September ${tahun}'`); break}
    case 10 : {console.log(`'${tanggal} Oktober ${tahun}'`); break}
    case 11 : {console.log(`'${tanggal} November ${tahun}'`); break}
    case 12 : {console.log(`'${tanggal} Desember ${tahun}'`); break}
}}

