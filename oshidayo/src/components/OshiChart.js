import '../styles/components/OshiChart.css';

const OshiChart = ({ name, score }) => {
    const w = parseFloat(score/4.1);
    return (
        <div className='OshiChart'>
            <img className='image' src={ require('../assets/images/members/'+name+'.png') }/>
            <div className='chart' style={{margin:'0', backgroundColor:'cyan', width:w/100+'rem', height:'0.8rem'}}/>
            <p className='per'>&nbsp;{score/100}%</p>
        </div>
    );
}

export default OshiChart;