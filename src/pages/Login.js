import React, {Component} from "react"
import fakeBE from "../utils/fakeBE.js"
import Header from "../components/Header.js"


class Login extends Component{
    state={
        username:"",
        password:"",
        error:"",
        disabled:true,
        status:"poor :("
    }

    onStateChange=(e)=>{
        var {username,password} = this.state
        var value=e.target.value;
        this.setState({[e.target.name]:value},()=>{
            fakeBE.checkLogin(username,password,(data)=>{
                console.log(data)
                if(data === true){
                    this.props.setLogin();
                    this.props.history.push('/home')
                }
            })
        })
        if(this.state.username.length > 3){
            this.setState({disabled:false,
                           status:"good :)"})
            }
        else if(this.state.username.length < 3){
            this.setState({status:"poor :("})
        
        }
    }


    render(){
        return(
            <React.Fragment>
           <Header>
               Log-In Site 
            </Header>
        <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
        <div className='card text-center'>
        <div className='card-header'  style={{backgroundColor:'teal'}}>
        <h3>Sign-In:</h3>
        </div>
        <div className='card-body text-center'  style={{backgroundColor:'lemonchiffon'}}>
        <span className={this.badgeMethod()}>{this.state.status}</span>
        <label htmlFor="username">Username:</label>
        <input type='text'
               name="username"
               value={this.state.username}
               onChange={this.onStateChange}
               placeholder="username"
               autoComplete="off"
               className="form-control"/>
                   <label htmlFor="password">Password:</label>
        <input type='text'
               name="password"
               value={this.state.password}
               onChange={this.onStateChange}
               placeholder="psst password"
               autoComplete="off"
               disabled={this.state.disabled}
               className="form-control"/>
        </div>
       </div>

        </div>
        <div className='col-md-4'></div>
        </div>
        </React.Fragment>
        )
       
    }



    badgeMethod() {
        let badgeMethod = "badge badge-";
        return badgeMethod += this.state.username === "" ? "danger" : "success";
    }
}

export default Login;