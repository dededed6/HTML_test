import '../styles/Home.css';
import { Link } from "react-router-dom";

export default function Home() {
    let userCount = 0;
    if (sessionStorage.getItem('164655198413') != null) {
        userCount = sessionStorage.getItem('164655198413');
    }

    return (
        <div className='Home'>
            <h1 className='title uno'>빅데이터가</h1>
            <h1 className='title due'>당신의 취저 멤버를</h1>
            <h1 className='title tre'>찾아드립니다</h1>

            <div className="countBox">
                <p id="countText">지금까지 {userCount}명이 취향저격 당했습니다!</p>
            </div>

            <Link
                to={'/test'}
                style={{ textDecoration: "none", color: 'inherit' }}
            >
                <button className='goTest'>
                    시작하기
                </button>
            </Link>
        </div>
    );
}