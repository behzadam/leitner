import { Box, BoxProps, styled } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import { Flashcard } from '@ui/types';
import React from 'react';


const FlipCard = animated(styled(Box)<BoxProps>(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  borderRadius: '1.5rem',
  userSelect: 'none',
  cursor: 'grab',
  backgroundColor: 'white',
})));

const FlipCardContent = animated(styled(Box)<BoxProps>(() => ({
  width: '100%',
  height: '100%',
  touchAction: 'none',
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.5rem',
  textAlign: 'center',
  willChange: 'transform, opacity'
})));

type QuizDeckCardProps = {
  card: Flashcard,
}

function cardsAreEqual(prevCard: QuizDeckCardProps, nextCard: QuizDeckCardProps) {
  return prevCard.card.flipped === nextCard.card.flipped;
}

const QuizDeckCardMemoed = ({ card, ...props }: QuizDeckCardProps): JSX.Element => {
  const { transform, opacity } = useSpring({
    opacity: card.flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${card.flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <FlipCard {...props}>
      <FlipCardContent
        style={{
          opacity: opacity.to(op => 1 - op),
          transform
        }}>
        <strong>Front: {card.id}</strong>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
        </p>
      </FlipCardContent>
      <FlipCardContent
        style={{
          opacity,
          transform,
          rotateY: '180deg'
        }}>
        <strong>Back</strong>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
        </p>
      </FlipCardContent>
    </FlipCard>
  )
};

export const QuizDeckCard = React.memo(QuizDeckCardMemoed, cardsAreEqual);