"use client";
/*
This is a button that will post the current quote to X.
*/

import React from "react";
import { selectAuthor, selectQuote } from "../GlobalRedux/Features/QuoteMachine/quoteSlice";
import { useSelector } from "react-redux";
import styles from "./components.module.css"

export default function PostToX () {
  const quote = useSelector(selectQuote);
  const author = useSelector(selectAuthor);

  return (
    <a className={styles.linkButton} title="Tweet this quote!" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22${quote}%22%20${author}`} target="_top" suppressHydrationWarning><i className="fa fa-twitter"></i>Post To X</a>
  );
}