// import React, { useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Text,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
// } from '@chakra-ui/react';
// import Login from '../components/Authentication/Login';
// import Signup from '../components/Authentication/Signup';
// import { useNavigate } from 'react-router-dom'; // ✅ Corrected import



// const HomePage = () => {
//   const navigate = useNavigate(); // ✅ Updated hook

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("userInfo"));

//     if (user) navigate("/chats"); // ✅ Corrected logic (redirect if user exists)
//   }, [navigate]);

//   return (
//     <Container maxW='xl' centerContent>
//       <Box
//         display="flex"
//         justifyContent="center"
//         p={3}
//         bg="white"
//         w="100%"
//         m="40px 0 15px 0"
//         borderRadius="lg"
//         borderWidth="1px"
//       >
//         <Text fontSize="4xl" fontFamily="work sans" color="black" align="center">
//           Talk-A-Tive
//         </Text>
//       </Box>

//       <Box bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px">
//         <Tabs variant="soft-rounded" colorScheme="green">
//           <TabList mb="1em">
//             <Tab width="50%">Log In</Tab>
//             <Tab width="50%">Sign Up</Tab>
//           </TabList>
//           <TabPanels>
//             <TabPanel>
//               <Login />
//             </TabPanel>
//             <TabPanel>
//               <Signup />
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </Box>
//     </Container>
//   );
// };

// export default HomePage;

import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("userInfo"));
  //  console.log(user);
  //   if (user) navigate("/chats");
  // }, [navigate]);

  useEffect(() => {
  const userInfo = localStorage.getItem("userInfo");
  console.log("Raw userInfo:", userInfo);
  try {
    const user = JSON.parse(userInfo);
    console.log("Parsed userInfo:", user);
    if (user && user.token) { // ✅ Optional: only redirect if valid token exists
      navigate("/chats");
    }
  } catch (error) {
    console.error("Invalid JSON in userInfo");
  }
}, [navigate]);

  
  return (
    <Container maxW='xl' centerContent>
      <Box
      d="flex"
      justifyContent="center"
      p={3}
      bg={"white"}
      w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="work sans" color="black"  align="center">
            Talk-A-Tive
        </Text>
      </Box>

      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" >
        <Tabs variant='soft-rounded' >
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
       <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
      
    </Container>
  )
}

export default HomePage;