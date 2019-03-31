import React, {Component} from "react"
import API from "../utils/API.js"


class SearchForm extends Component{
    state={
        people:[]
    }

    componentDidMount=()=>{
        API.populateSearchBox()
        .then(res=>{
            console.log(res.data.results)
            this.setState({people:res.data.results})
        })
        .catch(err=>console.log(err))
    }

    selectPerson=(e)=>{
         console.log(document.querySelector("input[list='namelist']").value)
    }


    render(){
        return(
            <React.Fragment>
                <div className='card text-center'>
                <div className='card-header'>
                <h3>Search Form</h3>
            <input list='namelist'
                    id='personofinterest'
                   autoComplete='off'
                   style={{width:"155px",height:"55px"}}
                    id='personname'/>
                    <datalist id="namelist">
                    {this.state.people.map(p=>(
                        <option value={p.name.first} key={p.login.uuid}/>
                     ))}
                    </datalist>
                    <span className='btn btn-warning ml-3' onClick={this.selectPerson}>
                    Search
                    </span>
                    </div>
                    </div>
                    </React.Fragment>
        )
    }
}

export default SearchForm