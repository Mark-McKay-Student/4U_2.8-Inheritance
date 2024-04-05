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

  get type() {
    return this.#type;
  }

  get balance() {
    return this.#balance;
  }

  debit(amt) {
    if (amt < 0 || amt > this.#balance) return 0;
    this.#balance -= lib.round(amt, 2);
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
}

class SavingsAccount extends BankAccount {
  #interest_rate = 0.03;
  #balance = 0;

  constructor(bal) {
    super(bal);
    this.#balance = bal;
  }

  apply_interest() {
    return (this.#balance += this.#balance * this.#interest_rate);
  }

  get balance() {
    return this.#balance;
  }
}

const test = new SavingsAccount(10);
console.log(test.balance, test.apply_interest(), test.balance);
