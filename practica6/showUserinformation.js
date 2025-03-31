const fruits = [
    "apple",
    "pear",
    "uva",
    1
]

fruits.forEach(element => {
    console.log(element);
    
});

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);


const UserInfo = {
    name : "Henry",
    age  : 22,
    isActive : true,
    favoriteColor : ["blue", "verde"]
}

const {name, age, isActive, favoriteColor} = UserInfo

console.log(name);
console.log(age);
console.log(isActive);

favoriteColor.forEach(element => {
    console.log(element);
    
});



