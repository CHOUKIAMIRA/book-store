import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { AiFillGoogleCircle, AiFillCheckCircle } from "react-icons/ai";
import { useNavigate, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";

import { loginUser } from "../redux/action/userAction";

function Login() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // état de chargement
  const email = searchParams.get("email");
  const fullname = searchParams.get("fullname");
  const secret = searchParams.get("secret");
  const navigate = useNavigate();
const [user, setUser] = useState({});
  useEffect(() => {
    const checkUser = async () => {
      if (email && fullname && secret) {
        const userData = { email, fullname, secret };
        // Dispatch l'action pour connecter l'utilisateur
        dispatch(
          loginUser(userData, (response) => {
            if (response && response.secret) {
              // Le stockage est désormais géré dans le reducer
              navigate("/home"); // Rediriger vers la page d'accueil après connexion
            }
          })
        );
      }
      setLoading(false); // Fin du chargement
    };

    checkUser();
  }, [email, fullname, secret, dispatch, navigate]);

  // Afficher un indicateur de chargement
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <div style={{ backgroundColor: "lightblue", height: "100vh" }}>
      <Container maxW={"2xl"} centerContent>
        <p
          style={{
            fontSize: "40px",
            fontWeight: "800px",
            color: "yellow",
            fontFamily: "cursive",
            margin: "40px 0",
          }}
        >
          Book Store
        </p>
        <Box w={"100%"} mt="4" bg={"white"} p="4" rounded={"md"}>
          <form action="http://localhost:5000/auth/google">
            <VStack w={"100%"}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Button
                leftIcon={<AiFillCheckCircle />}
                colorScheme="blue"
                variant="solid"
                w={"100%"}
              >
                Submit
              </Button>
              <Button
                leftIcon={<AiFillGoogleCircle />}
                colorScheme="red"
                variant="solid"
                w={"100%"}
                type="submit"
              >
                Google
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
