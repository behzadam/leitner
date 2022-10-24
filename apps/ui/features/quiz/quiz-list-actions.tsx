import { Chip, ChipProps, Stack, styled } from "@mui/material";
import Show from "@ui/components/Show";
import FlashcardListActionCreate from "../flashcard/flashcard-list-action-create";
import FlashcardListActionStat from "../flashcard/flashcard-list-action-stat";
import { useQuizContext, useQuizEvent } from "./quiz-provider";

const PlayButton = styled(Chip)<ChipProps>(({ theme }) => ({
  boxShadow: 'inset 0px 0px 0px 2px',
  backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
  paddingLeft: 4.2,
  paddingRight: 4.2
}))

const PauseButton = styled(Chip)<ChipProps>(() => ({
  boxShadow: 'inset 0px 0px 0px 2px rgba(0,0,0,0.1)'
}))


const QuizListActions = (): JSX.Element => {
  const { autoplay } = useQuizContext();
  const { onSetAutoplay } = useQuizEvent();

  const handleAutoPlay = (): void => {
    onSetAutoplay(!autoplay)
  }

  return (
    <Stack direction="row" alignItems="center">
      <Show when={!autoplay}>
        <PlayButton variant="filled" label="Start" onClick={handleAutoPlay} size="medium" sx={{ mr: 1 }} />
      </Show>
      <Show when={autoplay}>
        <PauseButton variant="filled" label="Pause" onClick={handleAutoPlay} size="medium" sx={{ mr: 1 }} />
      </Show>
      <FlashcardListActionStat />
      <FlashcardListActionCreate />
    </Stack>
  )
}

export default QuizListActions;