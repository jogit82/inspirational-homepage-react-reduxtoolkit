import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuote, selectQuote } from "./quoteSlice";

const Quote = () => {
  const { quote, author } = useSelector(selectQuote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  return (
    <div id="quote">
      <p className="quote-message">"Things do not change; we change."</p>
      <p className="quote-author">Henry Thoreau</p>
    </div>
  );
};

export default Quote;
