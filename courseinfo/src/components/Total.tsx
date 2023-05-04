const Total = ({parts}: {parts: {name: string, exercises: number}[]}) => {
  const total: number = parts.reduce((sum, {exercises}) => sum + exercises, 0);

  return <strong>total of {total} exercises</strong>
}

export default Total;