import styled from "styled-components";
import OutletLayout from "./Layouts/OutletLayout";
import TripDuration from "../components/Home/TripDuration";
import Trains from "../components/Home/Trains";
import Hotels from "../components/Home/Hotels";

export default function Home(){
    return (
        <OutletLayout>
            <TripDuration />
            <Trains />
            <Hotels />
        </OutletLayout>
    );
}