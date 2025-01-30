"use client"
/*
This is the main UI component for the Random Quote Machine. It holds everything.
*/

import React from "react";
import { randomColor } from "../random-colors";
import { useDispatch, useSelector } from "react-redux";
import { getRandomQuote } from "../quoteDB"
import styles from "./components.module.css";
import PostToX from "./PostToX";
import PostToTumblr from "./PostToTumblr";
import { updateFullQuote, selectFullQuote } from "../GlobalRedux/Features/QuoteMachine/quoteSlice";
import { updateColor, selectColor } from "../GlobalRedux/Features/RandomColor/colorSlice";

export default function RandomQuoteMachine() {
  const aRandomColor = useSelector(selectColor);
  const fullQuote = useSelector(selectFullQuote);
  const dispatch = useDispatch();
    
  function handleClick() {
    let newQuote = getRandomQuote();
    dispatch(updateFullQuote(newQuote));
    dispatch(updateColor(randomColor(1, 127, 7)));
  }

  return (
    <div className={styles.centerBoxColumn}>
      <div id="quote-box"  className={`${styles.quoteBox} ${styles.centerBoxColumn}`}>
        <div className={styles.centerBoxColumn}>
          <div id="quote-text" style={{color: aRandomColor}} suppressHydrationWarning>{fullQuote.quote}</div>
          <div id="author" style={{color: aRandomColor}} suppressHydrationWarning> - {fullQuote.author}</div> 
        </div>
        <a id="creator-link" style={{color: aRandomColor}} title="More projects to check out." href="https://codepen.io/Noel-Tijerino" suppressHydrationWarning>Noel Tijerino</a>
      </div>
        <div id="buttons" className={styles.centerBoxRow}>
          <div id="share" className={styles.centerBoxRow}>
            <PostToX suppressHydrationWarning /><br/>
            <PostToTumblr suppressHydrationWarning />
          </div>  
          <button id="new-quote" onClick={handleClick} style={{backgroundColor: aRandomColor}} suppressHydrationWarning >New Quote</button>
        </div>
    </div>
  );
}