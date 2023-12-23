import css from 'components/Feedback.module.css';

const Notification = ({ message }) => (
  <p className={css.notification}>{message}</p>
);

export default Notification;
