"use client"

import type { RootState } from "@/store/store"
import { useSelector,useDispatch } from "react-redux"
import { decrement,increment } from "@/features/counter/counterSlice"

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state:RootState) => state.counter.value);
  return (
    <>
    <div className="flex justify-between items-center">
    <button onClick={() => dispatch(increment())}>
      +
    </button>

    {count}

    <button onClick={() => dispatch(decrement())}>
      -
    </button>
    </div>
    </>
  )
}
