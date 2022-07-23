<script>
  export let summary;
  export let colour;
  $: if (summary.length % 2 == 0) {
    colour = "red";
  }
  $: if (summary.length % 5 == 0) {
    colour = "green";
  }
</script>

<p
  class=" cursor-pointer inline-block px-4 py-2 bg-{colour}-200 rounded-md my-1 transform hover:scale-125 origin-left transition-transform "
>
  {summary}
</p>

<style></style>
