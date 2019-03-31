import React from "react"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import FriendCard from "../components/FriendCard"



const MemberProfile = props => (
    <React.Fragment>
        <Header>
        {props.values.name !== "" ? `${props.values.name} ${props.values.lastname} 's profile` : "Anonymous's Profile"} 
        </Header>
        <Navbar/>
    <div style={{width:"50%",margin:"auto"}}>
    <div className='card'>
  
    <div className='card-body'>
    <h4>
    <li className='list-group-item'>
    Age:{props.values.age}
    </li>
    <li className='list-group-item'>
    City:{props.values.city}
    </li>
    <li className='list-group-item'>
    Fav Movie:{props.values.favmovie}
    </li>
    <li className='list-group-item'>
    Favorite Dog Breed:{props.values.favdogbreed}
    </li>
    <li className='list-group-item'>
    Favorite Music: {props.values.favmusic}
    </li>
    </h4>
    </div>
    </div>
    </div>
    <div className='row'>
    <div className='col-md-4'>
    <FriendCard/>
    </div>
    <div className='col-md-8'>
    </div>
    </div>
    </React.Fragment>

)

export default MemberProfile