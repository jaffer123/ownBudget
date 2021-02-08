import  React,{Component} from 'react';
import './layer.css';
import logo from '../../public/symbol.png';

class footer extends Component{

    mainFooter(){
        return (
            <div className="main-footer">
              <div className='row'>
              <div className='col-sm-1'></div>
              <div className='col-sm-1'>
              <img className='img-footer img-filter' src={logo} alt='logo'/>
              </div>
                  <div className='col-sm-3'>
                    <h6>OUR PRIVACY GUARANTEE</h6>
                    <p>We go above and beyond to ensure your data is safe and secure with us.</p>
                  </div>
                  <div className='col-sm-2'>
                        <h6>ABOUT US</h6>
                        <a className='about-a'>WHO WE ARE</a><br/>
                        <a className='about-a'>HOW IT WORKS</a><br/>
                        <a className='about-a'>MEMBERSHIP TERMS AND CONDITIONS</a><br/>
                        <a className='about-a'>PANEL PRIVACY POLICY</a><br/>
                        <a className='about-a'>COOKIE PANAL</a><br/>
                  </div>
                  <div className='col-sm-2'>       
                        <h6>NEED HELP?</h6>
                        <a className='about-a'>Help Center</a><br/>
                  </div>
                  <div className='col-sm-3'>
                    <h6>CONNECT WITH US</h6>
                    <div className='icon_facebook'></div>
                  </div>
              </div>
            </div>
        );
    }
    endFooter(){
        return(<div className="end-footer">
          <center>Copyright © 2020 by Bill Shakespeare</center>
        </div>);
    }
    render(){
        return (
            <div>
                {this.mainFooter()}
                {this.endFooter()}
            </div>
        );
    }
}

export default footer;