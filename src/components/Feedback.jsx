import css from 'components/Feedback.module.css';

const Feedback = ({ options, onChosenOption }) => {
  return (
    <div className={css.feedback}>
      <h1 className={css.title}>Please leave your feedback</h1>
      <ul className={css.buttonList}>
        {options.map(option => (
          <li key={option}>
            <button
              type="button"
              className={css.btn}
              onClick={() => onChosenOption(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
