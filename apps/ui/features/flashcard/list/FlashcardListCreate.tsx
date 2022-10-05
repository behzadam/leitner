import { Button } from '@mui/material';
import { Fragment, useState } from 'react';

import FlashcardFormCreateDialog from '../form/FlashcardFormCreateDialog';

const FlashcardListCreate = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <Button size="small" onClick={() => setOpen(true)} color="primary" variant="contained" disableElevation>
        New
      </Button>
      <FlashcardFormCreateDialog open={open} onClose={() => setOpen(false)} />
    </Fragment>
  )
}

export default FlashcardListCreate;