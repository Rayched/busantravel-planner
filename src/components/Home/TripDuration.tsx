import styled from "styled-components";
import { ContainerExtends, ItemHeaders} from "./Commons";
import { GetDayText } from "../../DateFns";
import { PlannerData } from "../../PlannerData";
import { Link } from "react-router-dom";

const Container = styled(ContainerExtends)`
    height: 30%;
    max-height: 100px;
`;

const ItemBodys = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: 65px;
`;

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 10px 0px;
    .Category {
        font-weight: bold;
        margin-bottom: 3px;
    };
`;


export default function TripDuration(){
    const {DefaultData} = PlannerData;

    return (
        <Container>
            <ItemHeaders>
                <Link to={"/dailyplans"}>📆 여행 기간</Link>
            </ItemHeaders>
            <ItemBodys>
                {
                    DefaultData.map((data) => {
                        const Days = GetDayText(data.DateText)

                        return (
                            <ItemBox key={data.categoryId}>
                                <div className="Category">{data.categoryNm}</div>
                                <div>{`${data.DateText} (${Days})`}</div>
                            </ItemBox>
                        );
                    })
                }
            </ItemBodys>
        </Container>
    );
}