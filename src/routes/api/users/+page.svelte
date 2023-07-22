<script lang="ts">
export let data;
</script>

<h1>User Data</h1>
{#each data.users as user}
<h2>{user.name}</h2>
{/each}
