function xo(str){
    var jumlahX = 0
    var jumlahO = 0 
    for(i = 0; i<=str.length-1; i++){
        if(str[i].toLowerCase() === "x"){
            jumlahX += 1
        }
        else if(str[i].toLowerCase() === "o"){
            jumlahO += 1
        }
    }
    if (jumlahX !== 0 && jumlahX === jumlahO){
        return true
    }
    else {
      return false
    }
}
console.log(xo("Xaxofone"))