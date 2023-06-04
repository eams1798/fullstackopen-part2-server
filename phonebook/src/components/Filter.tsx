interface IFilterProps {
  pattern: string,
  setPattern: React.Dispatch<React.SetStateAction<string>>
};

const Filter = ({pattern, setPattern}: IFilterProps) => {
  return (
    <div>
      filter shown with <input
        type="text"
        onChange={(e) => setPattern(e.target.value)}
        value={pattern} />
    </div>
  )
};

export default Filter;