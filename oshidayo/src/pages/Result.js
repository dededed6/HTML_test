import '../styles/Result.css';

import { useState } from 'react';
import { useSearchParams, useNavigate, json, Navigate } from 'react-router-dom';

import OshiChart from '../components/OshiChart';
import ShareBtn from '../components/ShareBtn';
import CaptureBtn from '../components/CaptureBtn';

const names = ["토키노 소라", "로보코", "아즈키", "사쿠라 미코", "호시마치 스이세이", "아키 로젠탈", "아카이 하아토", "시라카미 후부키", "나츠이로 마츠리", "미나토 아쿠아", "무라사키 시온", "나키리 아야메", "유즈키 초코", "오오조라 스바루", "오오카미 미오", "네코마타 오카유", "이누가미 코로네", "우사다 페코라", "시라누이 후레아", "시로가네 노엘", "호쇼 마린", "아마네 카나타", "키류 코코", "츠노마키 와타메", "토코야미 토와", "히메모리 루나", "유키하나 라미", "모모스즈 네네", "시시로 보탄", "오마루 폴카", "라플라스 다크니스", "타카네 루이", "하쿠이 코요리", "사카마타 클로에", "카자마 이로하", "아윤다 리스", "호시노바 무나", "이오피프틴", "쿠레이지 올리", "아냐 멜핏샤", "파볼리아 레이네", "베스티아 제타", "카엘라 코발스키아", "코보 카나에루", "모리 칼리오페", "타카나시 키아라", "니노마에 이나니스", "가우르 구라", "아멜리아 왓슨", "아이리스", "츠쿠모 사나", "세레스 파우나", "오로 크로니", "나나시 무메이", "하코스 벨즈", "시오리 노벨라", "코세키 비쥬", "네리사 레이븐크로프트", "후와와 어비스가드", "모코코 어비스가드", "엘리자베스 로즈 블러드플레임", "지지 무린", "세실리아 이머그린", "라오라 판테라", "히오도시 아오", "오토노세 카나데", "이치조 리리카", "주우후테이 라덴", "토도로키 하지메"];
const questionList = [
    ["키리누키로 보기 좋아요",
        "생방송으로 볼때 재밌어요",
        "키리누키던 생방송이던 재밌어요"],
    ["재밌게하는 게임은 총게임이에요",
        "싱글 게임을 재밌게 해요",
        "온라인 게임을 할때 재밌어요"],
    ["소통 방송으로 보기 편안해요",
        "게임방송이 재밌어요",
        "자신만의 기획 방송이 히트에요"],
    ["엄마, 이모같은 느낌에 힐링돼요",
        "조카같은 느낌이라 귀여워요",
        "항상 친구같아 즐거워요"],
    ["영어 방송이 좋아요",
        "일본어 방송이 좋아요",
        "인니어 방송이 좋아요"],
    ["다른 멤버와 콜라보 방송 궁합이 좋아요",
        "혼자 방송할때 자신만의 색이 뚜렷해요",
        "콜라보든 개인이든 유연하게 균형을 맞춰줘요"],
    ["많은 리스너들의 수면을 책임져줘요",
        "독특한 재미로 방송에 빠져드는 매력이 있어요",
        "재밌는 장면들을 클립으로 보기 좋아요"],
    ["항상 높은 텐션으로 생기발랄해요",
        "엄청난 개그로 재미를 보장해요",
        "아싸력이 높아 혼자 노는게 보기 좋아요"],
    ["저음이 매력적이에요",
        "하이톤이 매력적이에요",
        "듣기좋은 톤이 매력적이에요"],
    ["방송을 정말 자주 켜줘요",
        "방송을 꾸준히 켜줘요",
        "방송을 꾸준히 하진 않아요"],
    ["불닭처럼 매운맛이 중독성있어요",
        "적당히 선을 타는 수위가 재밌어요",
        "발언에 조심해 안정적이에요"],
    ["노래를 가수처럼 불러요",
        "노래를 잘 불러요",
        "노래를 열심히 불러요"],
    ["태클거는 만담이 재밌어요",
        "바보 포지션을 책임치고 있어요",
        "언제나 재밌어요"]];


export default function Result() {
    let imageName = '0';

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    let result;

    if (searchParams.get('key') == null) {

        if (searchParams.get('hash') != null) {
            result = makeResult(searchParams.get('hash'));
            const resultStr = encodeURIComponent(JSON.stringify(result));

            searchParams.set('key', resultStr);
            window.history.pushState({}, null, '?key=' + resultStr);
        }
        else {
            navigate("/");
            result = [{name:'', score:'', nodes:[]}];
        }
    }
    else
    {
        try {
            const resultStr = decodeURIComponent(window.location.href).split('=')[1];
            console.log(resultStr);

            result = JSON.parse(resultStr);
            console.log(result);
        }
        catch (e) {
            console.log('fuck');
            navigate('/');
        }
    }
    
    const oshi = result[0];
    const oshiName = names[oshi.h];

    let charm = [];
    for (let i=0; i<13; i++) {
        if (oshi.j[i][0] == 2 || oshi.j[i][0] == 19) charm[i] = questionList[i][0];
        else if (oshi.j[i][1] == 2 || oshi.j[i][1] == 19) charm[i] = questionList[i][1];
        else charm[i] = questionList[i][2];
    }

    const charmList = charm.map((item) => (
        <p className='charmList'>{item}</p>
	));

    const oshiList = result.map((v) => (
        <OshiChart name={names[v.h]} score={v.i}/>
    ));
    /*
    공유하기: https://velog.io/@yjohbjects/React%EC%97%90%EC%84%9C-%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C%EC%97%90-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%B3%B5%EC%82%AC%ED%95%98%EA%B8%B0
    캡쳐하기: https://hisoit.tistory.com/102
    */

    return (
        <div>
            <h1 className="resultTitle">당신의 취저 멤버는</h1>
            <img src={ require('../assets/images/members/'+oshiName+'.png') } style={{margin:'1rem', boxShadow:'0.5rem 0.5rem 1rem 0 #02082c', width:'18rem', height:'18rem'}} />
            <h1 className="resultTitle Name" id="name">{oshiName}입니다!</h1>
            <p className='sub'>이 멤버와 {oshi.i/100}% 어울립니다!</p>

            <br/>

            <div className='explain' id='oshiChart'>
                <div id='capture'>{oshiList}</div>
            </div>

            <div className='shareBox'>
                <CaptureBtn/>
                <ShareBtn/>
            </div>

            <p className='sub'>이 멤버의 매력은?</p>
            <div className='explain'>
                {charmList}
            </div>

            <br/>
            
            <p className='sub'>취저 멤버가 오시인가요?</p>
            <button>맞음</button>
            <button>아님</button>

            
        </div>
    );
}

const makeResult = (answer) => {
    const result = JSON.parse(answer);
    const nodes = JSON.parse(sessionStorage.getItem('984645163'));

    for (let i=0; i<names.length; i++) {
        
        let tempScore = 0;

        nodes[i].forEach((v, index) => {
            if (index != 13) {
                const userNode = parseInt(result[index]);
                tempScore += parseInt(v[userNode]);
            }
        });

        nodes[i] = {
            h: i,
            i: parseInt((tempScore / 43 * 100) * 100),
            j: nodes[i]
        };
    }

    let resultNodes = nodes.sort((a, b) => b.i - a.i);
    resultNodes.forEach((v, index) => {
        if (index != 0) {
            delete v.j;
        }
    })

    resultNodes = resultNodes.slice(0,20);

    return resultNodes;
}