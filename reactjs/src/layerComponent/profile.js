import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import profileImg from '../../public/profile.png';
class Profile extends Component{

    constructor(){
        super()
        this.state={
            item:{},
        }
    }

    render(){
        return (
            <div>
            <div className='row'>
                <div className='col-sm-2'>
                <td><img className='img' src={profileImg} alt='profile'/></td>
                </div>
                <div className='col-sm-5'>
                    <h8>jaffer</h8><br/>
                    <h9>jaffer@gmail.com</h9>
                </div>   
                <div className='col-sm-1'>
                <Link to={{ pathname:'/', state:{address: "logout"} }} className="btn btn-danger button">Logout</Link>
                </div>
            </div>
            </div>
        );
    }
}

export default Profile;