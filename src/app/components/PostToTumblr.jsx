"use client";
/*
This is a button that will post the current quote to Tumblr.
*/

import React from "react";
import styles from "./components.module.css";
import { selectAuthor, selectQuote } from "../GlobalRedux/Features/QuoteMachine/quoteSlice";
import { useSelector } from "react-redux";

export default function PostToTumblr() {
  const quote = useSelector(selectQuote);
  const author = useSelector(selectAuthor);

  return (
  <a className={styles.linkButton} title="Post quote to Tumblr!"href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content=${quote}&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button`} target="_blank" suppressHydrationWarning><i className="fa fa-tumblr" ></i>Post To Tumblr</a>
  );
}