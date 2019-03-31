import React from "react"



const Header = props =>(
    <div className='jumbotron text-center p-4 display-4'>
    {props.children}
    </div>
)


export default Header;