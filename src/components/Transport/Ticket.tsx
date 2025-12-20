import styled from "styled-components";
import { I_Ticket, PlannerData } from "../../PlannerData";
import { GetDayText, GetDiffs } from "../../DateFns";
import { useEffect, useState } from "react";

const Container = styled.div`
    width: 85%;
    max-width: 320px;
    height: 25%;
    margin: 10px 0px;
    border-radius: 15px;
    background-color: ${(props) => props.theme.ItemColor};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DateBox = styled.div`
    width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0px;
`;

const TrainBox = styled.div`
    width: 80%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const TrainData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PersonalInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default function Ticket({targetDt, ticketId, startNm, startTm, endNm, endTm}: I_Ticket){
    const Days = GetDayText(targetDt);
    const Diffs = GetDiffs(targetDt);

    const [isAdds, setAdds] = useState(false);
    const [TrainNum, setTrainNum] = useState("");
    const [SeatNo, setSeatNo] = useState("");

    const DataInput = () => {
        const TrainNumber = window.prompt("몇 호차 인가요? (숫자만 입력)");
        const SeatNumber = window.prompt("좌석 번호는 어떻게 되나요?");

        if(TrainNumber !== "" && SeatNumber !== ""){
            const Locals = window.localStorage;

            const Infos = {
                Trains: TrainNumber,
                Seats: SeatNumber
            };

            Locals.setItem(ticketId, JSON.stringify(Infos));
            setTrainNum(String(TrainNumber));
            setSeatNo(String(SeatNumber));

            setAdds(true);
        } else {
            alert("데이터가 입력되지 않았습니다.");
            return;
        }
    };

    const StorageCheck = () => {
        const GetData = localStorage.getItem(ticketId);

        if(GetData === null){
            setTrainNum("Null");
            setSeatNo("Null");
        } else {
            const Convert = JSON.parse(GetData);

            setTrainNum(Convert.Trains);
            setSeatNo(Convert.Seats);

            setAdds(true);
        }
    };

    useEffect(() => StorageCheck(), []);

    return (
        <Container key={ticketId}>
            <DateBox>
                <div>{Diffs}</div>
                <div>{`${targetDt} (${Days})`}</div>
                <div>직통</div>
            </DateBox>
            <TrainBox>
                <TrainData>
                    <div>{startTm}</div>
                    <div>{startNm}</div>
                </TrainData>
                <div>→</div>
                <TrainData>
                    <div>{endTm}</div>
                    <div>{endNm}</div>
                </TrainData>
            </TrainBox>
            {!isAdds ? <button onClick={DataInput}>데이터 입력</button> : null}
            {
                isAdds ? (
                    <PersonalInfo>
                        <div>
                            일반실 {TrainNum}호차 {`(${SeatNo})`}
                        </div>
                    </PersonalInfo>
                ) : null}
        </Container>
    );
};