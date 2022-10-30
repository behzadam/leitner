import { Box, BoxProps, styled, Typography } from '@mui/material';
import { animated, SpringValue } from '@react-spring/web';

const Deck = animated(styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  maxWidth: '300px',
  aspectRatio: '3 / 4',
  willChange: 'transform',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  backgroundColor: 'white',
  borderRadius: '0.3rem',
  boxShadow: '0 4px 4px 0px rgba(50, 50, 73, 0.05)'
})));

const DeckContent = animated(styled(Box)<BoxProps>(() => ({
  willChange: 'transform',
  touchAction: 'none',
  border: '2px solid #000'
})));

type QuizCardProps = {
  x: SpringValue<number>;
  y: SpringValue<number>;
}

const QuizCard = ({ x, y, ...props }: QuizCardProps): JSX.Element => {
  return (
    <Deck style={{ x, y }} {...props} >
      <DeckContent>
        <Typography sx={{ fontSize: 16 }} variant="h6" component="div">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
        </Typography>
      </DeckContent>
    </Deck>
  )
}

export default QuizCard;