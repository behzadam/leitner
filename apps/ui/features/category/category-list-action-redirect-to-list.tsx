import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { IconButton } from '@mui/material';
import Link from "next/link";

const CategoryListActionRedirectToList = ({ id }: { id: number }): JSX.Element => {
  console.log('id:', id)
  return (
    <Link href="/flashcards">
      <IconButton size="medium">
        <ListOutlinedIcon />
      </IconButton>
    </Link>
  )
}

export default CategoryListActionRedirectToList;