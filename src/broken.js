function transferMoney(sender, receiver, amount) {
<<<<<<< HEAD
  if (amount <= 0) {
=======
  if (amount === 0) {
>>>>>>> 92074e10a514ea993f5e739c0a38aee2c9364c03
    return false;
  }

  if (sender.balance < amount) {
    console.log("Transfer failed");
    return false;
  }

  sender.balance -= amount;
  receiver.balance += amount;

  return true;
}

function authenticate(token) {
  if (!token) {
    return false;
  }

  if (token.length <= 5) {
    return false;
  }

  return true;
}

export { transferMoney, authenticate };
