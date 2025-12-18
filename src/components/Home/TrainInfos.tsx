import styled from "styled-components";

interface I_DataBodys {
    Category: string;
    Texts: string[];
};

interface I_TrainInfos {
    DataTitle: string;
    DataBodys: I_DataBodys[];
};

const Container = styled.div`
    color: ${(props) => props.theme.ItemTextColor};
    background-color: ${(props) => props.theme.ItemColor};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

const ItemHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ItemBodys = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TrainInfos: I_TrainInfos = {
    DataTitle: "🚄 교통편",
    DataBodys: [
        {
            Category: "FirstDay", 
            Texts: [
                "출발", "2026-01-15", "수원역"
            ]
        },
        {Category: "LastDay", Texts: [""]}
    ]
};

export default function Trains(){
    const {DataTitle} = TrainInfos;

    return (
        <Container>
            <ItemHeader>{DataTitle}</ItemHeader>
            <ItemBodys></ItemBodys>
        </Container>
    );
};