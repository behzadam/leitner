import { useCallback, useEffect } from "react";
import { fetchFlashcards, deleteFlashcard } from "../flashcardSlice";
import { useAppDispatch, useAppSelector } from "@ui/store/index";

const useFlashcardList = () => {
  const { flashcards, status } = useAppSelector(store => store.flashcards)
  const dispatch = useAppDispatch();

  const initFetch = useCallback(() => {
    return dispatch(fetchFlashcards());
  }, [dispatch])

  const onDeleteItem = async (id: number): Promise<void> => {
    await dispatch(deleteFlashcard(id))
  }

  useEffect(() => {
    initFetch()
  }, [initFetch])

  return { flashcards, onDeleteItem, status }
}

export default useFlashcardList;