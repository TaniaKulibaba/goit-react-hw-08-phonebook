import { connect } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.scss';



const ContactList = ({ list, onClick }) => {
  if (list.length === 0) return null
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <ContactListItem key={item.id} id={item.id} name={item.name} number={item.number} onClick ={onClick} />
      ))}
    </ul>
  )
};

ContactList.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  list: phonebookSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onClick: (id) => dispatch(phonebookOperations.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);