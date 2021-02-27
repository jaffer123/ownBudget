import React,{Component} from 'react';
import up from '../../public/up.png';
import down from '../../public/down.jpg';

class Report extends Component
{
    constructor(){
        super()
        this.state={
            item:[],
            currentPage:'1',
            postsPerPage:'10',
            isLoaded:false,
        }
    }
   async componentDidMount(){
        let url = 'http://localhost:3001/process/report';
        let res = await fetch(url);
        let data = await res.json(); 
        this.setState({
            item:data,
        });
    }
    arrow(type){
        if(type === 1){
            return (
                <img className='img-arrow' src={up} alt='up'/>
            );
        }else{
            return (
                <img className='img-arrow' src={down} alt='down'/>
            );
        }
    }
    pagination(postsPerPage,totalPosts,paginate){
        const pageNumbers =[]; 
        let j=1;
        let lastPage =Math.ceil(totalPosts/postsPerPage);
        for(let i=(this.state.currentPage)<10?1:(this.state.currentPage-5);i<lastPage;i++){
            pageNumbers.push(i);
            if(j>10){
              break;
            }
            j++;
        } 
          return (
            <nav>
            <ul className='pagination'>
                {pageNumbers.map(number =>(
                    <li key={number} className='page-item'>
                        <a onClick={()=>paginate(number)}  className='page-link'>
                            {number} 
                        </a>
                    </li>
                ))}
            
                <li><a onClick={()=>paginate(lastPage)}  className='page-link'>
                            {lastPage} 
                        </a></li>
            </ul>
        </nav>
          );
      } 
    reportValue(data){
        return data.map(dt =>(
                <tr key={dt.id}>
                    <td>{dt.id}</td><td>{dt.sourcename}</td><td>{this.arrow(dt.type)}{dt.amount}</td><td>{dt.description}</td><td>{dt.transaction_at}</td>
                </tr>
        ));
    }
    reportTable(){
        const paginate =(pageNumbers)=>this.setState({
            currentPage:pageNumbers,
        })

        const indexOfLastPost =this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const totalPost = this.state.item;
        const currentPost = totalPost.slice(indexOfFirstPost,indexOfLastPost);

        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th><th>Source Name</th><th>Amount</th><th>Balance</th><th>Transaction At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.item.length >0 && this.reportValue(currentPost)}
                    </tbody>
                </table>
                {this.state.item.length >10 && this.pagination(this.state.postsPerPage,(this.state.item).length,paginate)}
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