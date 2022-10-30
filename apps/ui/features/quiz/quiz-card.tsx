import { Box, BoxProps, styled, Typography } from '@mui/material';
import { animated } from '@react-spring/web';

const Deck = animated(styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  width: '280px',
  height: '373px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem',
  backgroundColor: 'white',
  borderRadius: '0.3rem'
})));

const DeckContent = styled(Box)<BoxProps>(() => ({
  willChange: 'transform',
  touchAction: 'none'
}));


const QuizCard = ({ ...props }): JSX.Element => {
  return (
    <Deck {...props}>
      <DeckContent>
        <Typography variant="body2">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
        </Typography>
      </DeckContent>
    </Deck>
  )
}

export default QuizCard;