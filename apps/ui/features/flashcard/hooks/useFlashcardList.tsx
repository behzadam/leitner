import { useCallback, useEffect } from "react";
import { fetchFlashcards } from "../flashcardSlice";
import { useAppDispatch, useAppSelector } from "@ui/store/index";

const useFlashcardList = () => {
  const { flashcards, status } = useAppSelector(store => store.flashcards)
  const dispatch = useAppDispatch();

  const initFetch = useCallback(() => {
    return dispatch(fetchFlashcards());
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])

  return { flashcards, status }
}

export default useFlashcardList;