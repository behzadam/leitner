import { useSprings } from '@react-spring/web';
import { Flashcard } from '@ui/types';
import { isNegative } from '@ui/utils/is-negative';
import { useGesture } from '@use-gesture/react';
import { useState } from 'react';
import { QuizDeckCard } from './quiz-deck-card';
import { SwipeDirection } from './quiz-types';

type QuizDeckProps = {
  cards: Flashcard[];
  onSwiped: () => void;
}

const QuizDeck = ({ cards, onSwiped }: QuizDeckProps): JSX.Element => {
  const [gone] = useState(() => new Set())
  const [springs, api] = useSprings(cards.length, i => ({
    from: {
      x: 0,
      y: -100,
    },
    to: {
      x: 0,
      y: 0,
      zIndex: cards.length - i
    }
  }))

  console.log('springs', springs.length)
  console.log('memoizedCards', cards.length);

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
            const id: number = cards[index].id;
            const direction: SwipeDirection = isNegative(x) ? 'left' : 'right';
            onSwiped();
          }

          return {
            x,
            config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
          }
        })
      }
    })

  return (
    <>
      {
        cards.map((card, i) => (
          < QuizDeckCard
            key={card.id}
            {...bind(i)}
            style={springs[i]}
            card={card}
          />
        ))
      }
    </>
  )
}

export default QuizDeck;
