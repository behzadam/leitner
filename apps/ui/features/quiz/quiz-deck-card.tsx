import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Box, BoxProps, IconButton, IconButtonProps, styled } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import Show from '@ui/components/Show';
import { useState } from 'react';

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
  justifyContent: 'center',
  alignItems: 'center',
  willChange: 'transform, opacity'
})));

const FlipCardAction = styled(IconButton)<IconButtonProps>(() => ({
  marginTop: 'auto',
  marginBottom: '1rem'
}))

const QuizDeckCard = ({ ...props }): JSX.Element => {
  const [flipped, setFlipped] = useState<boolean>(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleToggleCard = (): void => {
    setFlipped(flipped => !flipped);
  }

  return (
    <FlipCard {...props}>
      <FlipCardContent
        style={{
          opacity: opacity.to(op => 1 - op),
          transform
        }}>
        <p>Front</p>
      </FlipCardContent>
      <FlipCardContent
        style={{
          opacity,
          transform,
          rotateY: '180deg'
        }}>
        <p>Back</p>
      </FlipCardContent>
      <FlipCardAction onClick={handleToggleCard}>
        <Show when={!flipped}>
          <RemoveRedEyeOutlinedIcon />
        </Show>
        <Show when={flipped}>
          <VisibilityOffOutlinedIcon />
        </Show>
      </FlipCardAction>
    </FlipCard>
  )
}

export default QuizDeckCard;