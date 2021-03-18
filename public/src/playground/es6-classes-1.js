class Person {
    constructor(name = 'Annonymous', age = 0){
        this.name = name ;
        this.age = age;
    }

    getGreeting(){
        return 'Hi I Am ' + this.name + ' ! '
    }

    getDescription(){
        return `${this.name} is ${this.age} year's old`
    }


};

class Student extends Person{
    constructor(name, age, major){
        super(name, age)
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        // return description;
       
        if(this.hasMajor()){
            description += ` and his major is ${this.major}`;
        }
        return description;
    }
    

}

class Traveller extends Person{
    constructor(name, location){
        super(name)
        this.location = location;
    }

    hasLocation(){
        return !!this.location;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if(this.hasLocation()){
            greeting += ` I Am Visiting From ${this.location} `
        }

        return greeting;
    }

}

const me = new Traveller('Rohit Kumar', 'Bangaluru');
console.log(me.getGreeting());

const others = new Traveller();
console.log(others.getGreeting());