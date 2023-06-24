import { useState } from 'react';
import {
  Container,
  Text,
  Span,
  Button,
  Image,
  TextButton,
  Svg
} from './needHelp.styled';
import background from '../../../images/help.png';
import sprite from '../../../images/symbol-defs.svg';
import { Modal } from 'components/modal/modal';

export const NeedHelp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen)
  }
  return (
    <Container>
      <Image src={background} alt="Logo" />
      <Text>
        If you need help with <Span>TaskPro</Span>, check out our support
        resources or reach out to our customer support team.
      </Text>
      <Button onClick={toggleModal}>
        <Svg aria-label="question with round" width="20px" height="20px">
          <use href={sprite + '#icon-help-circle'}></use>
        </Svg>
        <TextButton>Need help?</TextButton>
      </Button>
      {isOpen && <Modal onClose={toggleModal} children={<h2>Hello</h2>} />}
    </Container>
  );
};

// icon-lightning-02
// icon-login
// icon-pencil-01
// icon-plus
// icon-Project
// icon-puzzle-piece-02
// icon-trash-04
