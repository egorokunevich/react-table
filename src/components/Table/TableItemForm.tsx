import { Button, DatePicker, Form, Input, InputNumber } from 'antd';
import { ITableItemFormValues } from './types';

interface ITableItemFormProps {
  initialData?: ITableItemFormValues;
  onSubmit: (item: ITableItemFormValues) => void;
}

const TableItemForm = ({ initialData, onSubmit }: ITableItemFormProps) => {
  return (
    <Form<ITableItemFormValues>
      initialValues={initialData}
      layout="vertical"
      onFinish={formValues => onSubmit(formValues)}>
      <Form.Item
        name="name"
        label="Имя"
        rules={[
          {
            required: true,
            message: 'Введите имя',
          },
        ]}>
        <Input placeholder="Введите имя" />
      </Form.Item>
      <Form.Item
        name="age"
        label="Возраст"
        rules={[
          {
            required: true,
            message: 'Введите возраст',
          },
        ]}>
        <InputNumber placeholder="Введите возраст" />
      </Form.Item>
      <Form.Item
        name="date"
        label="Дата"
        rules={[
          {
            required: true,
            message: 'Введите дату',
          },
        ]}>
        <DatePicker placeholder="Выберите дату" />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Подтвердить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TableItemForm;
