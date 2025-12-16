import { motion, scale } from "framer-motion";
import { Link, useLocation, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";

type I_URLList = {
    path: string;
    name: string;
};

interface I_LinkItem {
    pathMatchs: boolean;
};

const NavBox = styled(motion.div)`
    width: 160px;
    height: 200px;
    background-color: white;
    position: absolute;
    top: 1.5%;
    right: 3%;
    border-radius: 15px;
`;

const LinkItemBox = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const LinkItem = styled.li<I_LinkItem>`
    width: 80%;
    height: 50%;
    padding: 3px;
    margin: 5px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: ${(props) => props.pathMatchs ? "gray" : "white"};
    border-radius: 15px;
    font-weight: bold;
`;

const NavBoxVariants = {
    "init": {
        opacity: 0,
        scale: 0.8
    },
    "animate": {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.1
        }
    },
    "exit": {
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.1
        }
    },
    "transition": {
        type: "spring"
    }
};

const URLList: I_URLList[] = [
    {path: "/transport", name: "🚄 교통편"},
    {path: "/hotels", name: "🏠 숙소"},
    {path: "/details", name: "📑 상세 계획"}
];

function NavigationBar(){
    const pathname = useLocation();
    const Navigate = useNavigate();

    const LinkClicks = (path: string) => {
        setTimeout(() => Navigate(path), 150);
    }

    return (
        <NavBox 
            variants={NavBoxVariants}
            initial="init"
            animate="animate"
            exit={"exit"}
        >
            <LinkItemBox>
                {
                    URLList.map((data) => {
                        const isMatchs = pathname.pathname === data.path;
                        return (
                            <LinkItem key={data.name} pathMatchs={isMatchs} onClick={() => LinkClicks(data.path)}>
                                {data.name}
                            </LinkItem>
                        );
                    })
                }
            </LinkItemBox>
        </NavBox>
    );
}

export default NavigationBar;