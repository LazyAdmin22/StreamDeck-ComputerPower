import { KeyDownEvent, KeyUpEvent, SingletonAction } from "@elgato/streamdeck";

const HOLD_MS = 800;

/**
 * Base action that only fires once a key has been held down for at least
 * {@link HOLD_MS}. A quick tap flashes the SDK's built-in "alert" state
 * instead, so a mis-press of a destructive power action does nothing.
 */
export abstract class HoldToConfirmAction extends SingletonAction {
	#downAt = new Map<string, number>();

	override onKeyDown(ev: KeyDownEvent): void {
		this.#downAt.set(ev.action.id, Date.now());
	}

	override async onKeyUp(ev: KeyUpEvent): Promise<void> {
		const downAt = this.#downAt.get(ev.action.id);
		this.#downAt.delete(ev.action.id);
		if (downAt === undefined) {
			return;
		}

		if (Date.now() - downAt >= HOLD_MS) {
			await ev.action.showOk();
			this.run();
		} else {
			await ev.action.showAlert();
		}
	}

	protected abstract run(): void;
}
