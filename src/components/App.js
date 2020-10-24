import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';
import PhoneList from './Phonelist';
import SearchInput from './SearchInput';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', tel: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', tel: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', tel: '227-91-26' },
    ],
    filter: '',
  };
  inputChannge = e => {
    const { name, value } = e.currentTarget;
    // const newCont = this.getSearchContacs();
    return this.setState({
      [name]: value,
    });
  };

  addContact = e => {
    this.setState(prev => {
      if (this.state.contacts.some(el => el.name === e.name)) {
        alert(`${e.name}, already exist in contacts`);
      } else {
        const newContact = {
          name: e.name,
          tel: e.tel,
          id: uuidv4(),
        };
        return { contacts: [...prev.contacts, newContact] };
      }
    });
  };
  getSearchContacs = () => {
    const { filter, contacts } = this.state;
    const normalizeSearch = filter.toLowerCase();

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizeSearch),
    );
  };
  deleteTask = task => {
    console.log(task);
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(ta => ta.id !== task),
      };
    });
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <SearchInput onSearch={this.inputChannge} />
        <PhoneList
          onSearch={this.getSearchContacs()}
          onDelete={this.deleteTask}
        />
      </>
    );
  }
}

export default App;
