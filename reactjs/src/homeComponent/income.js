import React,{Component} from 'react';

class Income extends Component
{
  constructor(){
    super();
    this.state={
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
  }
  submitIncome=(event)=>{
    console.log(this.state);
  }
    incomeForm(){
        return (
            <div className="incomebox">
            <form onSubmit={this.submitIncome}> 
          <div className="form-group">
            <h3>Income</h3>
          <div className="form-group">
          	<input type="text" className="form-control" name="sourcename" placeholder="Where From?" onChange={this.handleChange} required="required"/>
          </div>
          <div className="form-group">
            <input type="number" className="form-control" name="amount" placeholder="Income Amount" onChange={this.handleChange} required="required"/>
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
                {this.incomeForm()}
            </div>
        );
    }
}
export default Income;