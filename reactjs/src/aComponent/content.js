import React, { Component } from 'react';
import './a.css';
import income from '../../public/income.jpg';
import expense from '../../public/expense.jpg';
import monthly from '../../public/monthly.jpg';
class Content extends Component {
    income(){
        return (
            <div>
                <div className='row'>
                    <div className='col content-h4'><h4>Income</h4></div>
                    <div className='col'>
                    <img className='img-field' src={income} alt='income'></img>
                    </div>
                </div>
                
            <p className='content-p'>Include the income from your paychecks,
                 the income from any items you’ve sold, 
                 as well as any income from monetary gifts you’ve received, 
                 whether it’s a bonus from work or a gift. 
                 Always strive to increase your income.</p>
            </div>
        );
    }
    expenses(){
        return (
            <div>
                <div className='row'>
                    <div className='col content-h4'><h4>Expenses</h4></div>
                    <div className='col'>
                    <img className='img-field' src={expense} alt='Expenses'></img>
                    </div>
                </div>
            <p className='content-p  content-p1'>Use a notebook with lined paper and create columns for the date, 
            the amount spent, what you spent it on, and where you spent it. 
            Also include a column to note whether or not the expenditure was necessary or an impulse buy. 
            Keep all of your receipts, too. It not only helps you keep track of your spending habits, 
            but also provides you the opportunity to return items for a refund rather than a store credit. 
            You’ll also want to note your regular monthly bills, such as water, electric, phone, internet, 
            homeowner’s or renter’s insurance, food, clothing, gas, and the kids’ school expenses, etc. 
            If you have any semi-annual or annual bills, such as an HOA bill, or a car insurance payment, 
            divide the total amount by the amount of months to get the monthly amount for your budget.</p>
            </div>
        )
    }
    compare(){
        return (
            <div>
                
            <div className='row'>
                <div className='col content-h4'><h4>Monthly Expenses</h4></div>
                <div className='col'>
                <img className='img-field' src={monthly} alt='Monthly Expenses'></img>
                </div>
             </div>
             <div className='row '>
             <p className='content-p'>Once you have been keeping track of your income and your expenses for at least one month, 
                compare the totals of both. Are you spending more than you are bringing in? Or, 
                are you making more money than you are spending? Seeing your finances on paper helps you analyze your spending
                and saving habits. Is it possible to lower your expenses? 
                Do you set aside money for savings each month? Even a small amount saved will add up.</p>
            </div>
        </div>
        )
    }
    render(){
        return (
            <div className='content-main'>
                <center><h1>Make Saving Essay</h1></center>
              <div className='row'>
              <div className='col-sm-4'>
                  <div className="box">{this.income()}</div>
               </div>
               <div className='col-sm-4'>
                  <div className="box">{this.expenses()}</div>
               </div>
               <div className='col-sm-4'>
                  <div className="box">{this.compare()}</div>
               </div>
              </div>
            </div>
        );
    }
}

export default Content;