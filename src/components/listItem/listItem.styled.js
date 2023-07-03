import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 335px;
  border-radius: 8px;
  background: var(--main-last-bg-color);
  padding: 14px 20px 14px 24px;
  margin-bottom: 10px;
  border-left: 4px solid ${props => {
    switch (props.priority) {
      case "low":
        return '#8FA1D0';
      case "medium":
        return '#E09CB5';
      case "high":
      return '#BEDBB0';
      default:
        return "rgba(255, 255, 255, 0.30";
    }
  }}
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  line-height: 1.3;
  border-bottom: 1px solid #ffffff1a;
  padding-bottom: 14px;
  margin-bottom: 14px;
`;

export const Tools = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ToolsTitle = styled.h3`
  color: rgba(255, 255, 255, 0.5);
  font-size: 8px;
  letter-spacing: -0.16px;
  margin-bottom: 5px;
`;

export const ToolsText = styled.p`
  font-size: 10px;
`;

export const ButtonList = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  column-gap: 8px;
  align-items: center; 
`;
export const Button = styled.button`
  padding: 0;
  color: #ffffff;
  background-color: transparent;
  border: none;

`;
export const Span = styled.span`
  display: inline-block;
  vertical-align: bottom;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 3px;
  background-color: ${props => {
    switch (props.priority) {
      case "low":
        return '#8FA1D0';
      case "medium":
        return '#E09CB5';
      case "high":
      return '#BEDBB0';
      default:
        return "rgba(255, 255, 255, 0.30";
    }
  }} 
`;
