enum Subscription {
  Free,
  Standart,
  Premium,
  VIP,
}

enum SubscriptionWithValue {
  Free = 'Free',
  Standart = 'Standart',
  Premium = 'Premium',
  VIP = 'VIP',
}

const sub = Subscription.Standart;
const subWithValue = Subscription[sub];
const sub2 = SubscriptionWithValue.Premium;

console.log(sub); // = 1
console.log(subWithValue); // = Standart
console.log(sub2); //Premium
