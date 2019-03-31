import React, {Component} from "react"
import Header from "../components/Header.js"
import Navbar from "../components/Navbar.js"
import API from "../utils/API.js"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import {List, ListItem} from "material-ui/List"



class ScrapeSite extends Component{
    state={
        articles:[],
        images:[],
        counter:0,
        loaded:false,
        site:"",
        opacity:1
    }

    pickSite=(e,index,value)=>{
        this.setState({site:value,
                       opacity:0})
        console.log(this.state.site)
        API.scrapeArticles(this.state.site,(data)=>{
            console.log('sit tight mr callback')
            this.setState({articles:data.link,
                           images:data.image,
        })
    })
    }

    onStateChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    // componentDidMount=()=>{
    //     API.scrapeArticles((data)=>{
    //         //console.log(data)
    //         this.setState({articles:data.link,
    //                        images:data.image,
    //                        loaded:true})
    //                        console.log(this.state.images)
                        
    //     })
    // }

    nextPic=()=>{
        this.setState({counter:this.state.counter+1})
        if(this.state.counter > this.state.images.length-1){
            this.setState({counter:0})
        }
    }



    render(){
      
             
        
        return(
            <MuiThemeProvider>
            <React.Fragment>
            <Header>
            Scrape Site
            </Header>
            <Navbar/>
            <div style={{opacity:this.state.opacity}} className='card text-center'>
            <div className='row'>
            <div className='col-md-5'></div>
            <div className='col-md-2'>
            <select name='site'
                    value={this.state.site}
                    onChange={this.onStateChange}>
            <option value="climbing">Rock n Ice</option>
            <option value="ny times">NyTimes</option>
            <option value='wayfair'>WayFair</option>
            </select>
            <button onClick={this.pickSite} className="btn btn-info">Pick a Site</button>
            </div>
            </div>
            <div className='col-md-5'></div>
            </div>
            <List>
             {this.state.articles.map(article=>(
              
                <ListItem key={article} primaryText={article}/>
            
               
            ))}
            <img onClick={this.nextPic} src={this.state.images[this.state.counter]}/> 
            </List>
            </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default ScrapeSite;