import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import contactsOperations from '../../redux/phonebook/phonebook-operations';
import styles from './ContactForm.module.scss';
import { Button } from '@material-ui/core';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (this.props.contacts.find((el) => el.name === this.state.name)) {
      alert('Contact is already in contacts.');
      this.resetForm();
      return;
    }
    
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => this.setState(INITIAL_STATE);

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit}>
        <label className={styles.label}>Name
          <input
            className={styles.input}
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder='Enter name'
            required
            value={this.state.name}
            onChange={this.handleChangeForm}
          />
        </label>

        <label className={styles.label}>Number
          <input            
            className={styles.input}
            type='tel'
            name='number'
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            placeholder='Enter phone number'
            required
            value={this.state.number}
            onChange={this.handleChangeForm} />
        </label>
        <Button type='submit' variant="contained" color="primary">Add contact</Button>
      </form>
    )
  }
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { contacts: state.contacts.items };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
