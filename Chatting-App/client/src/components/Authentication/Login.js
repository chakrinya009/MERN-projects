import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Login = () => {
     const toast = useToast();
      const [loading, setLoading] = useState(false);
        const history = useHistory();
  const [show, setShow] = useState(false);
  
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleClick = () => {
    setShow(!show);
  };

  const postDetails = (pics) => {};

  const submitHandler =async () => {

    setLoading(true);
    if (!email || !password ) {
      toast({
        title: "Please fill all the feilds",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
      return;
    }

  

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/login",
        {
         
          email,
          password,
         
        },
        config
      );
      toast({
        title: "login succesful",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (err) {
      toast({
        title: "Error Occured",
        description: err.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }

  };

  return (
    <div>
      <VStack spacing="5px">
       
        <FormControl id="logemail" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="logpassword" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              value={password}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
          isLoading={loading}
        >
          Login
        </Button>

        <Button
          variant="solid"
          colorScheme="red"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={() => {
            setEmail("chakri@gmail.com");
            setPassword("12344");
          }}
        >
          Get Guest User Credentials
        </Button>
      </VStack>
    </div>
  );
};

export default Login;
