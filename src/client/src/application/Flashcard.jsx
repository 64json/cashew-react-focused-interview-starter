import classNames from 'classnames/bind'
import React from "react";
import styles from './flashcards.css';

const cx = classNames.bind(styles);

export const Flashcard = ({term, definition}) => {

  return (
    <div className={cx('flashcard')}>
      <div>Term: {term}</div>
      <div>Definition: {definition}</div>
    </div>
  )

};
