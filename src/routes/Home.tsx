import styled from "styled-components";
import OutletLayout from "./OutletLayout";
import TripDuration from "../components/Home/TripDuration";
import TrainInfos from "../components/Home/TrainInfos";
import Trains from "../components/Home/TrainInfos";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3px 5px;
    border-radius: 15px;
    color: ${(props) => props.theme.ItemTextColor};
    background-color: ${(props) => props.theme.ItemColor};
`;

export default function Home(){

    return (
        <OutletLayout>
            <TripDuration />
            <Trains />
        </OutletLayout>
    );
}