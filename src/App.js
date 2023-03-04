import React, { useState } from "react";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Deck from "./components/Deck";
import Footer from "./components/Footer";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
  const [showDeck, setShowDeck] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const startZapRecall = () => {
    setCurrentScreen(false);
    setShowHeader(true);
    setShowDeck(true);
    setShowFooter(true);
  };

  return (
    <>
      {currentScreen && <HomePage startZapRecall={startZapRecall} />}
      {showHeader && <Header />}
      {showDeck && <Deck />}
      {showFooter && <Footer/>}
    </>
  );
}
