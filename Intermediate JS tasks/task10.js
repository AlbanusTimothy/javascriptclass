// Write a program that calculates the total stock in a company from the array/list below if we know that the stock is the last digit in every array/list.

// prods = [[‘omo’,’30kshs’,’300’], [‘milk’,’50kshs’,’200’],[‘bread’,’45kshs’,’359’], [‘coffee’,’5kshs’,’79’]]

// NB: ONCE YOU COPY AND PASTE THE LIST ABOVE,REWRITE THE SINGLE QUOTES AS THE ABOVE LIST WILL GIVE YOU AN ERROR.
let prods = [
    ["omo","30kshs","300"],
    ["milk","50kshs","200"],
    ["bread","45kshs","359"],
    ["coffee","5kshs","79"]
];

let totalStock = 0;

for (let i = 0; i < prods.length; i++) {
    let lastItem = prods[i][prods[i].length - 1]; // get last element
    totalStock += Number(lastItem); // convert to number and add
}

console.log("Total stock:", totalStock);
alert("Total stock: " + totalStock);
