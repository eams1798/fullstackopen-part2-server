import { IPerson } from "../interfaces/Person";

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
      alert(`${name} is already added to phonebook`);
    }
    else if (persons.some(person => person.number === number)) {
      alert(`${number} is already added to phonebook`);
    }
    else {
      setPersons([
        ...persons,
        {name: name, number: number}
      ]);
      setName('');
      setNumber('');
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