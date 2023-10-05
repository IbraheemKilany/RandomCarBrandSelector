
var carBrands = [
    'kia',
    'ford',
    'toyota',
    'honda',
    'chevrolet',
    'nissan',
    'hyundai',
    'volkswagen',
    'bMW',
    'mercedes-Benz',
    'audi',
    'lexus',
    'subaru',
    'mazda',
    'jeep',
    'tesla',
    'volvo',
    'porsche',
    'ferrari',
    'lamborghini',
    'maserati',
    'jaguar',
    'land Rover'
    
];
var englishLetters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var randomLetter = Math.floor(Math.random()*englishLetters.length)

function randomTypeOfCar(){
for(let i=0; i<carBrands.length;i++){
if(carBrands[i][0] == englishLetters[randomLetter]){

console.log("this is car name start with letter :"+ " "+carBrands[i][0]+"  "+"the name car is "+carBrands[i])

}
}
}
randomTypeOfCar()



























