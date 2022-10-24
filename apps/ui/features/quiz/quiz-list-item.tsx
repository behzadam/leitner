import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import { Box, Card, CardActions, CardContent, Divider, Grid, IconButton, IconButtonProps, styled, Typography } from '@mui/material';
import Show from '@ui/components/Show';
import { useState } from 'react';

type QuizListItemProps = {
  onRemember?: (id: number, rememberedIt: boolean) => void
}

const IconButtonOk = styled(IconButton)<IconButtonProps>(() => ({
  boxShadow: 'inset 0px 0px 0px 2px',
  backgroundColor: '#f0fdf4'
}))

const QuizListItem = ({
  onRemember
}: QuizListItemProps): JSX.Element => {
  const [showBack, setShowBack] = useState<boolean>(false);

  const handleShowBack = (): void => {
    setShowBack(!showBack);
  }

  return (
    <Card sx={{ border: 'none' }}>
      <CardContent sx={{ minHeight: '300px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', p: 2 }}>
          <Typography sx={{ fontSize: 16 }} variant="h6" component="div">
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', p: 2 }}>
          <Show when={showBack}>
            <Typography variant="body2">
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
            </Typography>
          </Show>
        </Box>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
        <Grid container sx={{ maxWidth: 200, mx: 'auto', py: 1 }}>
          <Grid item xs={4} container justifyContent="center" alignItems="center">
            <IconButton onClick={() => onRemember(1, false)} aria-label="skip">
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item xs={4} container justifyContent="center">
            <IconButton onClick={handleShowBack} aria-label="show card back">
              <Show when={showBack}>
                <VisibilityTwoToneIcon color="info" />
              </Show>
              <Show when={!showBack}>
                <VisibilityOffTwoToneIcon />
              </Show>
            </IconButton>
          </Grid>
          <Grid item xs={4} container justifyContent="center" alignItems="center">
            <IconButtonOk onClick={() => onRemember(1, true)} aria-label="remember it" color="success">
              <CheckRoundedIcon />
            </IconButtonOk>
          </Grid>
        </Grid>
      </CardActions>
    </Card >
  )
}

export default QuizListItem;