var array = [1,2,3,4,5,6]

function parImpar(array) {
    array.forEach(number => {
        if(number%2 == 0)  {
            console.log('São pares' + number)
        }else {
            console.log('São impares' + number)
        }     
    });
}

parImpar([3,7,8,9,])
