import { useCallback, useEffect } from "react";
import { fetchFlashcards } from "../FlashcardSlice";
import { useAppDispatch, useAppSelector } from "@/store/index";

const useFlashcardList = () => {
  const { items } = useAppSelector(store => store.flashcards)
  const dispatch = useAppDispatch();

  const initFetch = useCallback(() => {
    return dispatch(fetchFlashcards());
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])

  return { items }
}

export default useFlashcardList;