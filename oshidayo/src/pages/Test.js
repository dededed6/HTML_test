import QnA from '../components/QnA'

export default function Test() {
	const qnas = [
		{question : "질문1", answer1 : "q1-1", answer2 : "q1-2", answer3 : "q1-3"}, 
		{question : "질문2", answer1 : "q2-1", answer2 : "q2-2", answer3 : "q2-3"}, 
		{question : "질문3", answer1 : "q3-1", answer2 : "q3-2", answer3 : "q3-3"}, 
	]
	const qnaList = qnas.map((v) => (<QnA question={v.question} answer1={v.answer1} answer2={v.answer2} answer3={v.answer3}/>))

    return (
        <div>
            {qnaList}
        </div>
    );
}

