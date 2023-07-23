<script lang="ts">
 export let data;

</script>


<h1>Users Data</h1>

{#each results as user} 
<h2>{user.email_address}</h2>
{/each}


