import { IPerson } from "../interfaces/Person";
import { v4 as uuidv4 } from 'uuid';
import { createPerson, updatePerson } from "../utils/FetchPerson";

export interface IPersonFormProps {
  persons: IPerson[];
  setPersons: React.Dispatch<React.SetStateAction<IPerson[]>>
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
}

const PersonForm = ({persons, setPersons, name, setName, number, setNumber}: IPersonFormProps) => {
  const addPerson = ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === '') {
      alert('Please enter a new name');
    }
    else if (number === '') {
      alert('Please enter a phone number');
    }
    else if (persons.some(person => person.name === name)) {
      if (confirm(`${name} is already added to phonebook, would you replace the old number with a new one?`)) {
        let changedPerson = persons.filter( person => person.name === name)[0];
        changedPerson = {...changedPerson, number};

        updatePerson(changedPerson.id, changedPerson)
        .then(response => {
          const restOfPersons = persons.filter( (person) => person.id != changedPerson.id );
          setPersons([...restOfPersons, response]);
          setName('');
          setNumber('');
        });
      }
    }
    else if (persons.some(person => person.number === number)) {
      if (confirm(`${number} is already added to phonebook, would you update its old name with the new one?`)) {
        let changedPerson = persons.filter( person => person.number === number)[0];
        changedPerson = {...changedPerson, name};

        updatePerson(changedPerson.id, changedPerson)
        .then(response => {
          const restOfPersons = persons.filter( (person) => person.id != changedPerson.id );
          setPersons([...restOfPersons, response]);
          setName('');
          setNumber('');
        });
      }
    }
    else {
      const newPerson = {id: uuidv4(), name, number};

      createPerson(newPerson)
        .then(response => {
          setPersons([...persons, response]);
          setName('');
          setNumber('');
        }) ;
    }
  };

  return (
  <form onSubmit={(e) => addPerson(e)}>
      <div>
        name: <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name} />
      </div>
      <div>
        number: <input
          type="text"
          onChange={(e) => setNumber(e.target.value)}
          value={number} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;