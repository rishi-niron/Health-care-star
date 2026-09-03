function transferMoney(sender, receiver, amount) {
  if (amount <= 0) {
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
