import React, {Component} from "react"
import API from "../utils/API.js"
import FriendProfileModal from "./FriendProfileModal.js"


class FriendCard extends Component{

    state={
        friends:[],
    
    }

    componentDidMount=()=>{
        API.getFriends()
        .then(res=>{
            this.setState({friends:res.data.results})
        })
    }

    

    render(){
        return(
            <div className='card'>
            <div className='card-header text-center'>
            <h2 style={{textDecoration:"underline"}}>Friends:</h2>
            </div>
            <div className='card-body'>
            <div className='row'>
            {this.state.friends.map(f=>(
                <div key={f.id.value} className='col-md-4'>
                <img src={f.picture.medium}/>
                <p>{f.name.first}</p>
             
                <FriendProfileModal opacity={this.state.opacity} 
                                      name={f.name.first}
                                      last={f.name.last}
                                      email={f.email}/>
                </div>
            ))}
            </div>
            </div>
            </div>
        )
    }
}

export default FriendCard