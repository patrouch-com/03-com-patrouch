<script lang="ts">
 export let data;

</script>


<h1>Users Data</h1>

{#each data.users as user} 
<h2>{user.email_address}</h2>
{/each}


