import { Table } from '@components/table/table';
import { SkeletonLoader } from '@components/skeleton-loader/skeleton-loader';
import React from 'react';

export function TrackListTableBodySekeleton() {
  return (
    <Table.Body>
      <Table.BodyRow>
        <Table.RowCell className='py-0 pr-0 pl-0' colSpan={100}>
          <SkeletonLoader height='h-10' type='wave' />
        </Table.RowCell>
      </Table.BodyRow>
      <Table.BodyRow>
        <Table.RowCell className='py-0 pr-0 pl-0' colSpan={100}>
          <SkeletonLoader height='h-10' type='wave' />
        </Table.RowCell>
      </Table.BodyRow>
      <Table.BodyRow>
        <Table.RowCell className='py-0 pr-0 pl-0' colSpan={100}>
          <SkeletonLoader height='h-10' type='wave' />
        </Table.RowCell>
      </Table.BodyRow>
      <Table.BodyRow>
        <Table.RowCell className='py-0 pr-0 pl-0' colSpan={100}>
          <SkeletonLoader height='h-10' type='wave' />
        </Table.RowCell>
      </Table.BodyRow>
      <Table.BodyRow>
        <Table.RowCell className='py-0 pr-0 pl-0' colSpan={100}>
          <SkeletonLoader height='h-10' type='wave' />
        </Table.RowCell>
      </Table.BodyRow>
    </Table.Body>
  );
}
