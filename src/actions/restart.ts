import { action } from "@elgato/streamdeck";
import { spawn } from "node:child_process";
import { HoldToConfirmAction } from "./hold-to-confirm-action";

@action({ UUID: "com.lazyadmin22.computer-power.restart" })
export class Restart extends HoldToConfirmAction {
	protected run(): void {
		spawn("shutdown", ["/r", "/t", "0"], { detached: true, stdio: "ignore" }).unref();
	}
}
