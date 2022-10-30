import { Box, BoxProps, styled, Typography } from '@mui/material';
import { animated } from '@react-spring/web';

const Deck = animated(styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  maxWidth: '280px',
  aspectRatio: '3 / 4',
  willChange: 'transform',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  backgroundColor: 'white',
  borderRadius: '0.3rem'
})));

const DeckContent = styled(Box)<BoxProps>(() => ({
  willChange: 'transform',
  touchAction: 'none',
  border: '2px solid #000'
}));


const QuizCard = ({ ...props }): JSX.Element => {
  return (
    <Deck {...props}>
      <DeckContent>
        <Typography sx={{ fontSize: 16 }} variant="h6" component="div">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
        </Typography>
      </DeckContent>
    </Deck>
  )
}

export default QuizCard;