import { action } from "@elgato/streamdeck";
import { spawn } from "node:child_process";
import { HoldToConfirmAction } from "./hold-to-confirm-action";

@action({ UUID: "com.lazyadmin22.computer-power.shutdown" })
export class Shutdown extends HoldToConfirmAction {
	protected run(): void {
		spawn("shutdown", ["/s", "/t", "0"], { detached: true, stdio: "ignore" }).unref();
	}
}
