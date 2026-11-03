import { action } from "@elgato/streamdeck";
import { spawn } from "node:child_process";
import { HoldToConfirmAction } from "./hold-to-confirm-action";

@action({ UUID: "com.lazyadmin22.computer-power.logout" })
export class Logout extends HoldToConfirmAction {
	protected run(): void {
		spawn("shutdown", ["/l"], { detached: true, stdio: "ignore" }).unref();
	}
}
