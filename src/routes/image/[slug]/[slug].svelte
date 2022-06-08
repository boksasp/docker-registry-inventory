<script>
    import { page } from "$app/stores";
    import { onDestroy, onMount } from "svelte";
    import ManifestViewer from "../../../components/ManifestViewer.svelte";

    const registryHost = import.meta.env.VITE_REGISTRY_HOST;
    const registryPort = import.meta.env.VITE_REGISTRY_PORT;
    let host = `${registryHost}:${registryPort}`;

    let [image, tag] = [];
    const unsubscribe = page.subscribe((currentPage) => {
        [image, tag] = currentPage.url.pathname
            .substring("/image/".length)
            .split("/");
    });

    onDestroy(unsubscribe);

    let manifestResponse;
    let manifestJSON;
    let error = null;

    onMount(async () => {
        const response = await fetch(
            `http://${host}/v2/${image}/manifests/${tag}`
        );
        manifestResponse = await response.json();

        manifestJSON = {
            text: undefined,
            json: {
                ...manifestResponse,
            },
        };

        error = await !response.ok;
    });
</script>

<p>{image}:{tag} details</p>
{#if error}
    <p class="error">
        oh fuck:
        {#each manifestResponse.errors as err}
            {err.code}
        {/each}
    </p>
{:else if manifestResponse !== undefined}
    <code>arch: {manifestResponse.architecture}</code>
    <ManifestViewer content={manifestJSON} />
{/if}

<style>
    .error {
        color: red;
    }
</style>
