<script>
    import { onMount } from "svelte";
    import Images from "../components/Images.svelte";
    import Spinner from "../components/Spinner.svelte";

    const registryHost = import.meta.env.VITE_REGISTRY_HOST;
    const registryPort = import.meta.env.VITE_REGISTRY_PORT;
    const host = `${registryHost}:${registryPort}`;
    let jsonResponse = {};
    if (registryHost !== undefined && registryPort !== undefined) {
        onMount(async () => {
            const result = await fetch(`http://${host}/v2/_catalog`);
            jsonResponse = await result.json();
        });
    }
</script>

<main class="section">
    <h1>Docker Registry</h1>

    {#if registryHost === undefined}
        <p>Couldn't find host address and/or port in config file.</p>
    {/if}
    {#if Object.keys(jsonResponse).length > 0}
        <h3>{registryHost} inventory</h3>
        <Images images={jsonResponse.repositories} />
    {:else}
        <Spinner text="fetching data from registry {host}" />
    {/if}
</main>

<style>
</style>
