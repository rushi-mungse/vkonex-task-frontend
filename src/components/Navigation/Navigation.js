import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
const Navigation = () => {

    return (
        <nav>
            <Link to='/' className={styles.brand}>
                VKONEX BOT
            </Link>
            <div className={styles.rightNav}>
                {/* <Link to='login'>
                    LogIn
                </Link> */}
                <Link to='register'>
                    Register
                </Link>
            </div>
        </nav>
    )
}

export default Navigation
