import styled from "styled-components";
import OutletLayout from "./OutletLayout";
import Ticket from "../components/Transport/Ticket";

function TransportPage(){
    return (
        <OutletLayout>
            <Ticket />
            <Ticket />
        </OutletLayout>
    );
};

export default TransportPage