import React,{Component} from 'react';
import  Header from '../header/header'
import './layout.style.scss'

class Layout extends Component {
    state = { 
showNav:false
     }
toggleSideNav=(action)=>{//the action here will  be true or false depending on what we passed in the argument
this.setState({showNav:action})
}

    render() { 
        return ( 
            <div>
                <Header
                showNav={this.state.showNav}
                onHideNav={()=>this.toggleSideNav(false)}//this argument will go as action to the function
                onOpenNav={()=>this.toggleSideNav(true)}
                />
                {this.props.children}
            </div>
         );
    }
}
 
export default Layout;