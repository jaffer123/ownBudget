import React, { Component } from 'react';
import m1 from '../../public/1.png';
// import m2 from '../../public/m2.jpeg';
// import m3 from '../../public/m3.jpeg';
// import m4 from '../../public/m4.jpeg';

class Rightside extends Component {
  
 Rightside(){
     const img =[ 
     {'id':1,'img':m1 },
    //  {'id':2,'img':m2 },
    //  {'id':3,'img':m3 },
    //  {'id':4,'img':m4 }
    ];
      return (
          <div>
               {img.map(item => (
                <img src={item.img} alt={item.id} />
               ))}
          </div>
      )
  }
  render() {
    return (
      <div> {this.Rightside()} </div>
    );
  }
}

export default Rightside;
