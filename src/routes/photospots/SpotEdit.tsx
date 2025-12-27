import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TravelDates } from "./Photospots";
import { useStore } from "zustand";
import { ShowNestedStore } from "../../Photospots_data";

const Box = styled.div`
    width: 200px;
    height: 300px;
    border-radius: 10px;
    background-color: white;
`;

export default function SpotEditPage(){
    const Navigate = useNavigate();
    const GetTravelDate = TravelDates;
    const {setShowNested} = useStore(ShowNestedStore);

    const Closed = () => {
        setShowNested(false);
        Navigate("..")
    }

    return ( 
        <Box onClick={Closed}>

        </Box>
    );
};