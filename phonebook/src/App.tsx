import { useState, useEffect } from 'react';
import { IPerson } from './interfaces/Person';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
  const [ persons, setPersons ] = useState<IPerson[]>([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ]);
  const [ newName, setNewName ] = useState<string>('');
  const [ phNumber, setPhNumber ] = useState<string>('');
  const [ filterPattern, setFPattern ] = useState<string>('');

  const [DBdata, setDBdata ] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setDBdata(response.data)
      });
  }, []);

  return (
    <div>
      <pre>{`${JSON.stringify(DBdata)}`}</pre>
      <h2>Phonebook</h2>
      <Filter pattern={filterPattern} setPattern={setFPattern} />
      <h2>Add a new</h2>
      <PersonForm
        persons={persons} setPersons={setPersons}
        name={newName} setName={setNewName}
        number={phNumber} setNumber={setPhNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} pattern={filterPattern} />
    </div>
  )
}

export default App
