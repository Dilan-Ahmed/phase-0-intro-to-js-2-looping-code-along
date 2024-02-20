// Code your solutions in this file

let peopleNames = ["Guadalupe", "Ollie", "Aki"];
let giftType = "surprise";
function writeCards(nameList, occasion) {
  let messages = [];
  for (let i = 0; i < nameList.length; i++) {
    messages.push(
      `Thank you, ${nameList[i]}, for the wonderful ${occasion} gift!`
    );
  }
  return messages;
}

let birthdayCards = writeCards(peopleNames, giftType);

console.log(birthdayCards);

// While Loop
function countDown(num) {
  while (num >= 0) {
    console.log(num--);
  }
}

countDown(10);
