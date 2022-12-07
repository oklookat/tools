<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher<{ click: MouseEvent }>();

    export let disabled = false
</script>

<div class="button {disabled ? 'disabled' : ''}" on:mousedown={(e) => {if(!disabled) dispatch("click", e)}}>
    <slot />
</div>

<style lang="scss">
    .button {
        background-color: var(--color-level-1);
        border: 1px solid var(--color-level-2);
        border-radius: 6px;
        width: 100%;
        padding: 8px;
        min-height: 44px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        &.disabled {
            cursor: not-allowed;
            background-color: transparent;
        }
    }
</style>
