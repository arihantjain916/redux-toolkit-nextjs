import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/features/counter/counterSlice";
import { RootState } from "@/store/store";
import { paintings } from "../data/painting";

export const Card = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  const [disable, setDisable] = useState(count === 0);

  useEffect(() => {
    setDisable(count === 0);
  }, [count]);

  return (
    <div className="flex gap-5">
      {paintings.map((painting, index) => (
        <div className="border-2" key={index}>
          <img
            src={painting.imageUrl}
            alt="image"
            className="w-[250px] h-[200px]"
          />
          <div className="about">
            <h2>Name: {painting.name}</h2>
            <h2>Artist Name: {painting.artist}</h2>
            <p>Price: {painting.price}</p>
          </div>
          <div className="caption px-10 mt-4 mb-2">
            Buy this Painting?
            <div className="flex justify-between">
              <button
                onClick={() => dispatch(decrement())}
                disabled={disable}
              >
                -
              </button>
              <h2>Quantity: {count}</h2>
              <button onClick={() => dispatch(increment())}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
