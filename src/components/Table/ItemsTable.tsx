'use client';

import { Card, Input, Space, Table } from 'antd';
import { ITableItem } from './types';
import dayjs, { Dayjs } from 'dayjs';
import RowActions from './RowActions';
import { useCallback, useMemo, useState } from 'react';
import CreateTableItemModal from './CreateTableItemModal';
import _ from 'lodash';

const ItemsTable = () => {
  const [items, setItems] = useState<ITableItem[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

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

  const filteredItems = useMemo(() => {
    if (!searchValue) {
      return items;
    }

    return _.filter(items, ({ ...rest }) => {
      const isMatch = _.some(rest, value => {
        if (_.isString(value)) {
          return value.toLowerCase().includes(searchValue.toLowerCase());
        }

        if (_.isNumber(value)) {
          return value.toString().includes(searchValue);
        }

        if (_.isDate(value) || dayjs.isDayjs(value)) {
          return value.format('YYYY-MM-DD').includes(searchValue);
        }

        return false;
      });

      return isMatch;
    });
  }, [items, searchValue]);

  return (
    <Space size="middle" direction="vertical" style={{ display: 'flex' }}>
      <Card extra={<CreateTableItemModal handleCreate={handleCreateTableItem} />}>
        <Input
          placeholder="Поиск..."
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
        />
      </Card>
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
            title: 'Действия',
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
        dataSource={filteredItems}
        pagination={false}
        rowKey="id"></Table>
    </Space>
  );
};

export default ItemsTable;
