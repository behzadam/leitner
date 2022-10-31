import { Box, BoxProps, styled, Typography } from '@mui/material';
import { animated } from '@react-spring/web';

const Deck = animated(styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  maxWidth: '320px',
  aspectRatio: '3 / 4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem',
  backgroundColor: 'white',
  borderRadius: '1.5rem'
})));

const DeckContent = styled(Box)<BoxProps>(() => ({
  willChange: 'transform',
  touchAction: 'none'
}));


const QuizDeckCard = ({ ...props }): JSX.Element => {
  return (
    <Deck {...props}>
      <DeckContent>
        <Typography variant="body1">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
        </Typography>
      </DeckContent>
    </Deck>
  )
}

export default QuizDeckCard;