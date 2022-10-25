import { Box, Typography } from '@mui/material';
import Show from '@ui/components/Show';
import { useState } from 'react';

const QuizListItem = (): JSX.Element => {
  const [showBack, setShowBack] = useState<boolean>(false);

  return (
    <Box sx={{ minHeight: 270 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', p: 3 }}>
        <Typography sx={{ fontSize: 16 }} variant="h6" component="div">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', p: 3 }}>
        <Show when={showBack}>
          <Typography variant="body2">
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
          </Typography>
        </Show>
      </Box>
    </Box>
  )
}

export default QuizListItem;