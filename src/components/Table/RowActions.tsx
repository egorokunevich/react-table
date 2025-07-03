'use client';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
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
        <Button
          onClick={() => setIsEditModalOpen(true)}
          shape="circle"
          variant="filled"
          color="blue"
          icon={<EditOutlined />}
        />
        <Button
          onClick={() => handleDelete(tableItem)}
          shape="circle"
          variant="filled"
          color="red"
          icon={<DeleteOutlined />}
        />
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
