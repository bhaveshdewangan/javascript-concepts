// const callMeHoney = function (callerPlace, calleePlace) {
//     console.log(
//         "caller ", this.caller,
//         "from ", callerPlace,
//         " called his lover ",
//         this.callee, "staying in ",
//         calleePlace, " in US");
// }

// telephone = {
//     caller: 'John',
//     callee: 'Anne'
// }
// callMeHoney.apply(telephone, ['boston', 'raleigh']);
// callMeHoney.call(telephone, 'boston', 'raleigh');
// const callMeFn = callMeHoney.bind(telephone, 'boston', 'raleigh');
// callMeFn();

// // writing bind polyfills
// Function.prototype.myBind = function (...args) { //telephone, callerPlace, calleePlace can use direct instead of args
//     const callingFunctionContext = this;
//     return function (...args2) {
//         callingFunctionContext.apply(args[0], args2)
//     }

// }

// const callMeMyBindFn = callMeHoney.myBind(telephone)
// callMeMyBindFn('boston', 'raleigh');

// function getMax(arr) {
//     return Math.max.apply(null, arr);
// }

// console.log(getMax([1, 4, -5, 8]))

// function Greeter(name) {
//     console.info('begin constructor');
//     console.log("Greeter THIS", this);
//     console.log("Greeter ARGUMENTS", arguments);
//     this.name = name;
//     var myName = name;
//     var x = 0
//     console.info('end constructor')
//     this.create = function () {
//         console.log(++x);
//     }
//     Greeter.prototype.createFn = function () {
//         console.log(++x);
//     }
// }

function Incremental(name) {
    console.log(this);
    console.log(arguments);
    var x = 0
    let y = 0
    Incremental.prototype.incrementalFnProto = function () {
        console.log(x++);
        console.log(y++);
    }
    return function incrementalFn() {
        console.log(x++);
        console.log(y++);
    }
}

function sayHello() {
    // var grtr = new Greeter('Bhavesh');
    // grtr.createFn();
    // grtr.createFn();
    // grtr.createFn();
    // console.log('hello ', grtr);
    // grtr.create();
    // console.log('hello ', grtr);

    var incre = Incremental('BHAU')
    var incre1 = new Incremental('BHAU')
    console.log(incre1, typeof incre, typeof incre1)
    console.log(incre.__proto__.__proto__,incre1.__proto__.__proto__)
    incre()
    incre()
    incre()
    incre1();
    incre1();
}
sayHello()

// // BALANCED PARATHESIS CODE
// function checkBalancedParanthesis() {
//     checkBalancedParanthesis.prototype.fn1 = function () {
//         let stack = [];
//         for (let i = 0; i < str.length; i++) {
//             if (str.charAt(i) == '(' || str.charAt(i) == '{' || str.charAt(i) == '[') {
//                 stack.push(str.charAt(i))
//             } else if (stack.length > 0 && ((stack[stack.length - 1] == '(' && str.charAt(i) == ')')
//                 || (stack[stack.length - 1] == '{' && str.charAt(i) == '}')
//                 || (stack[stack.length - 1] == '[' && str.charAt(i) == ']'))) {
//                 stack.pop();
//             } else {
//                 return false
//             }
//         }
//         console.log("STACK fn1", stack);
//         return stack.length === 0;
//     }
//     checkBalancedParanthesis.prototype.fn2 = function () {
//         var bracket = {
//             '(': ')',
//             '{': '}',
//             "[": ']'
//         }
//         let stack = [];
//         for (let char of str) {
//             if (bracket[char]) {
//                 stack.push(char)
//             } else if (stack.length > 0 && bracket[stack[stack.length - 1]] === char) {
//                 stack.pop()
//             } else {
//                 return false
//             }
//         }
//         console.log("STACK fn2", stack)
//         return stack.length === 0;
//     }
// }

// function evaluation() {
//     var operator = {
//         '+': '+',
//         '*': '*',
//         '-': '-',
//         '/': '/'
//     }
//     evaluation.prototype.postfix = function () {
//         let stack = [];
//         for (let char of postfix) {
//             if (!operator[char]) {
//                 stack.push(Number(char))
//             } else if (stack.length >= 2 && operator[char]) {
//                 let operand_2 = stack.pop()
//                 let operand_1 = stack.pop()
//                 switch (char) {
//                     case '+':
//                         stack.push(operand_1 + operand_2)
//                         break;
//                     case '-':
//                         stack.push(operand_1 - operand_2)
//                         break;
//                     case '*':
//                         stack.push(operand_1 * operand_2)
//                         break;
//                     case '/':
//                         stack.push(operand_1 / operand_2)
//                         break;
//                 }
//             } else {
//                 return false
//             }
//         }
//         console.log("STACK POSTFIX", stack);
//         return status[0];
//     }
//     evaluation.prototype.prefix = function () {
//         let stack = [];
//         for (let char of prefix.split('').reverse()) {
//             if (!operator[char]) {
//                 stack.push(Number(char))
//             } else if (stack.length >= 2 && operator[char]) {
//                 let operand_1 = stack.pop()
//                 let operand_2 = stack.pop()
//                 switch (char) {
//                     case '+':
//                         stack.push(operand_1 + operand_2)
//                         break;
//                     case '-':
//                         stack.push(operand_1 - operand_2)
//                         break;
//                     case '*':
//                         stack.push(operand_1 * operand_2)
//                         break;
//                     case '/':
//                         stack.push(operand_1 / operand_2)
//                         break;
//                 }
//             } else {
//                 return false
//             }
//         }
//         console.log("STACK PREFIX", stack);
//         return status[0];
//     }
// }

// var str = "{()}[]{";
// // console.log(new checkBalancedParanthesis().fn1());
// // console.log(new checkBalancedParanthesis().fn2());

// var postfix = '23*54*+9-';
// var prefix = '-+*23*549'
// // console.log(new evaluation().postfix())
// // console.log(new evaluation().prefix())


// b.prototype = Object.create(a.prototype)

// function a(name, age) {
//     this.age =age;
//     this.name =name;

//     this.display = function() {
//         console.log('name ', this.name, 'age ', this.age);
//     };

// }
// a.prototype.displayFn = function(){
//     console.log('name ', this.name, 'age ', this.age);
// }

// function b(name, age, address) {
//     a.apply(this, [name, age])
//     this.address = address;
// }

// let me = new a('bhavesh', 28);
// let you = new b('yusuf', 28, 'pune')

// me.display();
// you.display()

// me.displayFn();
// you.displayFn()

let a = [1, 2]

console.log(a instanceof Array)
console.log(a.constructor === Array, a.constructor)
console.log(Array.isArray(a))
// console.log(a.prototype.toString,a.prototype.toString === '[object Array]')
console.log(({}).toString, ({}).toString.call(a))


const foo = {
    num: 1,
    toString: function() {
        return foo.num++
    }
}

if(foo == 1 && foo == 2 && foo == 3){
    console.log('foo ass', foo);
}


if(foo == 1 && foo == 2){
  console.log('foo ass 2', foo);
}

const bar = {
  num: 1,
  toString: function () {
    // return this;
    return () => this;
  }
}
console.log(bar.toString()() == bar);

if (bar.toString() == bar) {
  console.log('bar ass');
}

function getPartitionIndex(start, end, arr) {
  console.log('abc')
  let pivot = arr[end];
  let pIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      let temp = arr[i];
      arr[i] = arr[pIndex]
      arr[pIndex] = temp;
      pIndex++
    }
  }
  let temp = arr[pIndex];
  arr[pIndex] = pivot;
  pivot = temp;
  console.log("GET PARTU",arr, pIndex);
  return pIndex;
}
// getPartitionIndex(0, 5, [6, 5, 8, 4, 9, 7])


 function deepClone(object){
	var newObject = {};
	for(var key in object){
		// if(typeof object[key] === 'object'  && object[key] !== null ){
		//  newObject[key] = deepClone(object[key]);
		// }else{
		 newObject[key] = object[key];
		// }
	}
	return newObject;
}
var personalDetail = {
	name : 'Nishant',
	address : {
	  location: 'xyz',
	  zip : '123456',
	  phoneNumber : {
	    homePhone: 8797912345,
	    workPhone : 1234509876
	  }
	}
}
 var newObject = deepClone(personalDetail);
 newObject.address.location = 'abc';
 newObject.name = 'Bhaveh'
//  console.log(personalDetail, newObject)
