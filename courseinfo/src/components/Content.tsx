import Part from "./Part";
import { TCourse } from '../interfaces/Course';

const Content = ({parts}: {parts: TCourse["parts"]}) => {
  return (
  <>
    {parts.map(({name, exercises, id}) => (
    <Part key={id} name={name} exercises={exercises}/>
    ))}
  </>
    
  )
}

export default Content;