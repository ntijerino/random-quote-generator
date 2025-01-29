"use client";
import React from "react";
import styles from "./components.module.css";
import { selectAuthor, selectQuote } from "../GlobalRedux/Features/QuoteMachine/quoteSlice";
import { useSelector } from "react-redux";
import { selectColor } from "../GlobalRedux/Features/RandomColor/colorSlice";

export default function PostToTumblr() {
  const quote = useSelector(selectQuote);
  const author = useSelector(selectAuthor);
  const rColor = useSelector(selectColor);

  return (
  <a className={`${styles.centerBoxColumn} ${styles.button}`} style={{backgroundColor: rColor}} id="tumblr-quote" title="Post quote to Tumblr!"href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content=${quote}&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button`} target="_blank" suppressHydrationWarning><i className="fa fa-tumblr" ></i>Post To Tumblr</a>
  );
}