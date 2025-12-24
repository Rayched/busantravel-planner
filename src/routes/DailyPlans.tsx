import styled from "styled-components";
import OutletLayout from "./OutletLayout";
import React, { useState } from "react";
import { DailyPlans, I_DailyPlan } from "../PlannerData";
import { GetDayText } from "../DateFns";

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
    }

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
                        return (
                            <div key={data.ToDoText}>
                                {`${data.openTm}~${data.endTm}`} {data.ToDoText}
                            </div>
                        );
                    })
                }
            </PlanBox>
        </OutletLayout>
    );
}

export default DailyPlansPage