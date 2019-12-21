//soal 1
function shoutOut(){
    return "Halo Function!"
}
console.log(shoutOut());

//soal 2
function calculateMultiply(angka1,angka2){
return angka1*angka2
}
var hasilperkalian= calculateMultiply(20,20)
console.log(hasilperkalian)

//soal 3
function processSentence(name,age,address,hobby){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobi yaitu ${hobby}!`
}
var fullSentence = processSentence("Agus","30","Jln. Malioboro, Yogjakarta","gaming");
console.log(fullSentence);