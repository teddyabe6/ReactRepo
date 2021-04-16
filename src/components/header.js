import React, {Component} from 'react';
import '../css/styles.css'

class Header extends Component {

    state = {
        keyword:'Hello'
    }
    inputChangeHandeler = (event) => {
        this.setState({
 keyword: event.target.value
        })
    
}
    render (){
    return (
    <header> 
         <div className="logo"> Logo</div>
         <input
          type="text"
          onChange={this.inputChangeHandeler}/>
   
    </header>
  
    

        )
   }
}
export default Header;