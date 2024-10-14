import AnswerBtn from '../components/AnswerBtn';
import '../styles/Test.css';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function Test() {
	const [answer, setAnswer] = useState(
		[0,0,0,0,0,0,0,0,0,0,0,0,0]
	);

	const questionList = [
		{q: "주로 홀로라이브를 보는 방법은?",
			a1: "키리누키",
			a2: "생방송/녹화본",
			a3: "상관없음"},
		{q: "보고싶은 게임 컨텐츠가 있으신가요?",
			a1: "FPS/총게임",
			a2: "싱글 게임",
			a3: "온라인 게임"},
		{q: "좋아하는 방송 컨텐츠는?",
			a1: "잡담/소통 방송",
			a2: "게임 방송",
			a3: "기획 방송(etc.노래, 요리)"},
		{q: "어떤 느낌의 오시를 원하시나요?",
			a1: "마마, 이모 같은 오시",
			a2: "조카, 딸 같은 오시",
			a3: "친구 같은 오시"},
		{q: "선호하는 방송 언어가 있나요?",
			a1: "영어",
			a2: "일본어",
			a3: "인도네시아어"},
		{q: "콜라보 자주하는 오시는 어떠신가요?",
			a1: "콜라보 방송",
			a2: "혼자하는 방송",
			a3: "둘 다 즐겨봄"},
		{q: "당신의 생방시청 타입은?",
			a1: "딴짓 하거나 자면서 보기",
			a2: "생방송에 집중하며 보기",
			a3: "생방은 건너뛰고 클립으로 보기"},
		{q: "어떤 성격의 오시를 원하시나요?",
			a1: "항상 텐션 높은 오시",
			a2: "볼때 너무 웃긴 오시",
			a3: "아싸력 높은 오시"},
		{q: "어떤 목소리 톤을 선호하시나요?",
			a1: "저음",
			a2: "하이톤",
			a3: "보통"},
		{q: "방송 빈도는 어느 정도가 좋나요?",
			a1: "많을수록 좋음",
			a2: "이틀에 한번 정도",
			a3: "상관 없음"},
		{q: "좋아하는 방송 수위는?",
			a1: "불닭볶음면",
			a2: "신라면",
			a3: "진순이"},
		{q: "노래 실력은 어떠면 좋을까요?",
			a1: "잘부르면",
			a2: "적당히 부르면",
			a3: "못불러도"},
		{q: "좋아하는 만담 타입이 있으신가요?",
			a1: "태클 걸기",
			a2: "퐁코츠 행동",
			a3: "상관 없음"},
	];

	const handleClick = (idx, a) => {
		let newAnswer = answer;
		newAnswer[idx] = a;
		setAnswer(newAnswer);
		console.log(newAnswer);

		if (idx < 12) { 
			const element = document.getElementById(idx+1);
			element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
		}
		else {
			sessionStorage.setItem("1648652163", JSON.stringify(newAnswer));
			goToResult();
		}
	};

	const navigate = useNavigate();

	const goToResult = () => {
		navigate("/result");
	}

	const aList = questionList.map((item, index) => (
		<div className='QnA' id={index}>
			<p className='question'>{item.q}</p>
			<AnswerBtn
				handleClick={handleClick}
				isAnswered={answer[index]}
				elementidx={index}
				num={0}
				question={item.a1}
			/>
			<br/>
			<AnswerBtn
				handleClick={handleClick}
				isAnswered={answer[index]}
				elementidx={index}
				num={1}
				question={item.a2}
			/>
			<br/>
			<AnswerBtn
				handleClick={handleClick}
				isAnswered={answer[index]}
				elementidx={index}
				num={2}
				question={item.a3}
			/>
		</div>
	));

    return (
        <div className='Test'>
			{aList}
        </div>
    );
}