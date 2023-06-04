import { IPerson } from '../interfaces/Person';
import { deletePerson } from '../utils/FetchPerson';

interface IPersonsProps {
  persons: IPerson[],
  setPersons: React.Dispatch<React.SetStateAction<IPerson[]>>,
  pattern: string,
  setMessage: React.Dispatch<React.SetStateAction<{
    isError: boolean;
    message: string;
}>>
}

const Persons = ({persons, setPersons, pattern, setMessage}: IPersonsProps) => {
  const renderedPersons = (pattern === '' ? persons: persons.filter(person =>
    person.name.toLowerCase().includes(pattern.toLowerCase())
  ));

  const removePerson = (e: React.MouseEvent, id: string) => {
    e.preventDefault;

    const deletedPersonName = persons.find( (person) => person.id === id )?.name;

    deletePerson(id)
      .then( () => {
        const restOfPersons = persons.filter( (person) => person.id != id );
        setPersons(restOfPersons);
        setMessage({isError: false, message: `${deletedPersonName} was deleted succesfully`})
      }).catch(() => {
        setMessage({isError: true, message: `${deletedPersonName} has already been removed from server`});
      })
  };

  return (
    <ul>
      {renderedPersons.map((person) => (
      <li key={person.id}>
        <div className='block'>
          <p>{person.name}: {person.number}</p>
          <button onClick={(e) => removePerson(e, person.id)}>delete</button>
        </div>
      </li>
      ))}
    </ul>
  )
};

export default Persons;