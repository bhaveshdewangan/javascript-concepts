// Recursive function currying and closure concept
let sum = function (a) {
  return function (b) {
    // console.log(a,b);
    if (b) return sum(a + b);
    else return a;
  };
};
sum(1)(2)(3)(4)();

// Recursive programming to flattan the object
const user = {
  name: "Bhavesh",
  lastName: "Dewangan",
  address: {
    stats: "Chattisgarh",
    city: "Bilaspur",
    area: {
      colony: "Vidyanagar",
      houseNumber: "24/7",
      houseName: "Villa",
    },
    pin: 495001,
  },
};

let flatObject = new Object();
const getFlattanObject = function (object, parent) {
  for (const [key, value] of Object.entries(object)) {
    if (typeof value != "object") {
      flatObject[parent + "_" + key] = value;
    } else {
      getFlattanObject(value, parent + "_" + key);
    }
  }
};
getFlattanObject(user, "user");
console.log(flatObject);
