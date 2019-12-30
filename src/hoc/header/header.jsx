import React from 'react';
import {Link} from 'react-router-dom'
import SideNav from './SideNav'
import FontAwesome from  'react-fontawesome'
import styles  from './header.module.scss' //by convention if we use create-react-app v2+ we use css modules as this

const Header=(props)=>{
    const navBars=()=>(
        <div className={styles.bars}>
        <FontAwesome
        name="bars"
         onClick={props.onOpenNav}
        style={{
            color:"#dfdfdf",
            padding:"10px",
            cursor:"pointer"
        }}/>
        </div>
    )

    const logo=()=>(
        
            <Link to="/" className={styles.logo}>
                <img src="images/nba_logo.png" alt="nba logo"/>
            </Link>
        
    )
    return(
        <header className={styles.header}>  {/* we reffer to the css module in classname like a  normal object */}
<SideNav {...props}/>
           <div className={styles.headerOption}>
               {navBars()}
                  {logo()}
           </div>
        </header>
    )
}
export default Header