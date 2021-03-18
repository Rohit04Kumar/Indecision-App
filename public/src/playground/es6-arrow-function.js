function square (x){
    return x * x ;
}

console.log(square(4))

// const squareArrow = (x) => {
//     return x * x ;
// }

const squareArrow = (x) => x * x ; 
console.log(squareArrow(9))

const fullName = 'Rohit Kumar';
let firstName;

const getName = () => {
    firstName = fullName.split(' ')[0];
    return firstName;
}

console.log(getName());

const getFirstName = (name) => name.split(' ')[1];
console.log(getFirstName('Anku Verma'));