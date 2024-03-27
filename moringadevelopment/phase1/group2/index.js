const number = [10,20,30,40,20,10];

function removeDuplicate(number){
   return number.filter((arr,index)=>
        number.indexOf(arr) === index
    )
}
console.log(removeDuplicate(number));