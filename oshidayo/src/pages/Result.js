import '../styles/Result.css';

export default function Result() {
    let imageName = '0';

    return (
        <div>
            <h1 className="resultTitle">당신의 취저 멤버는</h1>
            <h1 className="resultTitle Name" id="name">입니다!</h1>
            <img
	src={require('../assets/images/members/0.png').default}
/>
        </div>
    );
}

function makeResult() {
    
}