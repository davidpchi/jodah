import React from "react";

import { Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";

export const Loading = React.memo(function Loading({ text }: { text: string }) {
    return (
        <Flex minHeight="100vh" justify="center" align="start">
            <Flex width="100%" height="100%" justify="center" align="center" flexDirection="column">
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <Spinner
                        style={{
                            position: "absolute",
                            width: "275px",
                            height: "275px"
                        }}
                        size={"xl"}
                    />
                    <img
                        alt="squirrel gif"
                        style={{
                            width: "25%",
                            height: "25%",
                            objectFit: "contain"
                        }}
                        src={process.env.PUBLIC_URL + "/jodah.png"}
                    />
                </Flex>
                <h1
                    style={{
                        color: "black",
                        fontSize: 48,
                        marginRight: 64,
                        marginLeft: 64
                    }}
                >
                    {text}
                </h1>
            </Flex>
        </Flex>
    );
});
