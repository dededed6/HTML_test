import '../styles/components/QnA.css';

export default function QnA(props) {
    const { question, answer1, answer2, answer3, qi } = props;
    
    return (
        <div className='container'>
            <h1 className='q'>{question}</h1>
            <button className='a' id={qi} onClick={click(0)}>{answer1}</button>
            <br></br>
            <button className='a' id={qi} onClick={click(1)}>{answer2}</button>
            <br></br>
            <button className='a' id={qi} onClick={click(2)}>{answer3}</button>
        </div>
    );
  }

  