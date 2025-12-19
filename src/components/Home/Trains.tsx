import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TrainInfos from "./TrainInfos";
import { ContainerExtends, ItemHeaders} from "./Commons";
import { PlannerData } from "../../PlannerData";

interface I_CategoryBtn {
    isStart: boolean;
};

export interface I_Infos {
    categorys: string;
    startNm: string;
    startTime: string;
    endNm: string;
    endTime: string;
};

const Container = styled(ContainerExtends)`
    margin-top: 10px;
`;

const Categorys = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
`;

const CategoryBtn = styled.div<I_CategoryBtn>`
    padding: 2px 3px;
    width: 50%;
    height: 30px;
    text-align: center;
    background-color: ${(props) => props.theme.ItemColor};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .BtnText {
        font-weight: bold;
        z-index: 2;
        color: ${(props) => props.isStart ? "black" : props.theme.ItemTextColor};
    };
`;

const SelectedBtn = styled(motion.div)`
    width: 100%;
    height: 30px;
    border-radius: 10px;
    background-color: rgb(87, 96, 111);
    position: absolute;
    z-index: 1;
`;

const ItemBodys = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const StartInfos: I_Infos = {
    categorys: "출발",
    startNm: "수원역",
    startTime: "10:47",
    endNm: "부산역",
    endTime: "13:35"
};

const ReturnInfos: I_Infos = {
    categorys: "복귀",
    startNm: "부산역",
    startTime: "13:17",
    endNm: "수원역",
    endTime: "15:56"
};

export default function Trains(){
    const [isStart, setStart] = useState(true);
    const {
        DepartureTicket, ReturnTicket
    } = PlannerData.transportData;

    return (
        <Container>
            <ItemHeaders>
                <div className="HeaderText">🚄 교통편</div>
            </ItemHeaders>
            <Categorys>
                <CategoryBtn isStart={isStart} onClick={() => setStart(true)}>
                    <div className="BtnText">출발</div>
                    {isStart ? <SelectedBtn layoutId="selected" transition={{duration: 0.5}}/> : null}
                </CategoryBtn>
                <CategoryBtn isStart={!isStart} onClick={() => setStart(false)}>
                    <div className="BtnText">복귀</div>
                    {isStart ? null : <SelectedBtn layoutId="selected" transition={{duration: 0.5}}/>}
                </CategoryBtn>
            </Categorys>
            <ItemBodys>
                {isStart ? <TrainInfos {...DepartureTicket} /> : null}
                {isStart ? null : <TrainInfos {...ReturnTicket} />}
            </ItemBodys>
        </Container>
    );
};