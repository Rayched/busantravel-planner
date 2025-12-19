import styled from "styled-components";

const Container = styled.div`
    width: 85%;
    max-width: 320px;
    height: 25%;
    margin: 10px 0px;
    border-radius: 15px;
    background-color: ${(props) => props.theme.ItemColor};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Ticket(){
    return (
        <Container>
            
        </Container>
    );
};