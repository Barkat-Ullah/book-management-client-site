import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  hasFeedback?: boolean;
  rules?: Record<string, any>;
};

const EInput = ({
  type,
  name,
  label,
  placeholder,
  hasFeedback = false,
  rules,
}: TInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const InputComponent =
    type === "password" && hasFeedback ? Input.Password : Input;

  return (
    <Form.Item
      label={label}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      validateStatus={errors[name] ? "error" : ""}
      help={errors[name]?.message?.toString()}
      style={{ marginBottom: "12px" }}
    >
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <InputComponent
            {...field}
            type={type}
            id={name}
            placeholder={placeholder}
            size="large"
            style={{
              borderColor: "black",
            }}
          />
        )}
      />
    </Form.Item>
  );
};

export default EInput;
