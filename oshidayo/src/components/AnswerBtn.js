import '../styles/components/AnswerBtn.css';

const AnswerBtn = ({ handleClick, num, elementidx, question }) => {
    return (
        <button
            className="a"
            onClick={() => {
                handleClick(elementidx, num);
            }}
        >
        {question}
        </button>
    );
}

export default AnswerBtn;