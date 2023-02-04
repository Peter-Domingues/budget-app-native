export interface rowItems {
  id: string;
  font: String;
  amount: number;
  dueDate: String;
  isChecked: boolean;
}
export interface responseRows {
  id: string;
  font: String;
  amount: number;
  dueDate: string | number | Date;
  isChecked: boolean;
}

export interface id {
  year: number;
}

export interface Months {
  Month: number;
  MonthSpendings: number;
  MonthIncoming: number;
}

export interface item {
  title: string | undefined;
  value: number;
  goTo: string;
  isMoney: boolean;
  isNegative: boolean;
}

export interface HistoryType {
  _id: id;
  TotalIncoming: number;
  TotalBillss: number;
  Months: Months[];
  YearProfit: number;
}
