import streamDeck from "@elgato/streamdeck";
import { action, KeyDownEvent, SingletonAction } from "@elgato/streamdeck";
import { execFile } from "child_process"
import path from "path";
import { fileURLToPath } from "url";

// get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * VK action sender
 */
@action({ UUID: "com.xlevia.xqwertya-switching.profile-setter"})
export class SendVirtualKey extends SingletonAction<ProfileSwitcherSettings> {
	// what to do when the key is pressed
	override async onKeyDown(ev: KeyDownEvent<ProfileSwitcherSettings>): Promise<void> {
		// run the virtual key sender file
			// relies on a working copy of SendVK.exe in ./bin/
		execFile(
			path.join(__dirname, "SendVK.exe"),
			[`${ev.payload.settings.id_num}`]
		)
	}
}

/**
 * settings for {@link SendVirtualKey}
 */
type ProfileSwitcherSettings = {
	id_num?: number;
};