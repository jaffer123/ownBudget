import React,{Component} from 'react';

class Expenses extends Component{

    constructor(){
        super();
        this.state ={
            sourcename:'',
            amount:'',
            description:'',
        }
    }

    handleChange=(event)=>{
        var n=event.target.name;
        var v=event.target.value;
        this.setState({
          [n] :v
        });
        console.log(n+" "+v);
      }

      submitExpense=(event)=>{
        console.log(this.state);
        alert();
    }
    expenseForm(){
        return (
            <div className="incomebox">
            <form onSubmit={this.submitExpense}> 
          <div className="form-group">
            <h3>Expense</h3>
          <div className="form-group">
          	<input type="text" className="form-control" name="sourcename" placeholder="Where To?" onChange={this.handleChange} required="required"/>
          </div>
          <div className="form-group">
            <input type="number" className="form-control" name="amount" placeholder="Expenses Amount" onChange={this.handleChange} required="required"/>
          </div>
          <div className="form-group">
          <textarea name="description" className="form-control" placeholder="Description(optional)" rows="4" cols="25">
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          </div>
          </form>
            </div>
        );
    }
render(){
    return (
        <div>
            {this.expenseForm()}
        </div>
    );
}

}

export default Expenses;