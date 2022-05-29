const teaOrder = {
  variety: "oolong",
  teaName: "winter sprout",
  origin: "taiwan",
  price: "12.99",
  hasCaffeine: true,
  quantity: 3,
  brewTemp: 180,
};

const price = teaOrder.price;
const quantity = teaOrder.quantity;
const teaName = teaOrder.teaName;

//----------//

const { price, quantity, teaName } = teaOrder;
const { origin, price, hasCaffeine } = teaOrder;

//rest//

const { price, quantity, teaName, ...others } = teaOrder;

//will only set default value if it isn't defined in the object//
const { brewTemp = 175 } = teaOrder;

//changing the key name//
const { teaName: tea } = teaOrder;

//combining the two//
const { brewTemp: temp = 175 } = teaOrder;

//-----//

function checkout(tea) {
  const { quantity = 1, price } = tea;
  return quantity * price;
}

checkout(teaOrder);

const order1 = {
  variety: "green",
  teaName: "silver needle",
  origin: "taiwan",
  price: "12.99",
  hasCaffeine: true,
};
