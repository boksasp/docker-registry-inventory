<script>
    import JsonViewer from "./JsonViewer.svelte";
    import { sortHistoryElements, historyCommands } from "../util/jsonUtils";
    export let history = [];

    let sortedHistory = [];

    sortedHistory = sortHistoryElements(history);

    let commands = historyCommands(sortedHistory);
</script>

<div>
    {#each commands as command}
        <div class="cmd">
            <code>{command}</code>
        </div>
    {/each}
</div>

<style>
    .cmd {
        font-size: medium;
        margin-bottom: 0.5em;
        padding: 0.5em;
        background-color: #445d6d;
        color: white;
        font-family: 'Ubuntu Mono', consolas, monaco, monospace;
    }
</style>
