//looping 1 while
console.log("LOOPING PERTAMA")
var tulisan = 2
while(tulisan <= 20){
    console.log(tulisan +" "+"-"+" "+"I love coding")
    tulisan +=2 ;
}
//looping 2 while
console.log("LOOPING KEDUA")
var tulisan2 = 20
while(tulisan2 >= 2){
    console.log(tulisan2 +" "+"-"+" "+"I will become fullstack developer")
    tulisan2 -=2 ;
}

//looping 1 for
console.log("LOOPING PERTAMA ")
for(var tulisan3 = 1; tulisan3 <= 20; tulisan3++){
    console.log(tulisan3 +" "+"-"+" "+"I love coding")
}
//looping 2 for
console.log("LOOPING PERTAMA ")
for(var tulisan4 = 20; tulisan4 >= 1; tulisan4--){
    console.log(tulisan4 +" "+"-"+" "+"I will become fullstack developer")
}

//soal ganjil dan genap
console.log("SOAL GANJIL GENAP")
for(i = 1; i<=100; i++){
    if(i % 2 === 0){
        console.log(i+" "+"genap")
    }
else{ console.log(i+" "+"ganjil")}
}
//soal kelipatan 3
console.log("SOAL KELIPATAN 3")
for(i2 = 1; i2<=100; i2+=2){
    if(i2 % 3 === 0){
        console.log(i2+" "+"KELIPATAN 3")
    }
    else {console.log(i2)}
}

//soal kelipatan 6
console.log("SOAL KELIPATAN 6")
for(i3 = 1; i3<=100; i3+=5){
    if(i3 % 6 === 0){
        console.log(i3+" "+"KELIPATAN 6")
    }
    else {console.log(i3)}
}

//soal kelipatan 10
console.log("SOAL KELIPATAN 10")
for(i4 = 1; i4<=100; i4+=9){
    if(i4 % 10 === 0){
        console.log(i4+" "+"KELIPATAN 10")
    }
    else {console.log(i4)}
}
