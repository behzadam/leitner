import { Box, Button } from "@mui/material";
import { useDialogEvent } from "@ui/components/dialog/dialog.provider";


const FlashcardFormActions = (): JSX.Element => {
  const { onCloseDialog } = useDialogEvent();

  return (
    <Box sx={{ display: 'flex', mt: 2 }}>
      <Button type="button" onClick={onCloseDialog} sx={{ borderRadius: 0, py: 2, flex: 1 }}>Cancel</Button>
      <Button type="submit" onClick={onCloseDialog} variant="contained" sx={{ borderRadius: 0, py: 2, flex: 1 }}>Save</Button>
    </Box>
  )
}

export default FlashcardFormActions;