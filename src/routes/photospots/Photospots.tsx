//출사 관련 정보 모아둔 page

import { useState } from "react";
import styled from "styled-components";
import { useStore } from "zustand";
import { PhotospotStore, ShowNestedStore } from "../../Photospots_data";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const TravelDates = ["2026-01-15", "2026-01-16", "2026-01-17"];

const Container = styled.div`
    width: 90%;
    height: 85%;
    color: white;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const EditButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.ItemActiveColor};
    padding: 3px 5px;
    width: 100px;
    height: 35px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 18px;
`;

const DateCategoryBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    border: 2px solid white;

    .NowDateBox {
        width: 100px;
        margin: 0px 3px;
        font-weight: bold;
        text-align: center;
    };
`;

const DateChangeBtn = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NestedWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100dvw;
    height: 100dvh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
`;

export default function PhotospotsPage(){
    const [DateIndex, setDateIndex] = useState(0);
    const {testvalue, setValue} = useStore(PhotospotStore);
    const {ShowNested, setShowNested} = useStore(ShowNestedStore);

    const Navigate = useNavigate();

    const prevIndex = () => {
        if(DateIndex === 0){
            setDateIndex(2);
        } else {
            setDateIndex((prev) => prev - 1);
        }
    };

    const nextIndex = () => {
        if(DateIndex === 2){
            setDateIndex(0);
        } else {
            setDateIndex((prev) => prev + 1);
        }
    };

    const DataAddTest = () => {
        setShowNested(true);
        Navigate("spotedit");
    };

    const RedirectSpotDetails = (idx: number) => {
        setShowNested(true);
        Navigate(`page${idx}`);
    };

    return (
        <>
            <Container>
                <EditButtons onClick={DataAddTest}>편집</EditButtons>
                <DateCategoryBox>
                    <DateChangeBtn onClick={prevIndex}>◀</DateChangeBtn>
                    <div className="NowDateBox">{TravelDates[DateIndex]}</div>
                    <DateChangeBtn onClick={nextIndex}>▶</DateChangeBtn>
                </DateCategoryBox>
                <ul>
                    {
                        testvalue.map((data, idx) => {
                            return (
                                <li key={data} onClick={() => RedirectSpotDetails(idx)}>{data}</li>
                            );
                        })
                    }
                </ul>
            </Container>
            {
                ShowNested ? <NestedWrapper><Outlet /></NestedWrapper> : null
            }
        </>
    );
};