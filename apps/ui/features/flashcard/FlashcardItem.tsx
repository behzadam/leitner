import { Box, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Show from "@ui/components/Show";
import IconButtonRounded from "@ui/components/IconButtonRounded";
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';

type FlashcardItemProps = {
  onRemember?: (id: number, rememberedIt: boolean) => void
}

const FlashcardItem = ({
  onRemember
}: FlashcardItemProps): JSX.Element => {
  const [showBack, setShowBack] = useState<boolean>(false);

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
          <Grid item xs={4} container justifyContent="center" alignItems="center">
            <IconButtonRounded onClick={() => onRemember(1, false)} aria-label="skip">
              <CloseIcon />
            </IconButtonRounded>
          </Grid>
          <Grid item xs={4} container justifyContent="center">
            <IconButtonRounded onClick={handleShowBack} aria-label="show card back">
              <Show when={showBack}>
                <VisibilityTwoToneIcon color="info" />
              </Show>
              <Show when={!showBack}>
                <VisibilityOffTwoToneIcon />
              </Show>
            </IconButtonRounded>
          </Grid>
          <Grid item xs={4} container justifyContent="center" alignItems="center">
            <IconButtonRounded onClick={() => onRemember(1, true)} aria-label="remember it" color="success">
              <ThumbUpOffAltOutlinedIcon />
            </IconButtonRounded>
          </Grid>
        </Grid>
      </CardActions>
    </Card >
  )
}

export default FlashcardItem;