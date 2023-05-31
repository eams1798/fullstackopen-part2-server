import { useState, useEffect } from 'react';
import { IPerson } from './interfaces/Person';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import {getAllPersons} from './utils/FetchPerson'

const App = () => {
  const [ persons, setPersons ] = useState<IPerson[]>([]);
  const [ newName, setNewName ] = useState<string>('');
  const [ phNumber, setPhNumber ] = useState<string>('');
  const [ filterPattern, setFPattern ] = useState<string>('');

  useEffect(() => {
    getAllPersons()
      .then(response => {
        setPersons(response)
      });
  }, []);

  return (
    <div>
      {/* <pre>{`${JSON.stringify(DBdata)}`}</pre> */}
      <h2>Phonebook</h2>
      <Filter pattern={filterPattern} setPattern={setFPattern} />
      <h2>Add a new</h2>
      <PersonForm
        persons={persons} setPersons={setPersons}
        name={newName} setName={setNewName}
        number={phNumber} setNumber={setPhNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} pattern={filterPattern} />
    </div>
  )
}

export default App
