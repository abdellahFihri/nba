import React from 'react';
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import styles from './navitems.module.scss'
const NavItems=()=>{

    const items=[
        {
        type: styles.option,
        icon:'home',
        text:'Home',
        link:'/'
        },
        {
            type: styles.option,
            icon:'file-text-o',
            text:'News',
            link:'/news'
        },
        {
            type: styles.option,
            icon:'play',
            text:'Videos',
            link:'/videos'
        },
        {
            type: styles.option,
            icon:'sign-in',
            text:'Sign in',
            link:'/sign-in'
        },
        {
            type: styles.option,
            icon:'sign-out',
            text:'Sign out',
            link:'/sign-out'
        },
    ]
     const showItems=()=>{
     return items.map((item,i)=>{
         const {type,icon,text,link}=item
         return(
            <div key={i} className={type}>
            <Link to={link}>
                <FontAwesome name={icon}/>
                {text}
            </Link>
        </div>
         )
     })
    }
  

    return(
       <div>
           {showItems()}
       </div>
    )
}
export default NavItems