import { Dayjs } from 'dayjs';

export interface ITableItem {
  id: string;
  name: string;
  date: Dayjs;
  age: number;
}
