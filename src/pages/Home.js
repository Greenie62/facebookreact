import React, {Component} from "react"
import SearchForm from "../components/SearchForm"
import API from "../utils/API"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Form from "../components/Form"




const Home =props=>(

    
        
            <div>
                <Header>
                    Home Page
                    </Header>
            <Navbar/>
           
          
            
                   <div style={{width:"50%",margin:"auto"}}>
                   <SearchForm/>
    <div className='card text-center'>
    <div className='card-header'>
    <h2>Member Info: </h2>
    </div>
    <div className='card-body text-center'>
    <label htmlFor="name">Name:</label>
    <input type='text'
            name="name"
            id="name"
            defaultValue={props.values.name}
            onChange={props.onInfoChange}
            placeholder="your_name_here"/>
            </div>
            <div className='card-body'>
        <label htmlFor="lastname">Lastname:</label>
                <input type='text'
            name="lastname"
            id="lastname"
            defaultValue={props.values.lastname}
            onChange={props.onInfoChange}
            placeholder="your_lastname_here"/>
            </div>
            <div className='card-body'>
       <label htmlFor="age">Age:</label>
        <input type='text'
            name="age"
            id="age"
            defaultValue={props.values.age}
            onChange={props.onInfoChange}
            placeholder="your_age_here"/>
            </div>
            <div className='card-body'>
         <label htmlFor="city">City:</label>
        <input type='text'
            name="city"
            id="city"
            defaultValue={props.values.city}
            onChange={props.onInfoChange}
            placeholder="your_city_here"/>
            </div>
            <div className='card-body'>
         <label htmlFor="favmovie">FavMovie:</label>
        <input type='text'
            name="favmovie"
            id="favmovie"
            defaultValue={props.values.favmovie}
            onChange={props.onInfoChange}
            placeholder="your_fav_movie"/>
            </div>
            <div className='card-body'>
     <label htmlFor="favbreed">Fav Dog Breed:</label>
        <input type='text'
            name="favdogbreed"
            id="favdogbreed"
            defaultValue={props.values.favdogbreed}
            onChange={props.onInfoChange}
            placeholder="your_fav_dog"/>
            </div>
            <div className='card-body'>
                 <label htmlFor="favmusic">Favorite Music:</label>
        <input type='text'
            name="favmusic"
            id="favmusic"
            defaultValue={props.values.favmusic}
            onChange={props.onInfoChange}
            placeholder="your_fav_music"/>
            </div>
         
            </div>
            </div> 
      
            </div>
        )



export default Home