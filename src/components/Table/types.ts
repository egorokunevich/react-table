import { Dayjs } from 'dayjs';

export interface ITableItem {
  id: string;
  name: string;
  date: Dayjs;
  age: number;
}

export interface ITableItemFormValues {
  name: string;
  age: number;
  date: Dayjs;
}
