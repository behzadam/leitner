import { Box, BoxProps, styled } from '@mui/material';
import { useSprings } from '@react-spring/web';
import { Flashcard } from '@ui/types';
import { useDrag } from '@use-gesture/react';
import { useMemo, useState } from 'react';
import QuizActions from './quiz-actions';
import QuizDeckCard from './quiz-deck-card';

const Container = styled(Box)<BoxProps>(() => ({
  width: '100vw',
  height: 'calc(100vh - 48px)',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#d4d4d4'
}));

type QuizDeckType = {
  cards: Flashcard[]
}

const QuizDeck = ({ cards }: QuizDeckType): JSX.Element => {
  const memoizedCards = useMemo(() => {
    return {
      cards
    }
  }, [cards])

  const [gone] = useState(() => new Set())
  const [props, api] = useSprings(memoizedCards.cards.length, i => ({
    from: {
      x: 0,
      y: -100,
      scale: 0,
      shadow: 0
    },
    to: {
      x: 0,
      y: i * -2,
      delay: i * 10,
      scale: 1,
      shadow: i < 3 ? 5 : 0
    }
  }))

  const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
    const trigger = vx > 0.2
    if (!active && trigger) gone.add(index)
    api.start(i => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
      cards[i].isReady = isGone;
      const scale = active ? 1.05 : 1;
      return {
        x,
        scale,
        delay: undefined,
        config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
      }
    })
  })

  return (
    <Container>
      <Box sx={{
        width: 340,
        aspectRatio: '3 / 4',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {props.map(({ x, y, scale, shadow }, i) => (
          <QuizDeckCard
            key={i}
            {...bind(i)}
            style={{
              x,
              y,
              scale,
              boxShadow: shadow.to(s => `rgba(0, 0, 0, 0.05) 0px ${s}px ${2 * s}px 0px`),
            }} />
        ))}
      </Box>
      <Box sx={{ mt: 2 }}>
        <QuizActions />
      </Box>
    </Container>
  )
}

export default QuizDeck;
