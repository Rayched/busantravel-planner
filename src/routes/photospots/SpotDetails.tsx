import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    width: 100dvw;
    height: 100dvh;
`;

const Box = styled.div`
    width: 100px;
    height: 100px;
    color: black;
    background-color: white;
    border-radius: 10px;
`;

export default function SpotDetails(){
    const {spotId} = useParams();
    const Navigate = useNavigate();

    return (
        <Wrapper onClick={() => Navigate("..")}>
            <Box>{spotId}</Box>
        </Wrapper>
    );
}