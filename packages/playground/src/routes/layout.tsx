import { Box, Stack } from "@chakra-ui/react";
import { Head, Link, StyledLink, Layout } from "rakkasjs";

import "./layout.css";

const MainLayout: Layout = ({ children }) => (
    <>
        <Head title="Rakkas" />

        <Box
            as="header"
            display="flex"
            alignItems="flex-end"
            justifyContent="space-between"
            borderBottom="1px"
            borderBottomColor="gray.100"
            py="5"
            px="4"
        >
            <Box as={Link} href="/" fontWeight="bold" fontSize={"2xl"}>
                openapi-zod-client playground
            </Box>
            <Stack direction="row">
                <Box
                    as={StyledLink}
                    href="/"
                    px="2"
                    borderRadius="md"
                    _hover={{ backgroundColor: "pink.100" }}
                    activeClass="activeLink"
                >
                    Home
                </Box>
                <Box
                    as={StyledLink}
                    href="/about"
                    px="2"
                    borderRadius="md"
                    _hover={{ backgroundColor: "pink.100" }}
                    activeClass="activeLink"
                >
                    About
                </Box>
                <Box
                    as={StyledLink}
                    href="/todo"
                    px="2"
                    borderRadius="md"
                    _hover={{ backgroundColor: "pink.100" }}
                    activeClass="activeLink"
                >
                    Todo
                </Box>
                <Box
                    as={StyledLink}
                    href="/editor"
                    px="2"
                    borderRadius="md"
                    _hover={{ backgroundColor: "pink.100" }}
                    activeClass="activeLink"
                >
                    Editor
                </Box>
            </Stack>
        </Box>

        <Box as="section" pt="4" pl="4" h="100%" maxHeight="100%" overflow="auto">
            {children}
        </Box>
    </>
);

export default MainLayout;
