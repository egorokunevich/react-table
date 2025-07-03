import { Button } from 'antd';
import { ITableItem } from './types';
import { PlusCircleOutlined } from '@ant-design/icons';

interface ICreateTableItemModalProps {
  handleCreate: (newTableItem: ITableItem) => void;
}

const CreateTableItemModal = ({}: ICreateTableItemModalProps) => {
  return (
    <Button
      type="primary"
      variant="outlined"
      icon={<PlusCircleOutlined />}
      onClick={() => console.log('add item')}>
      Добавить
    </Button>
  );
};

export default CreateTableItemModal;
