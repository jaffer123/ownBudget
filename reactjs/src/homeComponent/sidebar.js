import React ,{Component} from 'react';
import './home.css';
import Button from 'react-bootstrap/Button';
import Income from './income';
import Expenses from './expenses';

class SideBar extends Component{

    constructor(props) {
        super(props);
        this.state = {isIncomeTab:true};
        this.renderTab = this.renderTab.bind(this);
    }
    renderTab() {
        this.setState({isIncomeTab:!this.state.isIncomeTab})
        console.log("this is check button clicked")
    }
    buttonView(){
        return (
            <div className='homebox'>
                <div className='row'>
                    <div className='col-sm-5 incomebutton'>
                        <Button className='btn btn-success buttonsize' onClick={this.renderTab} size="lg">
                            Income
                         </Button>
                    </div>
                    <div className='col-sm-5 expensebutton'>
                    <Button className='btn btn-danger' onClick={this.renderTab} size="lg">
                       Expenses
                    </Button>
                    </div>
                </div>
                <div>
                {this.state.isIncomeTab &&
                  <Income />  }
                 { !this.state.isIncomeTab && <Expenses /> }
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