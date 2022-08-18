import styled from "styled-components";
import { CheckboxProps, scales } from "./types";

const getScale = ({ scale }: CheckboxProps) => {
  switch (scale) {
    case scales.SM:
      return "24px";
    case scales.MD:
    default:
      return "32px";
  }
};

const Checkbox = styled.input.attrs({ type: "checkbox" }) <CheckboxProps>`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${getScale};
  width: ${getScale};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: 4px solid #6C60F6;
  background-color: transparent;
  box-shadow: ${({ theme }) => theme.shadows.inset};

  &:after {
    content: "";
    position: absolute;
    border-bottom: 4px solid;
    border-left: 4px solid;
    border-color: transparent;
    top: 30%;
    left: 0;
    right: 0;
    width: 70%;
    height: 35%;
    margin: auto;
    transform: rotate(-50deg);
    transition: border-color 0.2s ease-in-out;
  }

  &:checked {
    background-color: #6C60F6;
    &:after {
      border-color: white;
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;

Checkbox.defaultProps = {
  scale: scales.MD,
};

export default Checkbox;
