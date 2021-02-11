import React ,{Component} from 'react';
import './home.css';
import Button from 'react-bootstrap/Button';
import Income from './income';

class SideBar extends Component{

    buttonView(){
        return (
            <div className='homebox'>
                <div className='row'>
                    <div className='col-sm-5 incomebutton'>
                        <Button className='btn btn-success buttonsize' size="lg">
                            Income
                         </Button>
                    </div>
                    <div className='col-sm-5 expensebutton'>
                    <Button className='btn btn-danger' size="lg">
                       Expenses
                    </Button>
                    </div>
                </div>
                <div>
                  <Income/>  
                </div>
            </div>
        );
    }

    render(){
        return (
            <div>
                {this.buttonView()}
            </div>
        );

    }
}
export default SideBar;