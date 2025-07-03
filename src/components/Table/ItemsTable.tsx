'use client';

import { Card, Space, Table } from 'antd';
import { ITableItem } from './types';
import dayjs, { Dayjs } from 'dayjs';
import RowActions from './RowActions';
import { useCallback, useState } from 'react';
import CreateTableItemModal from './CreateTableItemModal';
import _ from 'lodash';

const ItemsTable = () => {
  const [items, setItems] = useState<ITableItem[]>([]);
  const handleCreateTableItem = useCallback((newTableItem: ITableItem) => {
    setItems(prev => [...prev, newTableItem]);
  }, []);

  const handleEditTableItem = useCallback((updatedItem: ITableItem) => {
    setItems(prev =>
      _.map(prev, tableItem => (tableItem.id === updatedItem.id ? updatedItem : tableItem)),
    );
  }, []);

  const handleDeleteTableItem = useCallback((tableItemToDelete: ITableItem) => {
    setItems(prev => _.remove(prev, item => item.id !== tableItemToDelete.id));
  }, []);

  return (
    <Space size="middle" direction="vertical" style={{ display: 'flex' }}>
      <Card extra={<CreateTableItemModal handleCreate={handleCreateTableItem} />}></Card>
      <Table<ITableItem>
        columns={[
          {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
          },
          {
            title: 'Возраст',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
          },
          {
            title: 'Дата',
            dataIndex: 'date',
            key: 'date',
            render: (date: Dayjs) => date.format('YYYY-MM-DD'),
            sorter: (a, b) => a.date.diff(b.date),
          },
          {
            key: 'actions',
            render: tableItem => (
              <RowActions
                tableItem={tableItem}
                handleEdit={handleEditTableItem}
                handleDelete={handleDeleteTableItem}
              />
            ),
          },
        ]}
        dataSource={items}
        pagination={false}
        rowKey="id"></Table>
    </Space>
  );
};

export default ItemsTable;
