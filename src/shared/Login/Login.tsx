import { Button, Col, message, Row, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../../redux/features/Auth/authApi";
import { setUser } from "../../redux/features/Auth/authSlice";
import { useNavigate } from "react-router";
import EForm from "../../components/Form/EForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import EInput from "../../components/Form/EInput";

const { Title, Text, Link } = Typography;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginUserMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const result = await login(data).unwrap();

      if (result?.token) {
        const { data: user, token } = result;
        dispatch(setUser({ user, token }));
        localStorage.setItem("token", token);

        message.success("Login successful!");
        navigate("/");
      } else {
        message.error("Login failed. Please try again.");
      }
    } catch (error) {
      // Check if the error is an instance of Error
      if (error instanceof Error) {
        message.error(
          error.message || "Something went wrong. Please try again."
        );
      } else {
        message.error("Something went wrong. Please try again.");
      }
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
            Welcome Back
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
            Please enter your credentials to log in.
          </Text>
          <EForm onSubmit={onSubmit}>
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
              style={{
                marginTop: "12px",
                backgroundColor: "black",
                borderColor: "black",
              }}
            >
              Login
            </Button>
          </EForm>
          <Text
            type="secondary"
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            Don’t have an account?{" "}
            <Link
              onClick={() => navigate("/register")}
              style={{ color: "black", fontWeight: "bold" }}
            >
              Register
            </Link>
          </Text>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
