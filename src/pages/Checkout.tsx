// import { Button, Col, Row, Typography } from "antd";
// import EForm from "../components/Form/EForm";
// import EInput from "../components/Form/EInput";
// import { FieldValues, SubmitHandler } from "react-hook-form";
// import ESelect from "../components/Form/ESelect";

// const { Text } = Typography;

// const Checkout = ({ userDetails }) => {
//     console.log(userDetails)
//   const onSubmit: SubmitHandler<FieldValues> = (data) => {
//     console.log(data);
//   };
//   return (
//     <Row
//       justify="center"
//       align="middle"
//       style={{
//         height: "100vh",
       
//       }}
//     >
//       <Col xs={22} sm={20} md={16} lg={12} xl={8}>
//         <div
//           style={{
//             padding: "40px",
//             background: "#fff",
//             borderRadius: "16px",
//             boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <Text
//             type="secondary"
//             style={{
//               display: "block",
//               textAlign: "center",
//               marginBottom: "32px",
//               color: "#888",
//             }}
//           >
//             Check Your Details
//           </Text>
//           <EForm onSubmit={onSubmit} defaultValues={defaultValues}>
//             <EInput type="name" name="name" label="name" />
//             <EInput
//               type="email"
//               name="email"
//               label="Email"
//               placeholder="Enter your Email"
//               rules={{ required: "Email is required" }}
//             />
//             <ESelect label="Quantity" name="quantity" />
//             <Button
//               type="primary"
//               htmlType="submit"
//               block
//               size="large"
//               style={{
//                 marginTop: "12px",
//                 backgroundColor: "black",
//                 borderColor: "black",
//               }}
//             >
//               Checkout
//             </Button>
//           </EForm>
//         </div>
//       </Col>
//     </Row>
//   );
// };

// export default Checkout;
