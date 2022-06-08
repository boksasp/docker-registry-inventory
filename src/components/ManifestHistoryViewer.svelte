<script>
    import JsonViewer from "./JsonViewer.svelte";
    import { sortHistoryElements, historyCommands, addTruncatedCommands } from "../util/jsonUtils";
import CmdDetails from "./CmdDetails.svelte";
    export let history = [];

    let sortedHistory = [];

    sortedHistory = sortHistoryElements(history);

    let commands = historyCommands(sortedHistory);
    commands = addTruncatedCommands(commands)

    let detailedCommand = commands[0].cmd;

    function setSelectedCommand(cmd) {
        detailedCommand = cmd
    }
</script>

<div class="hist-container">
    <div class="hist-commands">
        {#each commands as command}
            <div class="cmd" on:click={() => setSelectedCommand(command.cmd)}>
                <code>{command.truncated}</code>
            </div>
        {/each}
    </div>
    <div class="hist-details">
        <h4 class="no-top-margin">Command</h4>
        <CmdDetails command={detailedCommand}/>
    </div>
</div>

<style>
    .hist-container {
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        align-content: stretch;
        gap: 2em;
        margin-top: 2em;
        margin-bottom: 2em;
    }

    .hist-commands {
        flex-grow: 1;
        max-width: 40%;
        flex-direction: column;
        min-width: 300px;
        max-width: 500px;
    }

    .hist-details {
        flex-grow: 2;
        max-width: 50%;
        word-wrap: break-word;
    }

    .cmd {
        font-size: medium;
        margin-bottom: 0.5em;
        padding: 0.5em;
        background-color: #445d6d;
        color: white;
        font-family: "Ubuntu Mono", consolas, monaco, monospace;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .cmd:hover {
        cursor: pointer;
        background-color: #819cad;
    }
</style>
