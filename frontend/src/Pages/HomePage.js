import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";

function Homepage() {
  const [isLogin, setIsLogin] = useState(false);
  const viewLogin = (status) => {
    setIsLogin(status);
  };
  {
    /*const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      navigate("/link");
    }
  }, [navigate]);

*/
  }
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color={"black"}>
          Free Space
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">{isLogin ? "Login" : "Signup"}</TabList>
          <TabPanels>
            <TabPanel>{isLogin ? <Login /> : <Signup />}</TabPanel>
          </TabPanels>
        </Tabs>
        <ButtonGroup gap="4">
          <Button onClick={() => viewLogin(false)} colorScheme="teal">
            Signup
          </Button>
          <Button
            onClick={() => viewLogin(true)}
            colorScheme="cyan"
            color="white"
          >
            Login
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}

export default Homepage;
