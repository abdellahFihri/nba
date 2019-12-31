import React from 'react';
import styles from './footer.module.scss'
import {CURRENT_YEAR} from '../../config'
import {Link} from 'react-router-dom'

const Footer=()=>(
        <div className={styles.footer}>
             <Link to="/" className={styles.logo}>
             <img src="images/nba_logo.png" alt="nba logo"/>
             </Link>
             <div className={styles.right}>
                 @NBA {CURRENT_YEAR} All rights reserved
             </div>
        </div>
    )
export default Footer