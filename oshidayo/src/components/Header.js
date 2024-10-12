import '../styles/components/Header.css'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <p className='header'>
                <Link
                    to={'/'}
                    style={{ textDecoration: "none", color: 'inherit' }}
                >
                    OshiDAYO!
                </Link>
            </p>
        </div>
    );
}