import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="Statistics">
      <p>
        Good<span className={s.counter}>{good}</span>
      </p>
      <p>
        Neutral<span className={s.counter}>{neutral}</span>
      </p>
      <p>
        Bad<span className={s.counter}>{bad}</span>
      </p>
      <p>
        total<span className={s.counter}>{total}</span>
      </p>
      <p>
        total<span className={s.counter}>{positivePercentage}%</span>
      </p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
