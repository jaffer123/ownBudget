import React,{Component} from 'react';

class Income extends Component
{
    incomeForm(){

        return (
            <div>
            <form onSubmit={this.submitForm}> 
          <div className="form-group">
          <div className="form-group">
          	<input type="text" className="form-control" name="title" placeholder="Where From?" onChange={this.handleChange} required="required"/>
          </div>
          <div className="form-group">
            <input type="number" className="form-control" name="amount" placeholder="Income Amount" onChange={this.handleChange} required="required"/>
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