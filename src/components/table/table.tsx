import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from 'react';

//////////////////////////////
// Table
//////////////////////////////
export interface TableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {}

export const Table = (props: TableProps) => {
  const { className = '', ...rest } = props;

  return <table className={`min-w-max w-full table-auto  rounded text-sm leading-normal  ${className}`} {...rest} />;
};

//////////////////////////////
// Table head
//////////////////////////////
export interface TableHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}

const TableHeader = (props: TableHeaderProps) => {
  const { className = '', ...rest } = props;
  return <thead className={`text-sm bg-grayLighter sticky top-0${className}`} {...rest} />;
};

Table.Header = TableHeader;

//////////////////////////////
// Table head row
//////////////////////////////
export interface TableHeadRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {}

const TableHeaderRow = (props: TableHeadRowProps) => {
  const { className = '', ...rest } = props;
  return <tr className={`leading-normal ${className}`} {...rest} />;
};

Table.HeaderRow = TableHeaderRow;

//////////////////////////////
// Table header cell
//////////////////////////////
export interface TableHeaderCellProps
  extends DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement> {}

const TableHeaderCell = (props: TableHeaderCellProps) => {
  const { className = '', ...rest } = props;
  return <th className={`py-3 px-6 font-extrabold font-medium text-left ${className}`} {...rest} />;
};
Table.HeaderCell = TableHeaderCell;

//////////////////////////////
// Table Body
//////////////////////////////
export interface TableBodyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}
const TableBody = (props: TableBodyProps) => {
  const { className = '', ...rest } = props;
  return <tbody className={`text-sm font-light ${className}`} {...rest} />;
};

Table.Body = TableBody;

//////////////////////////////
// Table Body row
//////////////////////////////
export interface TableBodyRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {}

const TableBodyRow = (props: TableBodyRowProps) => {
  const { className = '', ...rest } = props;
  return <tr className={`border-t-2 bg-grayLighter border-grayDarker  ${className}`} {...rest} />;
};

Table.BodyRow = TableBodyRow;

//////////////////////////////
// Table Row cell
//////////////////////////////
export interface TableRowCellProps
  extends DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> {}

const TableRowCell = (props: TableRowCellProps) => {
  const { className = '', ...rest } = props;
  return <td className={`py-3 px-6 ${className}`} {...rest} />;
};

Table.RowCell = TableRowCell;
