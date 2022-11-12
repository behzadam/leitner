import { Box, BoxProps, styled } from '@mui/material';
import { useSprings } from '@react-spring/web';
import { Flashcard } from '@ui/types';
import { isNegative } from '@ui/utils/is-negative';
import { useGesture } from '@use-gesture/react';
import { useState } from 'react';
import QuizDeckActions from './quiz-deck-actions';
import { QuizDeckCard } from './quiz-deck-card';
import QuizDeckSuccess from './quiz-deck-success';
import QuizDeckToolbar from './quiz-deck-toolbar';
import { SwipeDirection } from './quiz-types';

const QuizDeckWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  touchAction: 'none'
}));

const QuizDeckInner = styled(Box)<BoxProps>(({ theme }) => ({
  aspectRatio: '0.8',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px,1fr))',
  position: 'relative',
  backgroundColor: theme.palette.grey[200],
  borderRadius: '1.5rem',
}));

type QuizDeckProps = {
  cards: Flashcard[];
  onSwiped: (direction: SwipeDirection) => void;
}

const swipeDirection = (x: number): SwipeDirection => isNegative(x) === true ? 'left' : 'right';

const QuizDeck = ({ cards, onSwiped }: QuizDeckProps): JSX.Element => {
  const [gone] = useState(() => new Set())
  const [springs, api] = useSprings(cards.length, i => ({
    from: {
      x: 0,
      y: 0
    },
    to: {
      x: 0,
      y: 0,
      zIndex: cards.length - i
    }
  }))

  const bind = useGesture(
    {
      onDrag: ({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
        const trigger = vx > 0.2
        if (!active && trigger) gone.add(index);

        api.start(i => {
          if (index !== i) return;

          const isGone = gone.has(index);
          const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;

          if (isGone) {
            onSwiped(swipeDirection(x));
          }

          return {
            x,
            config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
          }
        })
      }
    })

  const handleRemember = (index: number, isRemembered: boolean): void => {
    api.start(i => {
      if (index !== i) return;
      // left or right
      const width = (200 + window.innerWidth);
      const x = isRemembered === true ? width * -1 : width * 1;

      onSwiped(swipeDirection(x));

      return {
        x,
        config: { friction: 50, tension: 150 },
      }
    })
  }

  return (
    <QuizDeckWrapper>
      <QuizDeckToolbar />
      <QuizDeckInner>
        {
          cards.map((card, i) => (
            <QuizDeckCard
              key={card.id}
              {...bind(i)}
              style={springs[i]}
              card={card}
            />
          ))
        }
        <QuizDeckSuccess />
      </QuizDeckInner>
      <QuizDeckActions onRemember={handleRemember} />
    </QuizDeckWrapper>
  )
}

export default QuizDeck;
