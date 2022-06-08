<script>
    import { onMount } from "svelte";
    import Images from "../components/Images.svelte";

    const registryHost = import.meta.env.VITE_REGISTRY_HOST;
    const registryPort = import.meta.env.VITE_REGISTRY_PORT;
    const host = `${registryHost}:${registryPort}`
    let jsonResponse = {};
    let response = '';
    onMount(async () => {
        const result = await fetch(`http://${host}/v2/_catalog`);
        jsonResponse = await result.json();

        const manifest = await fetch(`http://${host}/v2/golang/manifests/latest`);
        response = await manifest.json();
    });
</script>

<main class="section">
    <h1>Docker Registry</h1>

    {#if Object.keys(jsonResponse).length > 0}
        <h3>{registryHost} inventory</h3>
        <Images images={jsonResponse.repositories} />
    {:else}
        <p>loading</p>
    {/if}
</main>

<style>
</style>
