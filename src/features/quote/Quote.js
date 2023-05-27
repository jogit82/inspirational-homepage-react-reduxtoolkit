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
      <p className="quote-message">"{quote}"</p>
      <p className="quote-author">{author}</p>
    </div>
  );
};

export default Quote;
