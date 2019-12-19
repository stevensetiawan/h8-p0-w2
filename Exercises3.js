var nama = ""
var peran = ""

if(nama.length === 0){
    console.log("Nama harus diisi!")
 }
else if (peran.length === 0){
   console.log(`Halo ${nama} Pilih peranmu untuk memulai game!`)
}
else if(peran.toLowerCase() === "ksatria"){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}
 Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
}
else if(peran.toLowerCase() === "tabib"){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}
Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka!`)
}
else if(peran.toLowerCase() === "penyihir"){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}
Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
}


