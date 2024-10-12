import '../styles/components/QnA.css';

export default function QnA(props) {
    const { question, answer1, answer2, answer3 } = props;
    return (
        <div className='container'>
            <h1 className='q'>{question}</h1>
            <button className='a'>{answer1}</button>
            <button className='a'>{answer2}</button>
            <button className='a'>{answer3}</button>
        </div>
    );
  }