import { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { phonebookOperations, phonebookSelectors } from '../redux/phonebook';

class PhonebookView extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <h1 className="Title">Phonebook</h1>
        <ContactForm />
        <h2 className="Title">Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
          <ContactList />
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  isLoadingContacts: phonebookSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);