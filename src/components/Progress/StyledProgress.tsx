import styled from "styled-components";

interface BarProps {
  primary?: boolean;
}

export const Bar = styled.div<BarProps>`
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, #89FFE3 0%, #BEFF74 53.12%, #FFF174 96.87%);
  border-radius: 32px;
  height: 8px;
  transition: width 200ms ease;
`;

Bar.defaultProps = {
  primary: false,
};

const StyledProgress = styled.div`
  position: relative;
  background-color: #3924B5;
  border-radius: 32px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  height: 8px;
  overflow: hidden;
`;

export default StyledProgress;
