import React, { useState } from "react";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Flashcards from "./components/Flashcards";
import Footer from "./components/Footer";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const startZapRecall = () => {
    setCurrentScreen(false);
    setShowHeader(true);
    setShowFlashcards(true);
    setShowFooter(true);
  };

  return (
    <>
      {currentScreen && <HomePage startZapRecall={startZapRecall} />}
      {showHeader && <Header />}
      {showFlashcards && <Flashcards />}
      {showFooter && <Footer />}
    </>
  );
}
