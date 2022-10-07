// a function to call API to get the search result for this
const getData = function (searchText) {
  console.log("fetching data...", searchText);
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    const searchText = event.target.value;
    const context = this;
    const argv = [searchText];
    clearTimeout(timer);
    timer = setTimeout(() => {
      // fn.call(this, searchText)
      // fn.call(contex, searchText)
      // fn.apply(this, argv)
      fn.apply(context, argv);
    }, delay);
  };
};

const methodToBeUsed = debounce(getData, 500);

// Que: Find smallest missing number
function smallestMissingNumber(arr, start, end) {
  if (start > end) {
    return start;
  }
  let mid = start + Math.floor((start + end) / 2);
  console.log(mid, arr[mid]);
  if (mid == arr[mid]) {
    return smallestMissingNumber(arr, mid + 1, end);
  } else {
    return smallestMissingNumber(arr, start, mid - 1);
  }
}

// console.log(smallestMissingNumber([2, 5, 5, 5, 6, 6, 8, 9, 9, 9]))
// console.log(smallestMissingNumber([0, 1, 2, 3, 4, 5, 6], 0, 6))

var v = 1;
var f1 = function () {
  console.log("LOGGED", v);
};
var f2 = function () {
  let agent;
  console.log("LOGGED BEFORE", v);
  var v = 2;
  console.log("LOGGED AFTER", v);

  f1();
};

f2();

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person1 = new Person("Mark", 25);
var person3 = Person("Mark", 25);
var person2 = { nationality: "Australian" };

Object.setPrototypeOf(person1, person2);
// Object.setPrototypeOf(Person, person2)

console.log("person1.nationality", person1.nationality);
console.log("person1.constructor.nationality", person1.constructor.nationality);

console.log(" person1.prototype", person1.prototype);
console.log(" person1.__proto__", person1.__proto__);

console.log("person2.__proto__", person2.__proto__);

console.log("person2.prototype", person2.prototype);

console.log("Person.prototype", Person.prototype);

console.log("Person.__proto__", Person.__proto__);

var outerFunction = function () {
  if (true) {
    var x = 10;
    //console.log(y); //line 1, ReferenceError: y not defined
  }
  console.log("ouside if block", x);
  var nestedFunction = function () {
    if (true) {
      var y = 7;
      console.log(x); //line 2, x will still be known prints 5
    }

    if (true) {
      console.log(y); //line 3, prints 7
    }
  };
  return nestedFunction;
};

var myFunction = outerFunction();
myFunction();

function fn() {}
fn();

for (let i = 0; i < 10; i += 2) {
  console.log("PRINT", i);
  //   return i;
}
