import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
import { useSelector } from 'react-redux'
const Navigation = () => {
    const user = useSelector(state => state.auth.user)
    return (
        <nav>
            <Link to='/' className={styles.brand}>
                VKONEX BOT
            </Link>
            <div className={styles.rightNav}>
                {/* <Link to='login'>
                    LogIn
                </Link> */}
                {!user && <Link to='register'>
                    Register
                </Link>}
            </div>
        </nav>
    )
}

export default Navigation
