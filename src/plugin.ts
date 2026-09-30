// need to link if it's the first time `streamdeck link "com.xlevia.xqwertya-switching.sdPlugin"`
// to run this program run `npm run watch` in cmd at the xqwertya-switching directory

import streamDeck from "@elgato/streamdeck";

import { SendVirtualKey } from "./actions/SendVirtualKey";

// logging
streamDeck.logger.setLevel("trace");

// register action
streamDeck.actions.registerAction(new SendVirtualKey());

// connect
streamDeck.connect();
