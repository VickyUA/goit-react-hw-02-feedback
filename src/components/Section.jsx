import css from 'components/Feedback.module.css';

const Section = ({ children }) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.title}>Statistics</h2>
      {children}
    </div>
  );
};

export default Section;
