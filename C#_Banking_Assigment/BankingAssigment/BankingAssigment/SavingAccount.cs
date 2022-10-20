﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankingAssigment
{
    internal class SavingAccount : Account
    {
        double balance;


        public override void Deposit(double amount)
        {
            Console.WriteLine("Your current balance is {0}", balance);
            if (amount > 500)
            {
                balance = balance + amount;
                Console.WriteLine("Thank you for deposite your total balance is {0}", balance);
            }
            else
            {
                Console.WriteLine("Deposite must be greater than 500");
            }
        }
        public void Withdraw(double amount)
        {
            if (balance < amount)
            {
                Console.WriteLine(" Insufficient balance ");
            }
            else
            {
                balance -= amount;
                Console.WriteLine("your total balance is {0}", balance);
            }
        }
        public double Balance { get { return balance; } }
    }
}
