import styled from "styled-components";
import { ContainerExtends, ItemHeaders} from "./Commons";
import { GetDayText } from "../../DateFns";

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
    .Texts {};
`;

const TripDurationInfos = {
    DataTitle: "📆 여행 기간",
    DataBodys: [
        {Category: "출발 일", Texts: "2026-01-15"},
        {Category: "복귀 일", Texts: "2026-01-17"}
    ]
}; 


export default function TripDuration(){
    const {DataTitle, DataBodys} = TripDurationInfos;

    return (
        <Container>
            <ItemHeaders>{DataTitle}</ItemHeaders>
            <ItemBodys>
                {
                    DataBodys.map((data) => {
                        const Days = GetDayText(data.Texts)

                        return (
                            <ItemBox>
                                <div id={data.Category} className="Category">{data.Category}</div>
                                <div>{`${data.Texts} (${Days})`}</div>
                            </ItemBox>
                        );
                    })
                }
            </ItemBodys>
        </Container>
    );
}