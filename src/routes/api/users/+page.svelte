<script>

export let data

$: ({results} = data)

</script>


<h1> API - Users </h1>
{#each result as result}
<h2>{results}</h2>
{/each}
