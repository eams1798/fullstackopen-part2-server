import { IPerson } from '../interfaces/Person';

interface IPersonsProps {
  persons: IPerson[],
  pattern: string
}

const Persons = ({persons, pattern}: IPersonsProps) => {
  const renderedPersons = (pattern === '' ? persons: persons.filter(person =>
    person.name.toLowerCase().includes(pattern.toLowerCase())
  ));

  return (
    <ul>
      {renderedPersons.map((person) => (
      <li key={person.name.replace(' ', '-')}>{person.name}: {person.number}</li>
      ))}
    </ul>
  )
};

export default Persons;