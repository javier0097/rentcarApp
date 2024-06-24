export interface Account {
  names: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  birthDate: Date;
}

export interface AccountResponse extends Account{
  id: number;
}
