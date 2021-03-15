import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  asyncActionsStart,
  asyncActionsError,
  asyncActionsFinish,
} from "../async/asyncReducer";
import { dataFromSnapshot } from "../firestore/firestoreService";

export default function useFirestoreDoc({ query, data, deps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncActionsStart());
    const unsubscribe = query().onSnapshot(
      (snapshot) => {
        data(dataFromSnapshot(snapshot));
        dispatch(asyncActionsFinish());
      },
      (error) => dispatch(asyncActionsError())
    );
    return () => {
      unsubscribe();
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
