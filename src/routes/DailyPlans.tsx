import styled from "styled-components";
import OutletLayout from "./Layouts/OutletLayout";
import React, { useEffect, useState } from "react";
import { DailyPlans, I_DailyPlan } from "../PlannerData";
import { GetDayText, GetNowDate } from "../DateFns";
import { AnimatePresence, motion } from "framer-motion";

type DatesType = {
    DateText: string,
    DateMS: number
};

interface I_PlanDataBox {
    nowViewportWidth: number;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.bgColor};
    border-radius: 15px;
    width: 90%;
    height: 85%;
    margin-top: 10px;
`;

const PlanSelect = styled.select`
    color: black;
    background-color: white;
    width: 70%;
    max-width: 300px;
    height: 25px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    border: 2px solid black;
    border-radius: 10px;
`;

const PlanBox = styled(motion.div)`
    width: 85%;
    height: 70%;
    max-width: 360px;
    padding: 3px 1px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.ItemTextColor};
    background-color: ${(props) => props.theme.ItemColor};
    border-radius: 15px;

    .PlanTitle {
        font-weight: bold;
        padding-top: 2px;
        padding-bottom: 4px;
        margin-top: 3px;
        margin-bottom: 5px;
        width: 80%;
        text-align: center;
        border-bottom: 1px solid ${(props) => props.theme.ItemTextColor};
    };
`;

const PlanDataBox = styled.div<I_PlanDataBox>`
    width: 100%;
    height: 18px;
    margin: 2px 0px;
    padding: 2px 3px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .ToDoTimes {
        width: 35%;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 0px;
        border-radius: 10px;
        color: orange;
        background-color: ${(props) => props.theme.ItemActiveColor};
        font-size: 14px;
        font-family: "D2CodingBold";
    };
    .ToDoText {
        width: 60%;
        height: inherit;
        font-size: 15px;
        margin-left: 3px;
        text-align: ${(props) => props.nowViewportWidth > 360 ? "center" : "left"};
    };
`;

const PlanBoxVariants = {
    "init": {
        y: 30,
        opacity: 0
    },
    "animate": {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 1.0
        }
    },
    "exit": {
        opacity: 0
    }
};

function DailyPlansPage(){
    const GetPlans = DailyPlans;
    const [Plans, setPlans] = useState<I_DailyPlan>();
    const [Index, setIndex] = useState(1);
    const [InnerWidth, setInnerWidth] = useState(window.innerWidth);

    const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {currentTarget: {value}} = event;

        if(value === ""){
            alert("option value error");
            return;
        } else {
            const ToDoData = GetPlans.find((data) => data.FullDate === value);
            setPlans(ToDoData);
            setIndex((state) => {
                const Idx = GetPlans.findIndex((data) => data.FullDate === value);
                
                if(Idx === -1){
                    return state;
                } else {
                    return Idx + 1;
                }
            });
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
            setPlans(GetPlans[0]);
        } else if(TodayMS >= Dates[1].DateMS && TodayMS < Dates[1].DateMS){
            setPlans(GetPlans[1]);
            setIndex(2);
        } else if(TodayMS >= Dates[2].DateMS){
            setPlans(GetPlans[2]);
            setIndex(3);
        }
    };

    useEffect(() => DefaultToDoSetting(), []);

    useEffect(() => {
        const ResizeListener = () => {
            setInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize", ResizeListener);
    });

    return (
        <Container>
            <PlanSelect onChange={onSelect}>
                {
                    GetPlans.map((data, idx) => {
                        const {FullDate} = data;
                        const Days = GetDayText(FullDate);

                        return (
                            <option value={FullDate} key={`option${idx}`}>
                                {`${idx + 1}일차 / ${FullDate} (${Days})`}
                            </option>
                        );
                    })
                }
            </PlanSelect>
            <PlanBox key={`Day0${Index}_Plans`} variants={PlanBoxVariants} initial="init" animate="animate" exit="exit" transition={{type: "tween"}}>
                <div className="PlanTitle">{Index}일차 일정 목록</div>
                {
                    Plans?.ToDos.map((data, idx) => {
                        const {openTm, endTm, ToDoText} = data;
                        const ToDoKey = idx < 10 ? `todo0${idx}` : `todo${idx}`;

                        if(openTm === "" || endTm === "" || ToDoText === ""){
                            return null;
                        } else {
                            return (
                                <PlanDataBox key={ToDoKey} nowViewportWidth={InnerWidth}>
                                    <span className="ToDoTimes">{openTm} ~ {endTm}</span> 
                                    <span className="ToDoText">&nbsp;{ToDoText}</span>
                                </PlanDataBox>
                            );
                        }
                    })
                }
            </PlanBox>
        </Container>
    );
}

export default DailyPlansPage