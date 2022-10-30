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
      {props.map(({ x, y, scale, shadow }, i) => (
        <QuizCard
          key={i}
          {...bind(i)}
          style={{
            x,
            y,
            scale,
            boxShadow: shadow.to(s => `rgba(0, 0, 0, 0.05) 0px ${s}px ${2 * s}px 0px`),
          }} />
      ))}
    </Container>
  )
}

export default QuizDeck;
