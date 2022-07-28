<script>
  import { rawSites } from "../../lib/summaries_store";

  $: console.log($rawSites);
  let main;
</script>

<main bind:this={main}>
  {#each $rawSites as rawSite, index (index)}
    <section>
      <div
        class="closed"
        on:click={() => main.children[index].classList.toggle("open")}
      >
        Click to open: {index}
      </div>
      <div class="raw-site">
        {@html rawSite}
      </div>
    </section>
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  main section {
    position: relative;
    max-height: 100vh;
    overflow-y: scroll;
  }

  main section .closed {
    background: lightgray;
    padding: 4rem;
  }

  main section .raw-site {
    display: none;
  }

  main section.open .raw-site {
    position: absolute;
    top: 15rem;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
