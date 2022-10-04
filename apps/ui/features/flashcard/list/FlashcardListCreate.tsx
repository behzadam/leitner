import { Button } from '@mui/material';
import { Fragment, useState } from 'react';

import FlashcardCreateDialog from '../FlashcardCreateDialog';

const FlashcardListCreate = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <Button size="small" onClick={() => setOpen(true)} color="primary" variant="contained" disableElevation>
        New
      </Button>
      <FlashcardCreateDialog open={open} onClose={() => setOpen(false)} />
    </Fragment>
  )
}

export default FlashcardListCreate;