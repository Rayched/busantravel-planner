import { motion } from "framer-motion";
import {styled} from "styled-components";
import { I_Infos } from "./Trains";

const Container = styled(motion.div)`
    width: 90%;
    max-width: 360px;
    height: 70px;
    border-radius: 15px;
    background-color: rgb(87, 96, 111);
    margin: 10px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 1px;
`;

const DataCols = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 33%;
    max-width: 120px;
    .head {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 5px;
    }

    .bodys {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 3px 0px;
    }
`;

const InfoVar = {
    "initial": {
        y: 5,
        opacity: 0
    },
    "animate": {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.5
        }
    }
};

export default function TrainInfos(Data: I_Infos){
    return (
        <Container 
            key={Data.categorys} 
            variants={InfoVar} 
            initial="initial" 
            animate="animate"
            transition={{type: "tween", bounce: 0}}
        >
            <DataCols>
                <div className="head">분류</div>
                <div className="bodys">출발</div>
                <div className="bodys">도착</div>
            </DataCols>
            <DataCols>
                <div className="head">이름</div>
                <div className="bodys">{Data.startNm}</div>
                <div className="bodys">{Data.endNm}</div>
            </DataCols>
            <DataCols>
                <div className="head">시간</div>
                <div className="bodys">{Data.startTime}</div>
                <div className="bodys">{Data.endTime}</div>
            </DataCols>
        </Container>
    );
}