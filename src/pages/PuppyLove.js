import React, {Component} from "react"
import Header from "../components/Header.js"
import Navbar from "../components/Navbar.js"




class PuppyLove extends Component{



    render(){
        return(
            <React.Fragment>
            <Header>
                Puppy Love 
                </Header>
                <Navbar/>
                </React.Fragment>

        )
    }
}


export default PuppyLove;