class Person{
    constructor(name,age){
        this.age = age;
        this.name = name;
        this.alertAge(this.age);
    };
    alertAge() {
        //console.log(this.age)
    }
    getName(){
        return this.name;
    }
}

const said = new Person("Shehu",20);

// said.alertAge();
let i = 0;
for(; i <= 5; i++){
    //said.alertAge();
    said.getName();
}