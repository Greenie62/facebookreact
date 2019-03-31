import React, {Component} from "react"

class FriendProfileModal extends Component{
    state={
        opacity:0
    }

    toggleProfile=()=>{
        if(this.state.opacity === 0){
        this.setState({opacity:1})
        }
        else{
            this.setState({opacity:0})
        }
    }


    render(){
        return(
    <React.Fragment>
    <button onClick={this.toggleProfile} className='btn btn-primary'>{this.state.opacity === 0 ? "Get Profile" : "Hide Profile"}</button>
    <div style={{opacity:this.state.opacity,width:"200px",height:"200px"}}>
    <h3>{this.props.name}{this.props.name.last}</h3>
    <a href={this.props.email} target="_blank">{this.props.email}</a> 
    </div>
    </React.Fragment>
        )
    }
}

export default FriendProfileModal