import { Button } from "@mui/material";
import { useState } from "react";

const FlashcardListCreate = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button size="small" onClick={() => setOpen(true)} color="primary" variant="contained" disableElevation>
        New
      </Button>
      <FlashcardCreateDialog open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default FlashcardListCreate;