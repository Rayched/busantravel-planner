import {styled} from "styled-components";
import {motion} from "framer-motion";

interface I_OutletLayout {
    children: React.ReactNode;
};

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.bgColor};
    border-radius: 15px;
    width: 90%;
    height: 85%;
    margin-top: 10px;
`;

const Variants = {
    "init": {
        y: 20,
        opacity: 0
    },
    "animate": {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.5
        }
    },
    "exit": {
        opacity: 0
    },
};

export default function OutletLayout({children}: I_OutletLayout){
    return (
        <Container 
            variants={Variants} 
            initial="init" 
            animate="animate" 
            exit="exit"
            transition={{type: "tween"}}
        >{children}</Container>
    );
}