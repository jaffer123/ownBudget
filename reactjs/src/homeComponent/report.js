import React,{Component} from 'react';

class Report extends Component
{

    reportTable(){
        return (
            <div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th><th>Source Name</th><th>Amount</th><th>Balance</th><th>Transaction At</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        );
    }
    render(){
        return (
            <div>
            <h3>Reports</h3>
            {this.reportTable()}
            </div>
        );

    }
}

export default Report;