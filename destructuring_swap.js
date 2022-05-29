let delicious = "mayonnaise";
let disgusting = "whipped cream";

let temp = delicious;
delicious = disgusting;
disgusting = temp;

let both = [delicious,disgusting];
[disgusting, delicious] = both;


[disgusting, delicious] = [delicious,disgusting];