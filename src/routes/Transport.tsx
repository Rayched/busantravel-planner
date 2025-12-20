import styled from "styled-components";
import OutletLayout from "./OutletLayout";
import Ticket from "../components/Transport/Ticket";
import { PlannerData } from "../PlannerData";
import { GetDayText } from "../DateFns";

function TransportPage(){
    const {transportData} = PlannerData;

    return (
        <OutletLayout>
            {
                transportData.map((data) => {
                    return (
                        <Ticket {...data}/>
                    );
                })
            }
        </OutletLayout>
    );
};

export default TransportPage