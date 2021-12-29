export interface StringObject<T> {
  [key: string]: T
}

export enum EStep {
  Email = 'email',
  Age = 'age',
  Names = 'names',
  Summary = 'summary',
  FirstName = 'firstName',
  LastName = 'lastName',
}

export interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  DevIns = 'dev_ins',
  DesignerIns = 'designer_ins',
}

export interface IStepsValues {
  email: string
  age: number
  names: string
}
