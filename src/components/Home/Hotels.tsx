import styled from "styled-components";
import { ContainerExtends, ItemHeaders } from "./Commons";
import { PlannerData } from "../../PlannerData";
import { GetDayText } from "../../DateFns";

const Container = styled(ContainerExtends)`
    justify-content: flex-start;
    margin-top: 10px;
    height: 190px;
`;

const ItemBodys = styled.div`
    width: 90%;
    height: 130px;
    border-radius: 15px;
    background-color: ${(props) => props.theme.ItemActiveColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
`;

const DataCols = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    .heads {
        
        margin: 3px 0px;
    }

    .bodys {
        margin: 3px 0px;
    };
`;

export default function Hotels(){
    const {
        hotelNm, hotelAddress, CheckIn, CheckOut
    } = PlannerData.hotelsData;

    const CheckInDays = GetDayText(CheckIn.Dates);
    const CheckOutDays = GetDayText(CheckOut.Dates);

    return (
        <Container>
            <ItemHeaders>🏠 숙소</ItemHeaders>
            <ItemBodys>
                <DataCols>
                    <div className="heads">숙소 명</div>
                    <div className="heads">주소</div>
                    <div className="heads">체크인</div>
                    <div className="heads">체크아웃</div>
                </DataCols>
                <DataCols>
                    <div className="bodys">{hotelNm}</div>
                    <div className="bodys">{hotelAddress}</div>
                    <div className="bodys">
                        {`${CheckIn.Dates} (${CheckInDays}) ${CheckIn.Times}`}
                    </div>
                    <div className="bodys">
                        {`${CheckOut.Dates} (${CheckOutDays}) ${CheckOut.Times}`}
                    </div>
                </DataCols>
            </ItemBodys>
        </Container>
    );
}