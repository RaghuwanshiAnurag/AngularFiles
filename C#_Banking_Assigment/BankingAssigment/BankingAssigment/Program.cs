﻿using BankingAssigment;
using System.Runtime.Intrinsics.Arm;
using System.Security.Principal;

namespace BankingAssignment
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to YONO Bank");
            Console.WriteLine("For Creating New Account Press 1");
            Console.WriteLine("Exit Press 2");
            int option = Convert.ToInt32(Console.ReadLine());
            if (option == 1)
            {
                Console.WriteLine("Select Account type");
                Console.WriteLine("1.Saving Account");
                Console.WriteLine("2.Current Account");
                int acctype = Convert.ToInt32(Console.ReadLine());
                Account s = new Account();
                if (acctype == 1)
                {
                    SavingAccount s2 = new SavingAccount();  // here runtime we have to use doubt concept
                    s.setType("saving");
                    s.createAccount();
                    if (s.age < 68)
                    {
                        Console.WriteLine("Enter amount you want to Deposite");
                        s2.Deposit(Convert.ToInt32(Console.ReadLine()));

                        Console.WriteLine("Enter amount you want to withdraw Your money");
                        s2.Withdraw(Convert.ToInt32(Console.ReadLine()));


                        Console.WriteLine("Enter account no to get details");
                        s.accountDetials((Console.ReadLine()));
                    }
                    else
                    {
                        Console.WriteLine("sorry you are not eligible to create account");
                    }
                }
                else if (acctype == 2)
                {
                    s.setType("current");
                    s.createAccount();

                    CurrentAccount s2 = new CurrentAccount();  //doubt concept
                    if (s.age < 68)
                    {
                        Console.WriteLine("Enter amount you want to Deposite");
                        s2.Deposit(Convert.ToInt32(Console.ReadLine()));

                        Console.WriteLine("Enter amount you want to withdraw Your money");
                        s2.Withdraw(Convert.ToInt32(Console.ReadLine()));

                        Console.WriteLine("Enter account no to get details");
                        s.accountDetials((Console.ReadLine()));
                    }
                    else
                    {
                        Console.WriteLine("sorry you are not eligible to create account");
                    }
                }
                else
                {
                    Console.WriteLine("You enter wrong number");
                }
            }
            else if (option == 2)
            {
                Console.WriteLine("Exit");
            }
        }
    }
}
