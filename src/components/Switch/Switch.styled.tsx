import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

export const SwitchContainer = styled.div`
    display: block;

    >p {
      font-weight: bold;
    }

    >div {
        display: flex;
        gap: 10px;
        align-items: center;
    }
`

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${COLORS.secondary};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
    input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
        background-color: ${COLORS.primary};
    }

    &:focus + ${Slider} {
        box-shadow: 0 0 1px ${COLORS.primary};
    }

    &:checked + ${Slider}:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
    }
`;

