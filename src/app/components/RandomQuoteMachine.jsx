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
    dispatch(updateFullQuote(getRandomQuote()));
    dispatch(updateColor(randomColor(1, 127, 7)));
  }

  return (
    <div id={styles.container} className={styles.centerBoxColumn}>
      <div id={styles.quoteBox}  className={`${styles.quoteBox} ${styles.centerBoxColumn}`}>
        <div id={styles.quoteHolder} className={styles.centerBoxColumn}>
          <div id={styles.quoteText} style={{color: aRandomColor}} suppressHydrationWarning>{fullQuote.quote}</div>
          <div id={styles.author} style={{color: aRandomColor}} suppressHydrationWarning> - {fullQuote.author}</div> 
        </div>
        <div id={styles.buttons}>
          <div id={styles.share} >
            <div className={styles.linkDiv} style={{backgroundColor: aRandomColor}} suppressHydrationWarning><PostToX /></div>
            <div className={styles.linkDiv} style={{backgroundColor: aRandomColor}} suppressHydrationWarning><PostToTumblr /></div>
          </div>  
          <button id={styles.newQuote} className={styles.button} onClick={handleClick} style={{backgroundColor: aRandomColor}} suppressHydrationWarning >New Quote</button>
        </div>
      </div>
      <a id={styles.creatorLink} title="More projects to check out." href="https://codepen.io/Noel-Tijerino" suppressHydrationWarning>Noel Tijerino</a>
    </div>
  );
}