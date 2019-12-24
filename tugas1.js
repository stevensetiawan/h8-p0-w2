//Pseudocode
/** set var hasil as array by value first, second and third
 * do bubble sort the number from the lower to the bigger
 * do looping and input condition to get the lost number
 * push number to the new variable array 
 */

function lostNumbers(first,second,third){
    var hasil = [first,second,third]

    for(var i = 0; i < hasil.length; i++){
        for(var j = 0; j<hasil.length; j++){
            if (hasil[j] > hasil[j+1]){
                var temp = hasil[j];
                hasil[j] = hasil[j+1]
                hasil[j + 1] = temp
                
            }
        }
    }
    var hasilakhir = []
    for(var i = hasil[0]; i < hasil[hasil.length-1]; i++){
        
        if(i!==hasil[0] && i !== hasil[1] && i!==hasil[2]){
            hasilakhir.push(i)   
        }
    }
    if (hasilakhir.length === 0){
        return "tidak ada angka sama sekali"
    }
    return hasilakhir;
}


console.log(lostNumbers(100, 108, 105, 112, 116, 119, 121));
// // 101, 102, 103, 104, 106, 107

