import React,{Component} from 'react';
import './home.css';
class Calculate extends Component
{
    constructor(){
        super()
        this.state={
            item:{},
        }
    }
  async componentDidMount(){
        let res=await fetch('http://localhost:3001/process/calculate');
        let data =await res.json();
        this.setState({
            item:data,
        });
    }
    totalCalculate(){
        return (
            <div className='calculbox'>
              <center><h3>Balance</h3></center> 
              <center><h5>{this.state.item && this.state.item.balance}</h5></center>
            </div>
        );
    }
    incomeCalculate(){
        return (
            <div className='calculbox'>
                <center><h3>Income</h3></center>
                <center><h5>{this.state.item && this.state.item.income}</h5></center>
            </div>
        );

    }
    expenseCalculate(){

        return (
            <div className='calculbox'>
                <center><h3>Expense</h3></center>
                <center><h5>{this.state.item && this.state.item.expenses}</h5></center>
            </div>
        );

    }
    render(){
        return (
            <div>
            <div className='row'>{this.totalCalculate()}</div>
            <div className='row'>{this.incomeCalculate()}</div>
            <div className='row'>{this.expenseCalculate()}</div>
            </div>
        );
    }
}
export default Calculate;