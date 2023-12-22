import css from 'components/Feedback.module.css';

const Feedback = ({ options, onChosenOption }) => {
  return (
    <div>
      <h1 className={css.mainTitle}>Please leave your feedback</h1>
      <ul className={css.buttonList}>
        {options.map(option => (
          <li key={option}>
            <button type="button" onClick={() => onChosenOption(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
