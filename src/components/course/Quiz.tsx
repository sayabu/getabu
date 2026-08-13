"use client";

import { useId, useState } from "react";
import styles from "./course.module.css";

type QuizProps = {
  questions: string[];
  answers: string[];
};

export function Quiz({ questions, answers }: QuizProps) {
  const [revealed, setRevealed] = useState(false);
  const answerId = useId();

  return (
    <section id="quiz" className={styles.quiz} aria-labelledby="quiz-title">
      <p className={styles.eyebrow}>Knowledge check</p>
      <h2 id="quiz-title">Check Yourself — 5-Question Quiz</h2>
      <div className={styles.quizQuestions}>
        <h3>Questions</h3>
        <ol>
          {questions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
      </div>
      <button
        className={styles.revealButton}
        type="button"
        aria-expanded={revealed}
        aria-controls={answerId}
        onClick={() => setRevealed((value) => !value)}
      >
        {revealed ? "Hide answers" : "Reveal answers"}
      </button>
      <div id={answerId} className={styles.quizAnswers} hidden={!revealed}>
        <h3>Answers (no peeking until you&apos;ve tried!)</h3>
        <ol>
          {answers.map((answer) => (
            <li key={answer}>{answer}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
