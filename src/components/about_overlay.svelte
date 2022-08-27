<script lang="ts">
    import Overlay from "./overlay.svelte";

    export let onClose: (e: MouseEvent) => void;
</script>

<Overlay {onClose}>
    <div class="about">
        <slot />
    </div>
</Overlay>

<style lang="scss">
    .about {
        align-self: center;
        justify-self: center;
        background-color: var(--color-level-1);
        border: 1px solid var(--color-level-2);
        width: 80%;
        max-width: 444px;
        padding: 12px;
        border-radius: 4px;
        height: 40%;
        max-height: 322px;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
</style>
