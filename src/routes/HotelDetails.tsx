import styled from "styled-components";
import OutletLayout from "./OutletLayout";
import { useState } from "react";
import { PlannerData } from "../PlannerData";
import { GetDayText } from "../DateFns";

const Container = styled.div`
    width: 85%;
    max-width: 350px;
    height: 60%;
    color: ${(props) => props.theme.ItemTextColor};
    background-color: ${(props) => props.theme.ItemColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    padding: 3px 0px;
`;

const HotelsHeader = styled.div`
    width: 90%;
    max-width: 300px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    border-bottom: 1px solid ${(props) => props.theme.ItemTextColor};
    padding-bottom: 10px;
`;

const HotelsDataBox = styled.div`
    width: 90%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DataCols = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 5px;
    color: ${(props) => props.theme.ItemTextColor};
    background-color: ${(props) => props.theme.ItemActiveColor};
    border: 2px solid ${(props) => props.theme.ItemActiveColor};
    border-radius: 15px;
    .title {
        background-color: ${(props) => props.theme.ItemColor};
        border-top-right-radius: inherit;
        border-top-left-radius: inherit;
        width: 100%;
        text-align: center;
        font-weight: bold;
        padding: 4px 0px;
        margin-bottom: 5px;
    };

    .bodys {
        padding-bottom: 5px;
    }
`;

function HotelsPage(){
    const [isShow, setShow] = useState(false);

    const {
        hotelNm, hotelAddress, hotelDetailAddress,
        CheckIn, CheckOut
    } = PlannerData.hotelsData;

    const CheckInTime = `${CheckIn.Dates} (${GetDayText(CheckIn.Dates)}) ${CheckIn.Times}`;
    const CheckOutTime = `${CheckOut.Dates} (${GetDayText(CheckOut.Dates)}) ${CheckOut.Times}`;
    return (
        <OutletLayout>
            <Container>
                <HotelsHeader>숙소 상세정보</HotelsHeader>
                <HotelsDataBox>
                    <DataCols>
                        <div className="title">숙소 명</div>
                        <div className="bodys">{hotelNm}</div>
                    </DataCols>
                    <DataCols>
                        <div className="title">주소지</div>
                        <div className="bodys">{`${hotelAddress}`}</div>
                    </DataCols>
                    <DataCols>
                        <div className="title">체크인</div>
                        <div className="bodys">{CheckInTime}</div>
                    </DataCols>
                    <DataCols>
                        <div className="title">체크아웃</div>
                        <div className="bodys">{CheckOutTime}</div>
                    </DataCols>
                </HotelsDataBox>
            </Container>
        </OutletLayout>
    );
}

export default HotelsPage;