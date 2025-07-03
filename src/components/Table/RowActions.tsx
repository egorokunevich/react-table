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
        <Button shape="circle" variant="filled" color="blue">
          <EditOutlined onClick={() => setIsEditModalOpen(true)} />
        </Button>
        <Button shape="circle" variant="filled" color="red">
          <DeleteOutlined onClick={() => handleDelete(tableItem)} />
        </Button>
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
