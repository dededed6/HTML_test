import '../styles/components/Header.css'
import { Link } from "react-router-dom";

export default function Header() {


    return (
        <header>
            <Link className='headerLink' to={'/'}>
                <p className='headerTitle oshi'>오시</p>
                <p className='headerTitle yo'>요</p>
                <p className='headerTitle gura'>구라</p>
                <p className='headerTitle marine'>마린</p>
                <p className='headerTitle dayo'>다요</p>
            </Link>
        </header>
    );
}