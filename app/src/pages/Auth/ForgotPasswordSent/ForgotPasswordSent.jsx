import { Box, Button, Center, Icon, Text, VStack } from "@chakra-ui/react";
import Card from "../../../components/Card";
import { IoShieldCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

const ForgotPasswordSent = () => {
  return (
    <Center minH="100vh">
      <Card>
        <VStack spacing={6} alignItems="center">
          <Icon as={IoShieldCheckmark} boxSize="48px" color="#059669" />
          <Text textStyle="h4" fontWeight="medium" color="p.black">
            Successfully Sent
          </Text>
          <Text textAlign="center" textStyle="p2" color="black.60">
            We have sent instructions on how to reset your password to{" "}
            <Box as="b" color="p.black">
              jenny.wilson@gmail.com
            </Box>
            . Please follow the instructions from the email.
          </Text>
          <Box w="full">
            <Link to="/signin">
              <Button w="full">Enter the App</Button>
            </Link>
          </Box>
        </VStack>
      </Card>
    </Center>
  );
};

export default ForgotPasswordSent;