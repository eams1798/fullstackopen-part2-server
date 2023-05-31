import { IPerson } from '../interfaces/Person';
import { deletePerson } from '../utils/FetchPerson';

interface IPersonsProps {
  persons: IPerson[],
  setPersons: React.Dispatch<React.SetStateAction<IPerson[]>>,
  pattern: string
}

const Persons = ({persons, setPersons, pattern}: IPersonsProps) => {
  const renderedPersons = (pattern === '' ? persons: persons.filter(person =>
    person.name.toLowerCase().includes(pattern.toLowerCase())
  ));

  const removePerson = (e: React.MouseEvent, id: string) => {
    e.preventDefault;

    deletePerson(id)
      .then( () => {
        const restOfPersons = persons.filter( (person) => person.id != id );
        setPersons(restOfPersons);
      })
  };

  return (
    <ul>
      {renderedPersons.map((person) => (
      <li key={person.id}>
        <p>{person.name}: {person.number}</p>
        <button onClick={(e) => removePerson(e, person.id)}>delete</button>
      </li>
      ))}
    </ul>
  )
};

export default Persons;