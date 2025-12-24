import styled from "styled-components";
import OutletLayout from "./OutletLayout";
import React, { useEffect, useState } from "react";
import { DailyPlans, I_DailyPlan } from "../PlannerData";
import { GetDayText, GetNowDate } from "../DateFns";

type DatesType = {
    DateText: string,
    DateMS: number
};

const PlanSelect = styled.select`
    color: black;
    background-color: white;
`;

const PlanBox = styled.div`
    width: 85%;
    height: 70%;
    max-width: 350px;
    padding: 3px 1px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.ItemTextColor};
    background-color: ${(props) => props.theme.ItemColor};
    border-radius: 15px;
`;

function DailyPlansPage(){
    const Plans = DailyPlans;
    const [ToDos, setToDos] = useState<I_DailyPlan>();

    const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {currentTarget: {value}} = event;

        if(value === ""){
            alert("option value error");
            return;
        } else {
            const ToDoData = Plans.find((data) => data.FullDate === value);
            setToDos(ToDoData);
        }
    };

    const DefaultToDoSetting = () => {
        const Dates: DatesType[] = [
            {DateText: "2026-01-15T00:00:00", DateMS: 1768402800000},
            {DateText: "2026-01-16T00:00:00", DateMS: 1768489200000},
            {DateText: "2026-01-17T00:00:00", DateMS: 1768575600000}
        ];

        const {TodayMS} = GetNowDate();

        //접속 시점 날짜가 1일차 미만 or 1일차인 경우
        if(TodayMS < Dates[0].DateMS || (Dates[0].DateMS <= TodayMS && Dates[1].DateMS > TodayMS)){
            setToDos(Plans[0]);
        } else if(TodayMS >= Dates[1].DateMS && TodayMS < Dates[1].DateMS){
            setToDos(Plans[1]);
        } else if(TodayMS >= Dates[2].DateMS){
            setToDos(Plans[2]);
        }
    };

    useEffect(() => DefaultToDoSetting(), []);

    return (
        <OutletLayout>
            <PlanSelect onChange={onSelect}>
                {
                    Plans.map((data, idx) => {
                        const DayText = GetDayText(data.FullDate);
                        return (
                            <option value={data.FullDate}>
                                {`${idx + 1}일차 / ${data.FullDate} (${DayText})`}
                            </option>
                        );
                    })
                }
            </PlanSelect>
            <PlanBox key={ToDos?.FullDate}>
                {
                    ToDos?.ToDos.map((data) => {
                        if(data.openTm === "" || data.endTm === ""){
                            return null;
                        } else {
                            return (
                                <div key={data.ToDoText}>
                                    {`${data.openTm}~${data.endTm}`} {data.ToDoText}
                                </div>
                            );
                        } 
                    })
                }
            </PlanBox>
        </OutletLayout>
    );
}

export default DailyPlansPage