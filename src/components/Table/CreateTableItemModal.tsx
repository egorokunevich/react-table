import { Button, Modal } from 'antd';
import { ITableItem } from './types';
import { PlusCircleOutlined } from '@ant-design/icons';
import _ from 'lodash';
import TableItemForm from './TableItemForm';
import { useState } from 'react';

interface ICreateTableItemModalProps {
  handleCreate: (newTableItem: ITableItem) => void;
}

const CreateTableItemModal = ({ handleCreate }: ICreateTableItemModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        variant="outlined"
        icon={<PlusCircleOutlined />}
        onClick={() => setIsModalOpen(true)}>
        Добавить
      </Button>
      <Modal
        destroyOnHidden
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}>
        <TableItemForm
          onSubmit={itemValues => {
            handleCreate({ ...itemValues, id: _.uniqueId() });
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </>
  );
};

export default CreateTableItemModal;
