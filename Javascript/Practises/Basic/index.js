let a = 7

console.log(a)

const newVar = 0;
console.log(newVar);

const emptyVar = null;
console.log(emptyVar)


let message;
message = 'Hello';
// alert(message);

let str = "Hello"
let str2 = 'Single quote'
console.log(str, str2);

let nameField = true;
console.log(nameField); 

let isGreate = 4 > 1;
console.log(isGreate)

let age=100;
age = undefined;
console.log(age);

console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert);

// let ages = prompt('How old are you?', 100);
// console.log(`You are ${ages} years old!`)
// // alert(`You are ${ages} years old!`);

// let confirm_test = confirm("are you okay?")
// console.log(confirm_test)

let value1 = true;
console.log(typeof value1);

value2 = String(value1);
console.log(typeof value2)

let x = 1;

x = -x;

let x1 =1, y = 3;
console.log(y - x1);

console.log(5 + 7);
console.log( 2 ** 2);
console.log( 5 % 2);


let s = "my" + "string";
console.log(s);

console.log(2 + 2 + '1');

console.log( true ||  true)
console.log( false || true)
console.log( true || false)
console.log( false || false)

console.log(true && true)
console.log(false && true)


console.log( !true )
console.log( !0 )

// console.log(height ?? 100) 
let height = 0;
console.log(height ?? 100)

function showMessage() {
	console.log("this is shoeMessage value")
}

showMessage();


function passMsg(from, text="default msg") {
    console.log(from, ":", text)
  }
  
passMsg("gokul")

let i = 0;
while (i < 3){
	console.log (i);
	i++
}

let xy = 3;
while (i)
{
console.log("i--", i)
i--;
}


let do1 = 0;
do {
    console.log("do1", do1);
	do1++;
    if (do1 == 2) {
        console.log("do1=4", do1);
        break;
    }
}while(do1 < 3)


function sayHi(){
    console.log("Function executed without call")
}
sayHi()
let func = sayHi;

func();


let test1 = function() {
	console.log("test1")
 }

test1()
 

function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}

function showOk(){
	console.log("pressed yes")
}

function showCancel(){
	console.log("canceled execution")
}


ask("do you agree?", showOk, showCancel)
