// // probmen one

// function anaToVori(ana) {

//     if (typeof ana != 'number') {
//         return 'please give a valid number';

//     }

//     else if (ana == 0) {
//         return 'please give a valid number'
//     }

//     let vori = ana / 16

//     return vori;
// }

// let ana = 48

// const convertingAnaToVori = anaToVori(ana);

// console.log(convertingAnaToVori);


// // // problem two

// function pandaCost(singara, somucha, jilapi) {


//     let singaraPrice = singara * 7;

//     let somuchaPrice = somucha * 10;

//     let jilapiPrice = jilapi * 15;

//     totalPrice = singaraPrice + somuchaPrice + jilapiPrice

//     return totalPrice;

// }

// const singaraQuantity = 6;

// const somuchaQuantity = 5;

// const jilapiQuantity = 4


// const totalPandaCost = pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity);

// console.log(totalPandaCost);


// // problem three

// function picnicBudget(customer) {

//     const budgetOnePer = 5000;
//     const budgetTwoPer = 4000;
//     const budgetThreePer = 3000;

//     if (customer <= 100 && customer > 0) {
//         let firstBudget = customer * budgetOnePer;
//         return firstBudget;
//     }

//     else if (customer >= 100 && customer <= 200) {

//         let secondBudget = 500000 + ((customer - 100) * budgetTwoPer);
//         return secondBudget;
//     }

//     else if (customer > 200) {
//         let thirdBudget = (500000 + 400000) + ((customer - 200) * budgetThreePer)
//         return thirdBudget;
//     }

//     else if (typeof customer != 'number') {
//         return 'please give a valid number';

//     }

//     else if (customer == 0) {
//         return 'please give a valid number'
//     }

// }

// const totalBudget = picnicBudget(201);

// console.log(totalBudget);


// // problem four

let dost = ['kalpus', 'dablus', 'habul', 'kabul', 'dablus', 'kalpus', 'jalamtus']


function oddFriend(string = []) {

    let findLength = string.length

    for (i = 0; i < findLength; i++) {
        let nameLength = string[i].length;

        if (nameLength % 2 == 1) {
            return string[i];
        }
    }
    return string
}
let oddFriendsName = oddFriend(dost);
console.log(oddFriendsName);


// // // The End

