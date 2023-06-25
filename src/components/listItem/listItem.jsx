import { Container, Title, Text, Tools, ToolsTitle, ToolsText, ButtonList, Button } from "./listItem.styled";
import sprite from "../../images/symbol-defs.svg";

export const ListItem = ({ id, title, text }) => {
 
  return (
    <Container>
      <Title>The Watch Spot Design</Title> 
      <Text>vative, and reflective of the latest trends in watch design.</Text>
      <Tools> 
        <div>
        <ToolsTitle>
        Priority
        </ToolsTitle>
        <ToolsText>Low</ToolsText>
        </div>
        <div>
        <ToolsTitle>
        Deadline
        </ToolsTitle>
        <ToolsText>12/05/2023</ToolsText>
        </div>   
        <ButtonList>
         <li>
            <Button>
            <svg
            aria-label="icon arrow with circle"
            width="16px"
            height="16px"
          >
            <use href={sprite + "#icon-arrow-circle-broken-right"}></use>
          </svg>
            </Button>
        </li>
         <li>
        <Button>
         <svg
            aria-label="icon pencil"
            width="16px"
            height="16px"
          >
            <use href={sprite + "#icon-pencil-01"}></use>
          </svg>
            </Button>
        </li>
        <li>
            <Button>
            <svg
            aria-label="icon trash"
            width="16px"
            height="16px"
          >
            <use href={sprite + "#icon-trash-04"}></use>
          </svg>   
        </Button>
        </li>   
        </ButtonList>
      </Tools>

    </Container>
  );
};