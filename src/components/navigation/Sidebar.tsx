import { IconType } from "react-icons";
import { FiBarChart, FiCalendar, FiHome, FiShield, FiTrendingUp, FiUsers } from "react-icons/fi";

import { Box, useColorModeValue, Flex, CloseButton, VStack, BoxProps, Text, Image } from "@chakra-ui/react";

import { SidebarNavItem } from "./SidebarNavItem";

import jodah from "../../assets/jodah.png";

interface LinkItemProps {
    name: string;
    icon: IconType;
    route: string;
}

const LinkItems: Array<LinkItemProps> = [
    { name: "Home", icon: FiHome, route: "/" },
    { name: "Player Overview", icon: FiUsers, route: "/playerOverview" },
    { name: "Commander Overview", icon: FiShield, route: "/commanderOverview" },
    { name: "Commander Trends", icon: FiBarChart, route: "/commanderTrends" },
    { name: "Match History", icon: FiCalendar, route: "/matchHistory" }
];

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

export const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
    const linkItems = [...LinkItems];

    return (
        <Box
            transition="3s ease"
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full" }}
            pos="fixed"
            h="full"
            {...rest}
            boxShadow={"0px 12px 18px 2px rgba(0,0,0,0.3)"}
        >
            <Flex
                h="56px"
                alignItems="center"
                justifyContent={"space-between"}
                paddingRight={"8px"}
                paddingLeft={"20px"}
                backgroundColor={"white"}
                paddingTop={"20px"}
                flexDirection={"row"}
            >
                <Flex flexDirection={"row"} alignItems={"center"}>
                    <Image src={jodah} width={"48px"} height={"48px"} />
                    <Text
                        fontSize="20"
                        fontWeight="bold"
                        textTransform="uppercase"
                        color="gray.600"
                        noOfLines={1}
                        paddingLeft={"16px"}
                    >
                        Jodah
                    </Text>
                </Flex>
                <CloseButton onClick={onClose} />
            </Flex>
            <VStack
                spacing="24px"
                align="stretch"
                height={"100%"}
                justify="flex-start"
                paddingTop={"24px"}
                paddingBottom={"24px"}
            >
                {linkItems.map((link) => (
                    <SidebarNavItem
                        key={link.name}
                        icon={link.icon}
                        route={link.route}
                        onClose={onClose}
                        label={link.name}
                    ></SidebarNavItem>
                ))}
            </VStack>
        </Box>
    );
};
