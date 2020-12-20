// Create a shopping list in the variable myList.
const myList = [
    ["Macbook Pro 2020", 2 ],
    ["Iphone 12 Pro", 1 ],
    ["Nikes Airforce", 3 ],
    ["Beats by Dr. Dre", 2 ],
    ["Sony - PlayStation 5", 4 ]
];

// remove the first and last elements in the myList array and save them in another array in the same order
const ar1 = myList.shift();
const ar2 = myList.pop();
const newList = ar1.concat(ar2);
console.log(newList);

// replace the 3rd element in the myList Array with [“Orange Juice”, 17]
const ar3 = myList.splice(2, 1,["Orange", 17]);
//console.log(ar3);
console.log(myList);

/* Loop through the myList Array and print an object to the console
 using the first element of each sub-array as the key and the second element as the value of the object */

for (const key in myList) {
    if (myList.hasOwnProperty(key)) {
        const element = myList[key];
        console.log(element[0], element[1])
    }
}

