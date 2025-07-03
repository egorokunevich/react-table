'use client';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { ITableItem } from './types';
import { useState } from 'react';

interface IRowActionsProps {
  tableItem: ITableItem;
  handleEdit: (tableItem: ITableItem) => void;
  handleDelete: (tableItem: ITableItem) => void;
}

const RowActions = ({ tableItem, handleEdit, handleDelete }: IRowActionsProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <Space size="middle" style={{ display: 'flex' }}>
        <EditOutlined size={2} onClick={() => setIsEditModalOpen(true)} />
        <DeleteOutlined size={2} onClick={() => handleDelete(tableItem)} />
      </Space>
    </>
  );
};

export default RowActions;
