import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 154px;
  max-width: 335px;
  border-radius: 8px;
  background: var(--main-last-bg-color);
  padding: 14px 20px 14px 24px;
  margin-bottom: 10px;
  border-left: 4px solid
    ${props => {
      switch (props.priority) {
        case 'low':
          return '#8FA1D0';
        case 'medium':
          return '#E09CB5';
        case 'high':
          return '#BEDBB0';
        case 'without':
          return 'var(--item-span-color)'; 
        default:
          break
      }
    }};
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color:  var(--last-text-color); 
  font-size: 12px;
  line-height: 1.3;
  width: 290px;
  word-wrap: break-word;
  padding-bottom: auto;
`;

export const Tools = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--main-line-color); 
  margin-top: 14px;
  padding-top: 14px;
`;

export const ToolsTitle = styled.h3`
  color:  var(--last-text-color); 
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
  color: var(--first-text-color);
  background-color: transparent;
  border: none;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1),
  scale 500ms cubic-bezier(0.4, 0, 0.2, 1);

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
      case 'low':
        return '#8FA1D0';
      case 'medium':
        return '#E09CB5';
      case 'high':
        return '#BEDBB0';
      case 'without':
        return 'var(--item-span-color)'; 
      default:
        break;
    }
  }};
`;
