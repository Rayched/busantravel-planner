import styled from "styled-components";

interface I_PlaceData {
    placeNm: string;
    placeURL: string;
    placeDatas: string[];
};

interface I_PlaceInfo {
    TargetDt: string;
    PlaceDatas: I_PlaceData[];
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.bgColor};
    border-radius: 15px;
    width: 90%;
    height: 85%;
    margin-top: 10px;
`;

export default function PlaceInfoPage(){
    return (
        <Container></Container>
    );
}