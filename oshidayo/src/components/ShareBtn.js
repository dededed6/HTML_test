import '../styles/components/ShareBtn.css'


export default function ShareURL() {
    function share() {
        let shareData = {
            title: "오시다요",
            text: "빅데이터가 당신의 취저멤버를 찾아드립니다.",
            url: window.location.href,
        };
        
        const resultPara = document.querySelector(".result");
        
        if (!navigator.canShare) {
            copyToClipBoard()
        } else if (navigator.canShare(shareData)) {
            console.log()
        } else {
            copyToClipBoard()
        }
    }

    return (
        <button className="shareBtn" onClick={share}>🔥공유하기</button>
    );
}


const copyToClipBoard = () => {
    var content = window.location.href;

    navigator.clipboard.writeText(content)
        .then(() => {
        alert('URL 복사 완료!');
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
}