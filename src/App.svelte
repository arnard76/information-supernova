<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/index.svelte";
  import Raw from "./routes/raw/index.svelte";
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/raw" component={Raw} />
</Router>
