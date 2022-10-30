import { Box, BoxProps, styled } from '@mui/material';
import { useSprings } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { useState } from 'react';
import QuizCard from './quiz-card';

const Container = styled(Box)<BoxProps>(() => ({
  width: '100vw',
  height: 'calc(100vh - 48px)',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const cards = Array.of(1, 2, 3, 4, 5, 6, 7, 8)

const QuizDeck = (): JSX.Element => {
  const [gone] = useState(() => new Set())
  const [props, api] = useSprings(cards.length, i => ({
    from: {
      x: 0,
      y: -100,
      shadow: 1
    },
    to: {
      x: 0,
      y: i * -1,
      delay: i * 10,
      shadow: 15
    }
  }))

  const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
    const trigger = vx > 0.2
    if (!active && trigger) gone.add(index)
    api.start(i => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
      return {
        x,
        delay: undefined,
        config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
      }
    })
  })

  return (
    <Container>
      {props.map(({ x, y }, i) => (
        <QuizCard key={i} x={x} y={y} {...bind(i)} />
      ))}
    </Container>
  )
}

export default QuizDeck;
