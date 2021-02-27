import React,{Component} from 'react';
import Calculate from './calculate';
import Report from './report';
import SideBar from './sidebar';
import Header from '../layerComponent/header';
class Home extends Component
{
    render(){
        return(
            <div>
                <Header/>
                <hr/>
                <div className='row'>
                    <div className='col-sm-3'>
                    <SideBar />
                    </div>
                    <div className='col-sm-6'>
                    <Report />
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