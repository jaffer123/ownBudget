import React,{Component} from 'react';

class Expenses extends Component{

    constructor(){
        super();
        this.state ={
            sourcename:'',
            amount:'',
            type:'2',
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
        let url = 'http://localhost:3001/process/expense';
        let data = this.state;
         fetch(url,{
          method:"post",
          mode:'cors',
          headers:{
            'Accept':'application/json',
            'content-type':'application/json'
          },
          body:JSON.stringify(data),
        }).then(res=>{
          console.log(res);
        })
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
          <textarea name="description" className="form-control" onChange={this.handleChange} placeholder="Description(optional)" rows="4" cols="25">
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