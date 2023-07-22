<script>

    export let data;
$: ({users} = data)

</script>



<h1> API  - Users</h1>
{#each users as user}

<p>{data.success}</p>

{/each}
