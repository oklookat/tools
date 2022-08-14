import { writable } from "svelte/store";

export const title = writable("Утилиты")

export function randomArrayElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}