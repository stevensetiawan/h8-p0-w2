function konversiMenit(menit){
    var jam = 0
    for(i = 0; i <=menit; i++)
    if (menit >= 60){
        menit -= 60 
        jam++
        
    } 
    return `${jam} : ${menit}`
}
console.log(konversiMenit(197))