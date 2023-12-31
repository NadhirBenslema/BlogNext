const { Fragment } = require("react");
import Link from "next/link";
import styles from './main-navigation.module.css'
import Logo from "./logo";

function MainNavigation (){
    return (
        <header className={styles.header}>
            <Link href='/'>
                    <Logo/>
            </Link>
            <nav>
                <ul>
                    <li><Link href='/posts'>Posts</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>

                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;