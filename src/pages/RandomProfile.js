import React, {Component} from "react"
import Header from "../components/Header.js"
import Navbar from "../components/Navbar.js"
import API from "../utils/API"
import SearchForm from "../components/SearchForm.js"



class RandomProfile extends Component{
    
    state={
        loaded:false,
        info:{},
        opacity:0,
        disabled:true,
        congrats:"",
        likes:0,
    }

    renderLikes=()=>{
        return this.state.likes === 0 ? null : <h3>Likes:{this.state.likes}</h3>
    }

    componentDidMount=()=>{
        API.getRandomProfile()
        .then(res=>{
            console.log(res.data.results)
            this.setState({loaded:true,
                            info:res.data.results})
        })
    }

    likePerson=()=>{
        var likeYouBack=Math.floor(Math.random()*5)
        if(likeYouBack === 3 || likeYouBack === 2){
            console.log("lucky dog, they like you back!")
            this.setState({disabled:false,
                           likes:this.state.likes+1,
                           congrats:"Lucky dog!! They like you back!"})
                           setTimeout(()=>{
                               this.setState({congrats:""})
                           },3000)
        }
        else{
            this.componentDidMount()
        }
        
    }

    nextPerson=()=>{
        this.componentDidMount()
    }

    moreinfo=()=>{
        this.setState({opacity:1})
    }

    handleClose=()=>{
        this.setState({opacity:0})
    }



    render(){
        if(!this.state.loaded){
            return "waiting for data"
        }
        return(
            <React.Fragment>
            <Header>Swipe for Likes</Header>
            <Navbar/>
            <SearchForm/>
            <div className='container'>
            <div className='row'>
            
            <div className='col-md-4'>
            <img style={{height:"300px"}} src={this.state.info[0].picture.large}/>
            </div>
            
            <div className='col-md-8'>
            <div className='card-body'>
            <h3>
                <ul className='list-group'>
           <li className='list-group-item'> Name:{`${this.state.info[0].name.first} ${this.state.info[0].name.last}`} </li>
           <li className='list-group-item'> Age:{`${this.state.info[0].dob.age}`} </li>
           <li className='list-group-item'> City:{`${this.state.info[0].location.city}`} </li>
           </ul>
            </h3>
            <div className='card-body btn container'>
            <div className='row'>
            <div className='col-md-6'>
            <button className='btn btn-success mr-3' data-value="like" onClick={this.likePerson}>Like</button>
            </div>
            <div className='col-md-6'>
            <button className='btn btn-danger ml-3' data-value="next" onClick={this.nextPerson}>Next</button>
            </div>
            </div>
            <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
            {this.state.congrats}
            </div>
            <div className='col-md-3'></div>

            <div className='col-md-12'>
            <button disabled={this.state.disabled} className='btn btn-dark ml-3' data-value="moreinfo" onClick={this.moreinfo}>More Info</button>
            </div>
            <div style={{width:"50%",margin:"auto"}}>
         {this.renderLikes()}
         </div>
            </div>
          
            </div>
           </div>
          </div>
        
          <div style={{width:"50%",margin:"auto", opacity:this.state.opacity}}>
          <div className='card'>
          
          <div className='card-header'>
             <h3> Persons Info </h3><span className='badge badge-danger float-right mr-2' onClick={this.handleClose}>&times;</span>
            </div>
            <div className='card-body'>
            <p>Email:<strong>{`${this.state.info[0].email}`}</strong></p>
            <p>Phone:<strong>{`${this.state.info[0].phone}`}</strong></p>
            <p>DOB:<strong>{`${this.state.info[0].dob.date}`}</strong></p>
            <p>Registered:<strong>{`${this.state.info[0].registered.date}`}</strong></p>
            </div>
            </div>
            </div>
            
            
            </div>
            </div>
           
            </React.Fragment>
        )
    }
}


export default RandomProfile;