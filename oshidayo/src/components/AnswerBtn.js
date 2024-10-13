import '../styles/components/AnswerBtn.css';

const AnswerBtn = ({ handleClick, isAnswered, num, elementidx, question }) => {
    return (
        <button
            className="a"
            onClick={() => {
                handleClick(elementidx, num);
            }}
            isSelected={isAnswered}
        >
        {question}
        </button>
    );
}

export default AnswerBtn;