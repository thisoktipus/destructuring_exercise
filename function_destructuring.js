const order2 = {
  variety: "green",
  teaName: "silver needle",
  origin: "taiwan",
  price: 12.99,
  hasCaffeine: true,
  quantity: 4,
};

//setting default value to 1 and changing to qty.//
function getTotal({ quantity: qty = 1, price }) {
  return qty * price;
}

//------//

const longJumpResults = ["tammy", "jessica", "violet"];
const swimMeetResults = ["japan", "france", "chile"];

function awardMedals([gold, silver, bronze]) {
  return { gold, silver, bronze };
}
