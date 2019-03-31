import React from "react"




const Form = (props) => (
    <div style={{width:"50%",margin:"auto"}}>
    <div className='card text-center'>
    <div className='card-header'>
    <h2>Member Info: </h2>
    </div>
    <div className='card-body text-center'>
    <label htmlFor="name">Name:</label>
    <input type='text'
            name="name"
            id="name"
            value={props.values.name}
            onChange={props.onInfoChange}
            placeholder="your_name_here"/>
            </div>
        
             </div>
            <div className='card-body'>
        <label htmlFor="lastname">Lastname:</label>
                <input type='text'
            name="lastname"
            id="lastname"
            value={props.values.lastname}
            onChange={props.onInfoChange}
            placeholder="your_lastname_here"/>
            </div>
            <div className='card-body'>
       <label htmlFor="age">Age:</label>
        <input type='text'
            name="age"
            id="age"
            value={props.values.age}
            onChange={props.onInfoChange}
            placeholder="your_age_here"/>
            </div>
            <div className='card-body'>
         <label htmlFor="city">City:</label>
        <input type='text'
            name="city"
            id="city"
            value={props.values.city}
            onChange={props.onInfoChange}
            placeholder="your_city_here"/>
            </div>
            <div className='card-body'>
         <label htmlFor="favmovie">FavMovie:</label>
        <input type='text'
            name="favmovie"
            id="favmovie"
            value={props.values.favmovie}
            onChange={props.onInfoChange}
            placeholder="your_fav_movie"/>
            </div>
            <div className='card-body'>
     <label htmlFor="favbreed">Fav Dog Breed:</label>
        <input type='text'
            name="favdogbreed"
            id="favdogbreed"
            value={props.values.favdogbreed}
            onChange={props.onInfoChange}
            placeholder="your_fav_dog"/>
            </div>
            <div className='card-body'>
                 <label htmlFor="favmusic">Favorite Music:</label>
        <input type='text'
            name="favmusic"
            id="favmusic"
            value={props.values.favmusic}
            onChange={props.onInfoChange}
            placeholder="your_fav_music"/>
            </div>
         
            </div>
            

       )

       export default Form