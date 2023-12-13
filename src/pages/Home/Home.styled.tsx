import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const HomeContainer = styled.div`
    background-color: #343439;
    padding: 40px 50px;
    min-width: 470px;
    color: #efefef;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.389);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    >button {
        background-color: #7336ff;
        border: none;
        padding: 12px 20px;
        border-radius: 4px;
        width: 100%;
        margin: 20px 0px;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;  

    }
`;

export const InputArea = styled.div`
    height: 300px;
    overflow-y: auto;
    width: -webkit-fill-available;
`

export const OptionsArea = styled.div`
    display: block;
    width: -webkit-fill-available;

    > div {
        display: flex;
        margin-bottom: 20px;
        justify-content: space-between;
    }

    button {
        padding: 12px 20px;
        align-items: center;
        display: flex;
        width: auto;
        height: 50px;
        border-radius: 10px;
        border: none;
        background: ${COLORS.secondary};
    }
`