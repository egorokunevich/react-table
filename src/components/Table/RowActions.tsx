'use client';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Modal, Space } from 'antd';
import { ITableItem } from './types';
import { useState } from 'react';
import TableItemForm from './TableItemForm';

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
      <Modal
        destroyOnHidden
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={false}>
        <TableItemForm
          initialData={tableItem}
          onSubmit={itemValues => {
            handleEdit({ ...tableItem, ...itemValues });
            setIsEditModalOpen(false);
          }}
        />
      </Modal>
    </>
  );
};

export default RowActions;
