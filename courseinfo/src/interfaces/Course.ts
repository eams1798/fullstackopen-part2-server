export interface TCourse {
  name: string,
  id: number,
  parts:
    {
      name: string,
      exercises: number,
      id: number,
    }[]
};