const name = "Dana";
console.log(name);

let age = 14
console.log(age);

const isStudent = true
console.log(isStudent);


const myString = "закінчуй те що почав"
console.log(myString);

const myNumber = 6 + 10
console.log(myNumber);

const myNull = null
console.log(myNull);

const username = prompt("напиши своє імя будь ласка")
if (username) {
    alert(`Привіт, ${username}! Радий тебе бачити!`);
}
console.log(username);

const isOK = confirm(`Привіт!! Тобі подобається цей сайт?`)
if (isOK) {
    alert("Я так і знала дякую!")
}
else {
   alert("Відповідь ні не приймається!!!")
}

alert("Увага! Ця дія може бути небезпечною.");

let userResponse = confirm("Ви впевнені, що хочете виконати цю дію?");

if (userResponse) {
    
    alert("Дякую, чекай вірус!");
} else {
    
    alert("ну як хочеш");
}