import { createHashRouter } from "react-router-dom";

import Root from "./Root";
import { CommanderDetails, loader as commanderLoader } from "../components/commanderOverview/CommanderDetails";
import { CommanderOverview } from "../components/commanderOverview/CommanderOverview";
import { Error } from "../components/Error";
import { MatchDetails, loader as matchLoader } from "../components/matchHistory/MatchDetails";
import { MatchHistory } from "../components/matchHistory/MatchHistory";
import { PlayerOverview } from "../components/playerOverview/PlayerOverview";
import { PlayerDetails, loader as playerLoader } from "../components/playerOverview/playerDetails/PlayerDetails";
import { CommanderTrends } from "../components/commanderTrends/CommanderTrends";
import Home from "../components/home/Home";

type route = {
    name: string;
    path: string;
    loader?: any;
    element: JSX.Element;
};

export const routes: { [path: string]: route } = {
    "/": {
        name: "Jodah",
        path: "/",
        element: <Home />
    },
    // this route is here primarily to allow for easy discord auth redirect
    // "/jodah": {
    //     name: "Jodah",
    //     path: "/",
    //     element: <Home />
    // },
    "/playerOverview": {
        name: "Player Overview",
        path: "/playerOverview",
        element: <PlayerOverview />
    },
    "/playerOverview/:playerId": {
        name: "Player Details",
        path: "/playerOverview/:playerId",
        loader: playerLoader,
        element: <PlayerDetails />
    },
    "/matchHistory": {
        name: "Match History",
        path: "/matchHistory",
        element: <MatchHistory />
    },
    "/matchHistory/:matchId": {
        name: "Match Details",
        path: "/matchHistory/:matchId",
        loader: matchLoader,
        element: <MatchDetails />
    },
    // "/matchTrends": {
    //     name: "Match Trends",
    //     path: "/matchTrends",
    //     element: <MatchTrends />
    // },
    "/commanderOverview": {
        name: "Commander Overview",
        path: "/commanderOverview",
        element: <CommanderOverview />
    },
    "/commanderTrends": {
        name: "Commander Trends",
        path: "/commanderTrends",
        element: <CommanderTrends />
    },
    "/commanderOverview/:commanderId": {
        name: "Commander Details",
        path: "/commanderOverview/:commanderId",
        loader: commanderLoader,
        element: <CommanderDetails />
    }
    // "/articles": {
    //     name: "Articles",
    //     path: "/articles",
    //     element: <NewsOverview />
    // },
    // "/articles/:newsId": {
    //     name: "Articles",
    //     path: "/articles/:newsId",
    //     loader: newsLoader,
    //     element: <NewsDetail />
    // },
    // "/matchHistory/submit": {
    //     name: "Match History Submission",
    //     path: "/matchHistory/submit",
    //     element: <MatchSubmission />
    // }
};

export const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error error={"Whoops! Made a wrong turn!"} />,
        children: Object.values(routes)
    }
]);
