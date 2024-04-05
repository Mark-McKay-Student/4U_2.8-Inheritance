/**
 * ICS4U - Mr. Brash
 *
 * 2.8 - Inheritance & Super! 🦸🏻
 *
 * Read the README.md file (right-click it and select Open Preview)
 *
 * Author: Mark McKay
 */

"use strict";

// The lib.round() function is available
const lib = require("./library.js");

class BankAccount {
  nickname = "My Account";
  #type = "Account";
  #balance = 0;

  debit(amt) {
    if (amt < 0 || amt > this.#balance) return 0;
    balance -= lib.round(amt, 2);
    return 1;
  }

  credit(amt) {
    if (amt < 0) return 0;
    this.#balance += lib.round(amt, 2);
    return 1;
  }

  constructor(balance) {
    this.#balance = balance;
  }

  get type() {
    return this.#type;
  }

  get balance() {
    return this.#balance;
  }
}

class SavingsAccount {
  #interest_rate = 0.03;

  constructor(interest_rate, balance) {
    balance = super(balance);
    interest_rate = this.#interest_rate
  }

  apply_interest() {
    return (super(balance) += balance * this.#interest_rate);
  }
}
