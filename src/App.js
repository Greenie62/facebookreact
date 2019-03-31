import React, {Component} from "react"
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"
import Login from "./pages/Login.js"
import Home from "./pages/Home.js"
import fakeBE from "./utils/fakeBE.js"
import ScrapeSite from "./pages/ScrapeSite.js"
import RandomProfile from "./pages/RandomProfile.js"
import PuppyLove from "./pages/PuppyLove.js"
import MemberProfile from "./pages/MemberProfile.js"


class App extends Component{

    state={
        loaded:false,
        authorized:false,
          name:"",
          lastname:"",
          age:"",
          city:"",
          favmusic:"",
          favmovie:"",
          favdogbreed:""
        
    }

    componentDidMount=()=>{
        fakeBE.loadPage((data)=>{
             console.log(data)
        })
        this.setState({loaded:true})

    }

    setLogin=()=>{
        this.setState({authorized:true})
    }

    onInfoChange=(e)=>{
      this.setState({[e.target.name]:e.target.value})
    }

  


    render(){
      var {name,lastname,age, city, favmusic, favmovie, favdogbreed} = this.state;
      const values = {name,lastname,age, city, favmusic, favmovie, favdogbreed}
        if(!this.state.loaded){
            return "waiting for data"
        }
        
        return(
            <Router>
                <React.Fragment>
                  
                    <Switch>
                    <Route exact path="/login" render={(props)=><Login {...props} setLogin={this.setLogin}/>}/>
                   {!this.state.authorized ? <Redirect to="/login"/> : null }
                    <Route exact path="/home" render={()=><Home values={values} onInfoChange={this.onInfoChange}/>}/>
                    <Route exact path="/scrapesite" component={ScrapeSite}/>
                    <Route exact path="/puppylove" render={()=><PuppyLove dogbreed={values.dogbreed}/>}/>
                    <Route exact path="/randomprofile" render={()=><RandomProfile values={values}/>}/>
                     <Route exact path="/memberprofile" render={()=><MemberProfile values={values}/>}/>
                    </Switch>
                    <div className='footer text-center bg-primary mt-2'>
                    Footer &copy;
                    </div>
                </React.Fragment>
             </Router>

        )
    }
}

export default App