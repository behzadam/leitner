import { useSprings } from '@react-spring/web';
import { useAppDispatch } from '@ui/store/index';
import { Flashcard } from '@ui/types';
import { useDrag } from '@use-gesture/react';
import { useMemo, useState } from 'react';
import QuizDeckCard from './quiz-deck-card';
import { onSwiped } from './quiz-slice';

type QuizDeckType = {
  cards: Flashcard[]
}

const QuizDeck = ({ cards }: QuizDeckType): JSX.Element => {
  const dispatch = useAppDispatch();
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
      shadow: 0
    },
    to: {
      x: 0,
      y: i * -2,
      delay: i * 10,
      scale: 1,
      shadow: i < 3 ? 5 : 0,
      zIndex: memoizedCards.cardsTotal - i
    }
  }))

  const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
    const trigger = vx > 0.2
    if (!active && trigger) {
      gone.add(index);
      dispatch(onSwiped());
    }
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
    <>
      {
        springs.map((props, i) => (
          <QuizDeckCard
            card={memoizedCards.cards[i]}
            key={i}
            {...bind(i)}
            style={props} />
        ))
      }
    </>
  )
}

export default QuizDeck;
