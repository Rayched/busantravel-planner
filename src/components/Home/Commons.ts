//Home, 중복 style 추출한 component's

import styled from "styled-components";

export const ContainerExtends = styled.div`
    color: ${(props) => props.theme.ItemTextColor};
    background-color: ${(props) => props.theme.ItemColor};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 400px;
`;

export const ItemHeaders = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 30px;
    padding: 5px 0px;
    font-weight: bold;
`;