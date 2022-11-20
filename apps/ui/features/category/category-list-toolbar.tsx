import { Stack, Typography } from "@mui/material";
import CategoryListAddButton from "./category-list-action-add";


const CategoryListToolbar = (): JSX.Element => {

  return (
    <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
      <Typography variant="subtitle1" >
        Flashcards
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ ml: 'auto' }}>
        <CategoryListAddButton />
      </Stack>
    </Stack>
  )
}

export default CategoryListToolbar;