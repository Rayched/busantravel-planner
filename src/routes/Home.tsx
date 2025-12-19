import styled from "styled-components";
import OutletLayout from "./OutletLayout";
import TripDuration from "../components/Home/TripDuration";
import Trains from "../components/Home/Trains";

export default function Home(){
    return (
        <OutletLayout>
            <TripDuration />
            <Trains />
        </OutletLayout>
    );
}