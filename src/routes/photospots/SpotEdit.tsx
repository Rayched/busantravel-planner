import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TravelDates } from "./Photospots";
import { useStore } from "zustand";
import { ShowNestedStore } from "../../Photospots_data";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Container = styled.div`
    width: 75%;
    max-width: 300px;
    height: 60%;
    margin-top: 10px;
    background-color: ${(props) => props.theme.ItemColor};
    border-radius: 10px;
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

const CategoryBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;

    .categoryMessage {
        width: inherit;
        align-items: flex-start;
        padding: 3px 5px;
        margin-left: 8px;
        margin-bottom: 5px;
        border-radius: 5px;
        background-color: ${(props) => props.theme.ItemActiveColor};
    };

    select {
        width: 250px;
        height: 25px;
        margin-left: 8px;
        border-radius: 5px;
    }
`;

export default function SpotEditPage(){
    const Navigate = useNavigate();
    const GetTravelDate = TravelDates;
    const {setShowNested} = useStore(ShowNestedStore);

    const [DateValue, setDateValue] = useState("");

    const {register, setValue, handleSubmit} = useForm();

    const Closed = () => {
        setShowNested(false);
        Navigate("..")
    }

    return ( 
        <Container >
            <Headers>
                <CloseBtn onClick={Closed}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={"20"} height={"20"} fill="#ffffff">
                        <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/>
                    </svg>
                </CloseBtn>
            </Headers>
            <CategoryBox>
                <div className="categoryMessage">날짜 선택 / 카테고리 선택</div>
                <select>
                    {
                        GetTravelDate.map((data) => {
                            return <option>{data}</option>
                        })
                    }
                </select>
            </CategoryBox>
        </Container>
    );
};