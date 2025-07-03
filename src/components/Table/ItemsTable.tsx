import { Space, Table } from 'antd';
import { ITableItem } from './types';
import type { Dayjs } from 'dayjs';

const ItemsTable = () => {
  const handleEditTableItem = () => {};
  const handleDeleteTableItem = () => {};
  return (
    <Space size="middle" direction="vertical" style={{ display: 'flex' }}>
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
        ]}></Table>
    </Space>
  );
};

export default ItemsTable;
