import PropTypes from 'prop-types';
import styles from './ContactListItem.module.scss';
import { Button } from '@material-ui/core';

const ContactListItem = ({ id, name, number, onClick }) => {
  return (
    <li className={styles.item}>{name}: {number}
      <Button className={styles.button} type='button' variant="contained" color="primary" onClick={() => { onClick(id) }}>Delete</Button>
    </li>
  )
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactListItem;