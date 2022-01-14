export const min = (
  minimum: number,
  errMessage: string = `Minimum is ${minimum}`
) => (value: number) => minimum > value && errMessage
