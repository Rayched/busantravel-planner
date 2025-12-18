import styled from "styled-components";

const Container = styled.div`
    color: ${(props) => props.theme.ItemTextColor};
    background-color: ${(props) => props.theme.ItemColor};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 30%;
    max-width: 400px;
    max-height: 100px;
`;

const ItemHeaders = styled.div`
    font-weight: bold;
    width: 85%;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px 0px;
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

const DayText = ["일", "월", "화", "수", "목", "금", "토"];

export default function TripDuration(){
    const {DataTitle, DataBodys} = TripDurationInfos;

    return (
        <Container>
            <ItemHeaders>{DataTitle}</ItemHeaders>
            <ItemBodys>
                {
                    DataBodys.map((data) => {
                        const TargetDt = new Date(data.Texts);
                        const Days = TargetDt.getDay();

                        return (
                            <ItemBox>
                                <div id={data.Category} className="Category">{data.Category}</div>
                                <div>{`${data.Texts} (${DayText[Days]})`}</div>
                            </ItemBox>
                        );
                    })
                }
            </ItemBodys>
        </Container>
    );
}