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


//ask("do you agree?", showOk, showCancel)

// let ages = prompt("what is you age", 18);

// let welcome;

// if (ages < 18) {
// 	welcome = function() {
// 		console.log("value under 18")
// 	}
// } else {
// 	console.log("outside function")
// 	welcome =  function() {
// 		console.log("value above 18")
// 	}
// }

// welcome();


let sumTot = (a, b) => a+b
console.log(sumTot(2, 5))

let sayHello = () => console.log("without argument")
sayHello();

let sumCurly = (a, b) => {
	let result = a + b;
	return result
}

console.log(sumCurly(5,5))

let user1 = new Object();
console.log(user1)
let user2 = {};
console.log(user2)

let user3 = {
	name: "John",
	age: 30
  };

console.log(user3)
console.log(user3.name)
console.log(user3.age)

//Add a value in object
user3.isAdmin = true;
console.log(user3)

delete user3.age
console.log(user3)

// let fruit = prompt("Fruit to buy?", "apple");

let fruit = "apple"

let bag = {
	[fruit]: 5,
};

console.log(bag)
console.log( bag.apple ); 

let user_test = { name: "John", age:30 };

console.log( "age" in user_test );
console.log( "blabla" in user_test );

let user_for = {
	name: "John",
	age: 30,
	isAdmin:true
}
  
for (let key in user_for) {
	
   console.log(key)
   console.log(user_for[key])
}

let user_ref = { name: "John" }
let admin = user_ref;

admin.name = 'Gk1'
user_ref.age = 27
console.log(user_ref)
console.log(admin)

let user_org = {
	name: "John",
	age: 30
 };
 
 let clone = {}
 
 for (let key in user_org) {
	clone[key] = user_org[key];
 }
 
 clone.name = "Gk1";
 
 console.log(clone)
 console.log(user_org)

let user_combine = { name: "Gk1" };

let permission1 = { canView: true };
let permission2 = { canEdit: true };

Object.assign(user_combine, permission1, permission2);

console.log(user_combine)

let user_nest = {
	name: "Gk1",
	sizes: {
		height: 170,
		width: 50
		}
};

console.log(user_nest.sizes.height)


let user_this_ex = {
	name: "Gokul",
	age: 30,

	sayHi() {
	  console.log(this.name);
	}
};

user_this_ex.sayHi()

let user_ex1 = { name: "User_name" };
let admin_ex1 = { name: "Admin_name" };

function sayHiAll() {
	console.log(this.name)
}

user_ex1.f = sayHiAll;
admin_ex1.f = sayHiAll;

user_ex1.f();
admin_ex1.f();

admin_ex1['f']();


function User(name) {
	this.name = name;
	this.isAdmin = false;
 }
 
 let user_new_construct = new User("gk")
 console.log(user_new_construct)

 let user_func_obj = new function() {
	this.name = "Gk func object";
	this.isAdmin = false;
 }
 
 console.log(user_func_obj)

 function Calculator() {
	this.sum = function() {
		this.a = +prompt('a?', 0);
    	this.b = +prompt('b?', 0);
		console.log(this.a + this.b)
	}
 }

 let calculator = new Calculator();
//  calculator.read()

let userAdmincheck = {
	admin() {
	console.log("i am chaining check admin")
	return 5
	}
	
  };
  
  let userGuest = {}
  userAdmincheck.admin?.();
  userGuest.admin?.();
  userGuest.admin;
  console.log(userGuest.admin?.(), userGuest.admin)
  console.log(userAdmincheck.admin?.())


  let num1 = 255;
  console.log("num to str", num1.toString(),  typeof(num1))
  num1.toString()
  console.log(typeof(num1))
  //Rounding
  let num2 = 1.234
  console.log("round", Math.round(num2*100) / 100);
  console.log("round2", num2.toFixed(1));
  
  let sum_int = 0.1 + 0.2;
  console.log(sum_int.toFixed(2));
  console.log(sum_int.toFixed(5));

  let imt_num3 =  "45"
  console.log(typeof(imt_num3), isFinite(imt_num3), typeof(isFinite(imt_num3)))
  isFinite(imt_num3)
  console.log(typeof(imt_num3), imt_num3)


  let str_value = "gokul length"
console.log("str length", str_value.length)

arr_each = ["gk1", "gk2", "gk3", "gk4"]

arr_each.forEach((item, index, array) => {
	console.log(`${item} and ${index} and ${array}`)
})


let user_arr = [
	{ id:1, name: "gk1"},
	{ id:2, name: "gk2"},
	{ id:3, name: "gk3"}
   ];
   
   let user_find = user_arr.find(item => item.id == 1);
   console.log(user_find)

   let lengths = ["len1", "len2", "len3"].map(item => item.length)
   console.log(lengths)

   let map_test = new Map();

map_test.set('1', 'str1');
map_test.set(1,'num1');

console.log(map_test)

let receipMap = new Map([
	['Carrot', 500],
	['Tomato', 250],
	['Onion', 150]
   ]);
   
   for (let vegetable of receipMap.keys()){
	   console.log(vegetable)
   }
   
   for (let amount of receipMap.values()) {
	   console.log(amount)
   }
   
   for (let entryVal of receipMap) {
	   console.log(entryVal)
   }


   let set_test = new Set()

let gk1 = { name: "gk1" }
let gk2 = { name: "gk2" }
let gk3 = { name: "gk3" }

set_test.add(gk1)
set_test.add(gk2)
set_test.add(gk3)
set_test.add(gk1)

console.log(set_test)

for (let set_name of set_test) {
	console.log(set_name.name)
   }

let student_json = {
	name: 'Gokul',
	age: 26,
	isAdmin: false,
	course: ['html', 'css', 'js'],
	spouse:null
 };
 console.log(student_json)
 console.log(typeof(student_json))
 let json_stu = JSON.stringify(student_json);
 console.log(json_stu)
 console.log(typeof(json_stu))