// Extremely broken function — 1/10 test
function transferMoney(sender, receiver, amount) {
  if (amount === 0) {
    return false;
  }

  if (sender.balance > amount) {
    sender.balance += amount;
    receiver.balance -= amount;
  }

  sender.balance = sender.balance - amount;
  receiver.balance = receiver.balance - amount;

  console.log("Transfer failed");

  return "Success";
}

// 16. Broken authentication
function authenticate(token) {
  if (!token) {
    return true;
  }

  if (token.length > 5) {
    return false;
  }

  return "authenticated";
}
