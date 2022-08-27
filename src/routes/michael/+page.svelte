<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import AboutOverlay from "../../components/about_overlay.svelte";
    import Button from "../../components/button.svelte";
    import { Recorder, getPrettySeconds } from "./logic";

    const errors = {
        active: true,
        message: "Ждем разрешение на доступ к микрофону.",
    };

    let mediaStream: MediaStream;
    let recorder: Recorder;
    let recordSecondsPretty = "00:00";
    let state: RecordingState = "inactive";

    onMount(async () => {
        await getMediaStream();
    });

    onDestroy(() => {
        if (!recorder) {
            return;
        }
        recorder.destroy();
    });

    async function getMediaStream() {
        let err: any;
        try {
            mediaStream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });
        } catch (errd) {
            err = errd;
        }

        if (!err) {
            if (mediaStream) {
                errors.active = false;
                setupRecorder();
            } else {
                // user ignored dialog?
                errors.message =
                    "Микрофон недоступен. Может вы проигнорировали диалог на доступ к микрофону?";
            }
            return;
        }

        // error
        errors.active = true;
        if (!("name" in err)) {
            errors.message = err;
        }
        switch (err.name) {
            default:
                errors.message = `${err}`;
                break;
            case "NotAllowedError":
                errors.message = "Доступ к микрофону запрещен.";
                break;
            case "NotFoundError":
                errors.message = "Устройство для записи не найдено.";
                break;
        }
    }

    let chunks: Blob[] = [];

    function chunksToAudioSource(): string {
        const blob = new Blob(chunks, { type: recorder.mimeType });
        return window.URL.createObjectURL(blob);
    }

    function setupRecorder() {
        recorder = new Recorder(mediaStream);
        recorder.onDurationChanged = (sec) => {
            recordSecondsPretty = getPrettySeconds(sec);
        };
        recorder.onStateChanged = (s) => {
            state = s;
        };
        recorder.ondataavailable = (e) => {
            chunks.push(e.data);
            chunks = chunks;
        };
    }

    function rec() {
        chunks = [];
        recorder.start();
    }

    function pause() {
        recorder.pause();
    }

    function resume() {
        recorder.resume();
    }

    function stop() {
        recorder.stop();
    }

    let isAboutActive = false;
</script>

<svelte:head>
    <title>Майкл</title>
    <meta property="og:title" content="Майкл" />
    <meta
        name="description"
        content="Записать звук с микрофона, прослушать, сохранить."
    />
</svelte:head>

{#if isAboutActive}
    <AboutOverlay onClose={() => (isAboutActive = false)}>
        <div>
            Запись микрофона с возможностью прослушивания и сохранения аудио.
        </div>
        <div><b>Сторонние библиотеки:</b></div>
        <a
            href="https://github.com/chrisguttandin/extendable-media-recorder"
            style="text-decoration: underline;">extendable-media-recorder</a
        >
        <a
            href="https://github.com/chrisguttandin/extendable-media-recorder-wav-encoder"
            style="text-decoration: underline;"
            >extendable-media-recorder-wav-encoder</a
        >
    </AboutOverlay>
{/if}

{#if errors.active}
    <div class="attention">
        {errors.message}
    </div>
{/if}

{#if !errors.active}
    <div class="michael">
        <div class="util-title">Майкл v1.0</div>
        <div class="underline" on:click={() => (isAboutActive = true)}>
            Об утилите
        </div>
        <div class="recorder">
            <div class="time">{recordSecondsPretty}</div>
            <div class="controls">
                {#if state === "inactive"}
                    <Button on:click={rec}>Start</Button>
                {:else if state === "recording"}
                    <Button on:click={pause}>Pause</Button>
                {:else if state === "paused"}
                    <Button on:click={resume}>Resume</Button>
                {/if}
                <Button on:click={stop}>Stop</Button>
            </div>
        </div>
        {#if chunks.length > 0}
            <div class="player">
                <audio controls src={chunksToAudioSource()} />
            </div>
        {/if}
    </div>
{/if}

<style lang="scss">
    .attention {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .michael {
        max-width: 512px;
        margin: auto;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        gap: 16px;
        .recorder {
            background-color: var(--color-level-1);
            width: 100%;
            height: 164px;
            padding: 16px;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr max-content;
            .time {
                font-size: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .controls {
                display: flex;
                flex-direction: row;
                gap: 12px;
            }
        }
        .player {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
        }
    }
</style>
