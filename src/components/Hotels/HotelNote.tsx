import {styled} from "styled-components";
import {motion, scale} from "framer-motion";
import { Link } from "react-router-dom";

interface I_HotelNoteBox {
    setStateFn: Function;
};

const Container = styled(motion.div)`
    width: 75%;
    max-width: 320px;
    height: 65%;
    max-height: 460px;
    margin-top: 20px;
    color: black;
    background-color: rgb(220, 221, 225);
    border-radius: 15px;
`;

const Headers = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 5px;
`;

const CloseBtn = styled.div`
    display: block;
    margin-right: 8px;
`;

const Mains = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5px;

    .MainsTitle {
        font-weight: bold;
        font-size: 17px;
        background-color: inherit;
        margin: 5px 0px;
    };
`;

const DataBox = styled.div`
    width: 80%;
    background-color: rgb(190, 195, 199);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3px 5px;
    margin-top: 5px;
`;

const Datas = styled.div`
    margin: 5px 0px;

    .head {
        margin-bottom: 2px;
        font-weight: bold;
    };
`;

const LinkBtnBox = styled.div`
    width: 100%;
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LinkBtn = styled.div`
    width: 80%;
    height: 30px;
    margin: 5px 0px;
    padding: 2px 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .Naver {
        background-color: rgb(46, 213, 115);
    };

    .Airbnb {
        background-color: rgb(232, 67, 147);
    }
`;

const LinkHead = styled.div`
    width: 45%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 17px;
`;

const LinkBody = styled.div`
    width: 50%;
    border-radius: 10px;
    a {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 2px 0px;
    };
`;

const NaverIcon = styled.div`
    width: 20px;
    height: 22px;
    color: white;
    font-weight: bold;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
`;

const AirbnbIcon = styled.div`
    width: 20px;
    height: 22px;
    margin-right: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Variants = {
    "init": {
        opacity: 0,
        scale: 0
    },
    "animate": {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.2
        }
    },
};

export default function HotelNoteBox({setStateFn}: I_HotelNoteBox){
    return (
        <Container variants={Variants} initial="init" animate="animate">
            <Headers>
                <CloseBtn onClick={() => setStateFn(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={"20"} height={"20"}>
                        <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/>
                    </svg>
                </CloseBtn>
            </Headers>
            <Mains>
                <div className="MainsTitle">📑 추가 참고사항</div>
                <DataBox>
                    <Datas>
                        <div className="head">체크인 관련</div>
                        <div>▶ 셀프 체크인</div>
                        <div>▶ 당일 16시 숙소 PW 전송</div>
                    </Datas>
                    <Datas>
                       <div className="head">쓰레기 분리배출</div>
                       <div>▶ 지하 1층 위더스 오션 구역</div>
                    </Datas>
                    <Datas>
                        <div className="head">체크인 전 짐 보관</div>
                        <div>▶ 20층 위더스 오션 사무실</div>
                    </Datas>
                </DataBox>
            </Mains>
            <LinkBtnBox>
                <LinkBtn className="Naver">
                    <LinkHead>
                        <NaverIcon className="Naver">N</NaverIcon>
                        네이버 지도
                    </LinkHead>
                    <LinkBody className="Naver">
                        <Link to="https://naver.me/Fw7MAhI6" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#ffffff" width={"20"} height={"20"}>
                                <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/>
                            </svg>
                        </Link>
                    </LinkBody>
                </LinkBtn>
                <LinkBtn className="Airbnb">
                    <LinkHead>
                        <AirbnbIcon className="Airbnb">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#ffffff" width={"19"} height={"19"}>
                            <path d="M320.5 437.1C295.3 405.4 280.4 377.7 275.5 353.9C253 265.9 388.1 265.9 365.6 353.9C360.2 378.1 345.3 405.9 320.6 437.1L320.5 437.1zM458.7 510.3C416.6 528.6 375 499.4 339.4 459.8C443.3 329.7 385.5 259.8 320.6 259.8C265.7 259.8 235.4 306.3 247.3 360.3C254.2 389.5 272.5 422.7 301.7 459.8C269.2 495.8 241.2 512.5 216.5 514.7C166.5 522.1 127.4 473.6 145.2 423.6C160.3 384.4 256.9 192.4 261.1 182C276.9 151.9 286.7 124.6 320.5 124.6C352.8 124.6 363.9 150.5 380.9 184.5C416.9 255.1 470.3 362 495.7 423.6C508.9 456.7 494.3 494.9 458.7 510.2zM505.7 374.2C376.8 99.9 369.7 96 320.6 96C275.1 96 255.7 127.7 235.9 168.8C129.7 381.1 119.5 411.2 118.6 413.8C93.4 483.1 145.3 544 208.2 544C229.9 544 268.8 537.9 320.6 481.6C379.3 545.4 421.9 544 433 544C495.9 544.1 547.9 483.1 522.6 413.8C522.6 409.9 505.8 374.9 505.8 374.2L505.8 374.2z"/>
                            </svg>
                        </AirbnbIcon>
                        에어비앤비
                    </LinkHead>
                    <LinkBody className="Airbnb">
                        <Link to="https://www.airbnb.co.kr/rooms/703950140340756309?guests=1&adults=1&s=67&unique_share_id=a7d64b37-89aa-417c-8641-ccd0a1426a65" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#ffffff" width={"20"} height={"20"}>
                                <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/>
                            </svg>
                        </Link>
                    </LinkBody>
                </LinkBtn>
            </LinkBtnBox>
        </Container>
    );
};