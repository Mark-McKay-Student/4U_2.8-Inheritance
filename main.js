/**
 * ICS4U - Mr. Brash
 *
 * 2.8 - Inheritance & Super! 🦸🏻
 *
 * Read the README.md file (right-click it and select Open Preview)
 *
 * Author: Mark McKay
 */

/* "use strict"; */

// The lib.round() function is available
const lib = require("./library.js");

class BankAccount {
  nickname = "My Account";
  #type = "Account";
  #balance = 0;

  constructor(type, nickname, balance) {
    this.#type = type;
    this.nickname = nickname;
    this.#balance = balance;
  }

  get type() {
    return this.#type;
  }

  get balance() {
    return this.#balance;
  }

  debit(amt) {
    if (amt < 0 || amt > this.#balance) return false;
    this.#balance -= lib.round(amt, 2);
    return true;
  }

  credit(amt) {
    if (amt < 0) return false;
    this.#balance += lib.round(amt, 2);
    return true;
  }
}

class SavingsAccount extends BankAccount {
  #type = "Savings Account";
  #interest_rate = 0.03;

  constructor() {
    super("Savings Account", "Basic Savings", 0);
  }

  get balance() {
    return super.balance;
  }

  get interest_rate() {
    return this.#interest_rate;
  }

  set interest_rate(new_value) {
    if (new_value > 0 && new_value < 1) this.#interest_rate = new_value;
    return this.#interest_rate;
  }

  apply_interest() {
    this.credit(super.balance * this.#interest_rate);
    return super.balance;
  }
}

class CheckingAccount extends BankAccount {
  #transaction_fee = 0.5;

  constructor() {
    super("Checking Account", "Classic Checking", 0);
  }

  get transaction_fee() {
    return this.#transaction_fee;
  }

  set transaction_fee(new_transaction_fee) {
    if (new_transaction_fee > 0.01 && new_transaction_fee < 2)
      this.#transaction_fee = new_transaction_fee;
    return this.#transaction_fee;
  }

  debit(amt) {
    if (amt < 0 || amt > super.balance) return false;
    super.debit(lib.round(amt, 2));
    super.debit(this.#transaction_fee);
    return true;
  }

  credit(amt) {
    if (amt < 0) return false;
    super.credit(lib.round(amt, 2));
    super.debit(this.#transaction_fee);
    return true;
  }
}
