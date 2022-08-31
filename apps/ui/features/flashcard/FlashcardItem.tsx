import { Box, Card, CardActions, CardContent, Chip, Divider, Grid, IconButton, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { useState } from "react";
import Show from "@ui/components/Show";
import IconButtonRounded from "@ui/components/IconButtonRounded";

type FlashcardItemProps = {
  onRemember?: (id: number, rememberedIt: boolean) => void
}

const FlashcardItem = ({
  onRemember
}: FlashcardItemProps): JSX.Element => {
  const [showBack, setShowBack] = useState<boolean>(true);

  const handleShowBack = (): void => {
    setShowBack(!showBack);
  }

  return (
    <Card sx={{ minWidth: 275, border: 'none' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', py: 4 }}>
          <Typography sx={{ fontSize: 16 }} variant="h6" component="div">
            Front
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }}>
          <IconButton sx={{ border: 'none' }} onClick={handleShowBack} >
            <Show when={showBack}>
              <LockOpenTwoToneIcon color="info" />
            </Show>
            <Show when={!showBack}>
              <LockIcon />
            </Show>
          </IconButton>
        </Divider>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', py: 2 }}>
          <Show when={showBack}>
            <Typography variant="body2">
              back
            </Typography>
          </Show>
        </Box>
      </CardContent>
      <CardActions>
        <Grid container sx={{ maxWidth: 200, mx: 'auto', py: 1 }}>
          <Grid item xs={6} container justifyContent="center" alignItems="center">
            <IconButtonRounded onClick={() => onRemember(1, false)} aria-label="skip" color="error">
              <CloseIcon />
            </IconButtonRounded>
          </Grid>
          <Grid item xs={6} container justifyContent="center" alignItems="center">
            <IconButtonRounded onClick={() => onRemember(1, true)} aria-label="remember it" color="success">
              <CheckIcon />
            </IconButtonRounded>
          </Grid>
        </Grid>
      </CardActions>
    </Card >
  )
}

export default FlashcardItem;