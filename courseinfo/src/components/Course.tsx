import Content from "./Content";
import Header from "./Header";
import Total from "./Total";
import { TCourse } from '../interfaces/Course';


const Course = ({course}: {course: TCourse}) => (
    <div key={course.id} >
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )

  export default Course;