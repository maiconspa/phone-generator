import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const InputGroupContainer = styled.div`
    display: grid;
    grid-template-columns: 50px 200px 30px 30px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    label {
        display: block;
        font-weight: bold;
        margin-bottom: -5px;
    }

    input {
        display: block;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #7336ff;
        font-size: 18px;
        border-radius: 2px;
        padding: 5px;
        color: #fff;
        width: 100%;

        :focus {
            outline: none;
            border-bottom: 3px solid #7336ff;
        }
    }

    button {
        width: 30px;
        height: 30px;
        border-radius: 10px;
        border: none;
        background: ${COLORS.primary};

        svg {
            color: white;
        }
    }
`;
