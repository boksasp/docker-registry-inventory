<script>
    export let showDescription = false;
    export let text = "loading";
</script>

<div id="spinner-container">
    <div id="html-spinner" />
    {#if showDescription || text !== "loading"}
        <p>{text}</p>
    {/if}
</div>

<style>
    p {
        font-size: 10pt;
    }
    #spinner-container {
        width: 48px;
    }

    #html-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #3383c0;
        border-top: 4px solid #a0cff3;
        border-radius: 50%;
    }

    #html-spinner {
        -webkit-transition-property: -webkit-transform;
        -webkit-transition-duration: 1.2s;
        -webkit-animation-name: rotate;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;

        -moz-transition-property: -moz-transform;
        -moz-animation-name: rotate;
        -moz-animation-duration: 1.2s;
        -moz-animation-iteration-count: infinite;
        -moz-animation-timing-function: linear;

        transition-property: transform;
        animation-name: rotate;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @-webkit-keyframes rotate {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }

    @-moz-keyframes rotate {
        from {
            -moz-transform: rotate(0deg);
        }
        to {
            -moz-transform: rotate(360deg);
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
