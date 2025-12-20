import styled from "styled-components";
import { I_Ticket, PlannerData } from "../../PlannerData";
import { GetDayText, GetDiffs, GetDiffTimes } from "../../DateFns";
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
    width: 86%;
    max-width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0px;
    padding: 4px 0px;
    font-weight: bold;

    .Diffs {
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        background-color: white;
        padding: 3px 5px;
        border-radius: 15px;
        width: 40px;
    };
`;

const TrainBox = styled.div`
    width: 80%;
    height: 50%;
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

    .Times {
        font-size: 18px;
        margin-bottom: 5px;
        font-weight: bold;
    };

    .stations {
        font-size: 15px;
    }
`;

const DiffTimeBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.ItemTextColor};

    .Arrows {
        font-size: 17px;
        font-weight: bold;
    }
`;

const PersonalInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const AddButtons = styled.div`
    padding: 2px 4px;
    color: ${(props) => props.theme.ItemTextColor};
    background-color: ${(props) => props.theme.ItemActiveColor};
    border: 1px solid ${(props) => props.theme.ItemTextColor};
    border-radius: 15px;
    font-size: 15px;
`;

export default function Ticket({targetDt, ticketId, startNm, startTm, endNm, endTm}: I_Ticket){
    const Days = GetDayText(targetDt);
    const Diffs = GetDiffs(targetDt);

    const DiffTime = GetDiffTimes({
        StartTime: `${targetDt}T${startTm}:00`,
        EndTime: `${targetDt}T${endTm}:00`
    });

    const [isAdds, setAdds] = useState(false);
    const [TrainNum, setTrainNum] = useState("");
    const [SeatNo, setSeatNo] = useState("");

    const DataInput = () => {
        const TrainNumber = window.prompt("몇 호차 인가요? (숫자만 입력)");
        const SeatNumber = window.prompt("좌석 번호는 어떻게 되나요?");

        if(TrainNumber !== null && SeatNumber !== null){
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
                <div className="Diffs">{Diffs}</div>
                <div>{`${targetDt} (${Days})`}</div>
                <div>직통</div>
            </DateBox>
            <TrainBox>
                <TrainData>
                    <div className="Times">{startTm}</div>
                    <div className="stations">{startNm}</div>
                </TrainData>
                <DiffTimeBox>
                    <div>→</div>
                    <div>{DiffTime.hour}시간 {DiffTime.minute}분</div>
                </DiffTimeBox>
                <TrainData>
                    <div className="Times">{endTm}</div>
                    <div className="stations">{endNm}</div>
                </TrainData>
            </TrainBox>
            {!isAdds ? <AddButtons onClick={DataInput}>데이터 입력</AddButtons> : null}
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