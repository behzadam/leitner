import { useCallback, useEffect } from "react";
import { fetchFlashcardHistory } from "../flashcardSlice";
import { useAppDispatch, useAppSelector } from "@ui/store/index";

const useFlashcardListHistory = (id: number) => {
  const { flashcardHistory, status } = useAppSelector(store => store.flashcards)
  const dispatch = useAppDispatch();

  const initFetch = useCallback(() => {
    return dispatch(fetchFlashcardHistory(id));
  }, [dispatch, id])

  useEffect(() => {
    initFetch()
  }, [initFetch])

  return { flashcardHistory, status }
}

export default useFlashcardListHistory;