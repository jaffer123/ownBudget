import React,{Component} from 'react';
import Calculate from './calculate';
import SideBar from './sidebar';

class Home extends Component
{
    render(){
        return(
            <div>
                <hr/>
                <div className='row'>
                    <div className='col-sm-3'>
                    <SideBar />
                    </div>
                    <div className='col-sm-6'>

                    </div>
                    <div className='col-sm-3'>
                    <Calculate />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;