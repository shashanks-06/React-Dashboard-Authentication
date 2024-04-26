import { Box, Button, Center, Icon, Text, VStack } from "@chakra-ui/react";
import Card from "../../../components/Card";
import { IoShieldCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    <Center minH="100vh">
      <Card>
        <VStack spacing={6} alignItems="center">
          <Icon as={IoShieldCheckmark} boxSize="48px" color="#059669" />
          <Text textStyle="h4" fontWeight="medium" color="p.black">
            Successfully Registration
          </Text>
          <Text textAlign="center" textStyle="p2" color="black.60">
            Hurray! You have successfully created your account. Enter the app to
            explore all it’s features.
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

export default RegisterSuccess;