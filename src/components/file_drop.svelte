<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher<{
        /** on file uploaded */
        drop: File | File[];
    }>();

    /** allow upload multiple files? */
    export let multipleUploading = false;

    /** file(s) mime/ext to accept */
    export let accept = "";

    /** file input for upload */
    let inputEL: HTMLInputElement;

    /** text used in upload field */
    let hintText = "";

    /** drag on uploader? */
    let isDragActive = false;

    /** set hint text */
    dragSwitcher(false);

    /** when file upload button clicked */
    function onUploadClick() {
        if (!inputEL) {
            return;
        }
        inputEL.value = "";
        inputEL.click();
    }

    /** when file changed on file input */
    async function onInputChange(e: Event) {
        const target = e.target as HTMLInputElement;
        if (!target || !target.files) {
            return;
        }
        if (target.files.length < 1) {
            return 0;
        }
        let files: File[] = [];
        for (const file of target.files) {
            if(!file || !(file instanceof File)) {
                continue
            }
            if(multipleUploading) {
                files.push(file);
            } else {
                dispatch("drop", file);
                return
            }
        }
        if(files.length < 1) {
            return
        }
        dispatch("drop", files);
    }

    /** uploader drag start / leave */
    function onDrag(e: DragEvent) {
        e.preventDefault();
        const isStart = e.type === "dragenter" && !isDragActive;
        if (isStart) {
            dragSwitcher(true);
        } else if (e.type === "dragleave" && isDragActive) {
            dragSwitcher(false);
        }
    }

    /** set isDragActive & hint text */
    function dragSwitcher(enable: boolean) {
        if (enable) {
            hintText = "отпустите для загрузки";
        } else {
            hintText = "нажмите или перетащите для загрузки";
        }
        isDragActive = enable;
    }

    /** https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop */
    function onDrop(e: DragEvent) {
        e.preventDefault();
        if (!e || !e.dataTransfer) {
            return;
        }
        dragSwitcher(false);

        const files: File[] = [];
        for (let i = 0; i < e.dataTransfer.items.length; i++) {
            const isFile = e.dataTransfer.items[i].kind === "file";
            if (!isFile) {
                continue;
            }

            const file = e.dataTransfer.items[i].getAsFile();
            if (!file) {
                continue;
            }

            if (multipleUploading) {
                files.push(file);
                continue;
            } else {
                dispatch("drop", file);
                return;
            }
        }
        if (files.length < 1) {
            return;
        }
        dispatch("drop", files);
    }

    /** https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop */
    function onDragOver(e: DragEvent) {
        e.preventDefault();
    }
</script>

<div
    class="dropzone"
    on:mousedown={() => onUploadClick()}
    on:dragenter={onDrag}
    on:dragleave={onDrag}
    on:drop={onDrop}
    on:dragover={onDragOver}
>
    <div class="hint content">{hintText}</div>
    <input
        type="file"
        {accept}
        style="display: none"
        multiple={multipleUploading}
        bind:this={inputEL}
        on:input={onInputChange}
    />
</div>

<style lang="scss">
    .dropzone {
        background-color: var(--color-level-1);
        cursor: pointer;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .hint {
            text-align: center;
            pointer-events: none;
            opacity: 0.5;
        }
    }
</style>
