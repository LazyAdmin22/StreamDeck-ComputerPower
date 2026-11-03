import streamDeck from "@elgato/streamdeck";

import { Logout } from "./actions/logout";
import { Restart } from "./actions/restart";
import { Shutdown } from "./actions/shutdown";
import { Sleep } from "./actions/sleep";

streamDeck.logger.setLevel("info");

streamDeck.actions.registerAction(new Shutdown());
streamDeck.actions.registerAction(new Sleep());
streamDeck.actions.registerAction(new Restart());
streamDeck.actions.registerAction(new Logout());

streamDeck.connect();
