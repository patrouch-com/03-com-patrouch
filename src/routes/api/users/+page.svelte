<script>

export let data

$: ({users} = data)

</script>


<h1> API - Users </h1>
{#each users as user}
<h2>{data.results}</h2>
{/each}
