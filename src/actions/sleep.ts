import { action } from "@elgato/streamdeck";
import { spawn } from "node:child_process";
import { HoldToConfirmAction } from "./hold-to-confirm-action";

@action({ UUID: "com.lazyadmin22.computer-power.sleep" })
export class Sleep extends HoldToConfirmAction {
	protected run(): void {
		spawn("rundll32.exe", ["powrprof.dll,SetSuspendState", "0,1,0"], { detached: true, stdio: "ignore" }).unref();
	}
}
