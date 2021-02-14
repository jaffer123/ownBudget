import React,{Component} from 'react';

class Income extends Component
{
  constructor(){
    super();
    this.state={
        sourcename:'',
        amount:'',
        type:'1',
        description:'',
    }
  }

  handleChange=(event)=>{
    var n=event.target.name;
    var v=event.target.value;
    this.setState({
      [n] :v
    });

    console.log(this.state);
  }
   submitIncome=async (event)=>{

    let url = 'http://localhost:3001/process/income';
    let data = this.state;
    await fetch(url,{ 
              method :'post', 
              mode :'cors',
              headers:{
                'Accept':'application/json',
                'content-type':'application/json'
              },
              body: JSON.stringify(data),
              });
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
                {this.incomeForm()}
            </div>
        );
    }
}
export default Income;