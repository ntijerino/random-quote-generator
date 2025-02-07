"use client";
import Image from "next/image";
import styles from "./page.module.css";
import RandomQuoteMachine from "./components/RandomQuoteMachine";
import { useSelector } from "react-redux";
import { selectColor } from "./GlobalRedux/Features/RandomColor/colorSlice";

export default function Home() {
  const rColor = useSelector(selectColor);
  return (
    <div className={styles.page} style={{backgroundColor: rColor}} suppressHydrationWarning>
        <RandomQuoteMachine />
    </div>
  );
}