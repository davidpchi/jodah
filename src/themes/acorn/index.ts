import { Alert } from "./components/alert";
import { Tag } from "./components/tag";
import { Button } from "./components/button";
import { extendTheme } from "@chakra-ui/react";
import { Table } from "./components/table";
import { Tabs } from "./components/tabs";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Heading } from "./components/heading";
import { Text } from "./components/text";

export const primaryColor = {
    50: "#CCF3EB",
    100: "#88E1DC",
    200: "#66D4D6",
    300: "#44BFCB",
    400: "#22A6BF",
    500: "#008AB2",
    600: "#00589F",
    700: "#002D8A",
    800: "#000B75",
    900: "#01005F"
};

export const secondaryColor = {
    50: "#e2f2f3",
    100: "#b6dfe1",
    200: "#88cbcd",
    300: "#5cb7b8",
    400: "#40a7a7",
    500: "#319795",
    600: "#2d8a88",
    700: "#2a7a77",
    800: "#286a66",
    900: "#224d49"
};

export const acorn = extendTheme({
    colors: {
        primary: primaryColor,
        secondary: secondaryColor,
        bodyFont: "#718096",
        background: "#F8F9FA"
    },
    styles: {
        global: (props: StyleFunctionProps | Record<string, any>) => ({
            body: {
                bg: mode("background", "black")(props)
            }
        })
    },
    components: {
        Button,
        Tag,
        Alert,
        Table,
        Tabs,
        Heading,
        Text
    }
});
