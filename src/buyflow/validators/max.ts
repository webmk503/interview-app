export const max = (
  maximum: number,
  errMessage: string = `Maximum is ${maximum}`
) => (value: number) => value > maximum && errMessage
