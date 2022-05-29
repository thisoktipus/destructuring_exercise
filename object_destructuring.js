const teaOrder = {
  variety: "oolong",
  teaName: "winter sprout",
  origin: "taiwan",
  price: "12.99",
  hasCaffeine: true,
  quantity: 3,
};

const price = teaOrder.price;
const quantity = teaOrder.quantity;
const teaName = teaOrder.teaName;

//----------//

const { price, quantity, teaName } = teaOrder;
const { origin, price, hasCaffeine } = teaOrder;

//rest//

const { price, quantity, teaName, ...others } = teaOrder;


