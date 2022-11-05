import { useSprings } from '@react-spring/web';
import { Flashcard } from '@ui/types';
import { isNegative } from '@ui/utils/is-negative';
import { useGesture } from '@use-gesture/react';
import { useMemo, useState } from 'react';
import QuizDeckCard from './quiz-deck-card';
import { SwipeDirection, SwipeProps } from './quiz-types';

type QuizDeckProps = {
  cards: Flashcard[];
  onSwiped: (props: SwipeProps) => void;
}

const QuizDeck = ({ cards, onSwiped }: QuizDeckProps): JSX.Element => {
  console.log(cards);
  const memoizedCards = useMemo(() => {
    return {
      cards,
      cardsTotal: cards.length
    }
  }, [cards])

  const [gone] = useState(() => new Set())
  const [springs, api] = useSprings(memoizedCards.cards.length, i => ({
    from: {
      x: 0,
      y: -100,
      scale: 0,
      shadow: 0,
      zIndex: 0
    },
    to: {
      x: 0,
      y: i * -2,
      delay: i * 10,
      scale: 1,
      shadow: i < 3 ? 5 : 0,
      zIndex: i
    }
  }))

  console.log('springs', springs.length)
  console.log('memoizedCards', memoizedCards.cards.length);

  const bind = useGesture(
    {
      onDrag: ({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
        const trigger = vx > 0.2
        if (!active && trigger) gone.add(index);

        api.start(i => {
          if (index !== i) return;

          const isGone = gone.has(index);
          const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
          const scale = active ? 1.05 : 1;

          if (isGone) {
            const id: number = memoizedCards.cards[index].id;
            const direction: SwipeDirection = isNegative(x) ? 'left' : 'right';
            onSwiped({ id, direction });
          }

          return {
            x,
            scale,
            delay: undefined,
            config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
          }
        })
      }
    })

  return (
    <>
      {
        springs.map((props, i) => (
          < QuizDeckCard
            card={memoizedCards.cards[i]}
            key={`deck-${i}`}
            {...bind(i)}
            style={props}
          />
        ))
      }
    </>
  )
}

export default QuizDeck;
