import React, { useEffect, useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/toast";
import { Button } from "@chakra-ui/button";
import axios from "axios";

const LinkPage = () => {
  const toast = useToast();
  let user = JSON.parse(localStorage.getItem("userInfo"));
  console.log(user);
  const email = user.email;
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [links, setLinks] = useState([]);

  const getData = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `http://localhost:5000/links`,
        { email },
        config
      );
      const userLinks = response.data.links;
      console.log(userLinks);
      setLinks(userLinks);
      //console.log(links);
      //console.log(response.data.links);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async () => {
    if (!title || !url) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/link/add",
      { email, title, url },
      config
    );
    if (data) {
      toast({
        title: "New link added",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      window.location.reload();
    }
  };

  return (
    <>
      {/*<VStack>
        <FormControl>
          <FormLabel>Link Title</FormLabel>
          <Input
            placeholder="link title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>URL</FormLabel>
          <Input placeholder="Url" onChange={(e) => setUrl(e.target.value)} />
        </FormControl>

        <Button onClick={handleSubmit}>ADD</Button>
      </VStack>*/}
    </>
  );
};

export default LinkPage;
