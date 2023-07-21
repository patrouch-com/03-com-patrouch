<script>
 export let data;
 const gophers  = data.gophers;
 const Component = data.Component;

</script>


<h1>{data.title}</h1>
{#each gophers as gopher}
<div>
<Component {gopher} />
</div>
{/each}


