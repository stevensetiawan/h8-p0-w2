function konversiMenit(menit){
    var jam = 0
    if (menit >= 60){
        jam++
    } 
    return `${jam} : ${menit}`
}
console.log(konversiMenit(73))