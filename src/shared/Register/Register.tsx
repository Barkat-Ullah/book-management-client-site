import { Button, Col, message, Row, Typography } from "antd";
import { useRegisterUserMutation } from "../../redux/features/Auth/authApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import EForm from "../../components/Form/EForm";
import EInput from "../../components/Form/EInput";

const { Title, Text } = Typography;

const Register = () => {
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await registerUser(data).unwrap();
      console.log(response)
      message.success("Registration successful! Please log in.");
      navigate("/login"); 
    } catch (error: any) {
      message.error(
        error?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #f0f2f5, #e6e9ef)",
      }}
    >
      <Col xs={22} sm={20} md={16} lg={12} xl={8}>
        <div
          style={{
            padding: "40px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Title
            level={3}
            style={{
              textAlign: "center",
              color: "#2b2b2b",
              marginBottom: "12px",
            }}
          >
            Create an Account
          </Title>
          <Text
            type="secondary"
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: "32px",
              color: "#888",
            }}
          >
            Please fill in the form below to create your account.
          </Text>
          <EForm onSubmit={onSubmit}>
            <EInput
              type="text"
              name="name"
              label="Name"
              placeholder="Enter your name"
              rules={{ required: "Name is required" }}
            />
            <EInput
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your Email"
              rules={{ required: "Email is required" }}
            />
            <EInput
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your Password"
              hasFeedback
              rules={{ required: "Password is required" }}
            />
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              loading={isLoading}
              style={{
                marginTop: "12px",
                backgroundColor:"black"
              }}
            >
              Register
            </Button>
          </EForm>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
