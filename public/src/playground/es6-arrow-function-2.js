// const add = function (a, b){
//     console.log(arguments)
//     return a + b;
// }

// console.log(add(12, 45, 89));

const add = (a, b) => {
    return a + b;
} 

console.log(add(34, 90)); 

const user = {
    name : 'Rohit',
    cities : ['motihari', 'Bangalore', 'Patna'],

    printPlaceLived () {
            return this.cities.map((city) => this.name + ' has lived In ' + city )
}
}

console.log(user.printPlaceLived());

// challenge 

const multiplier = {
    numbers : [10, 40, 80],
    multiplyBy : 2 ,

    multiply : function (){
        return this.numbers.map((num) => {
            return num * this.multiplyBy;
        })
    }
}

console.log(multiplier.multiply());