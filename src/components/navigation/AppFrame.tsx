import { ReactNode } from "react";

import { Box, Drawer, DrawerContent, Flex, IconButton, useDisclosure, Text } from "@chakra-ui/react";

import { Header, useHeaderTitle } from "./Header";
import { Sidebar } from "./Sidebar";
import { FeedbackButton } from "../FeedbackButton";
import { FiBarChart, FiCalendar, FiHome, FiMenu, FiShield, FiTrendingUp, FiUsers } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { SidebarNavItem } from "./SidebarNavItem";
import { IconType } from "react-icons";

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

export default function AppFrame({ children }: { children: ReactNode }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const linkItems = [...LinkItems];

    return (
        <>
            <Flex
                alignItems={"flex-start"}
                style={{
                    position: "fixed",
                    left: "4px",
                    top: "4px"
                }}
                display={{ base: "none", md: "flex" }}
                marginBottom={"16px"}
                flexDirection={"column"}
            >
                <IconButton
                    onClick={onOpen}
                    variant="ghost"
                    aria-label="open menu"
                    icon={<FiMenu />}
                    marginBottom={"16px"}
                />
                {linkItems.map((link) => (
                    <Box marginBottom={"16px"}>
                        <SidebarNavItem
                            key={link.name}
                            icon={link.icon}
                            route={link.route}
                            onClose={onClose}
                            label={""}
                        />
                    </Box>
                ))}
            </Flex>
            <Box minH="100vh">
                <Drawer
                    autoFocus={false}
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    returnFocusOnClose={false}
                    onOverlayClick={onClose}
                    size="xs"
                >
                    <DrawerContent>
                        <Sidebar onClose={onClose} />
                    </DrawerContent>
                </Drawer>
                <Box>
                    <Header onProfileIconClick={onOpen} />
                </Box>
                <Box marginLeft={{ base: 0, md: 20 }} p="8">
                    {children}
                    <Flex
                        height={"64px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        marginTop={"64px"}
                        flexDirection={"column"}
                    >
                        <div style={{ textAlign: "center", fontStyle: "italic", fontSize: "12px" }}>
                            This site contains unofficial Fan Content permitted under the{" "}
                            <a
                                href="https://company.wizards.com/en/legal/fancontentpolicy"
                                style={{ textDecoration: "underline" }}
                            >
                                Fan Content Policy
                            </a>
                            . Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards
                            of the Coast. ©Wizards of the Coast LLC.
                        </div>
                    </Flex>
                </Box>
            </Box>
        </>
    );
}
