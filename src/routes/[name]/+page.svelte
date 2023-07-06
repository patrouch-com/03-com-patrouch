<script>
	/**
	 * @type {any}
	 */
	export let data;

	$: console.log(1, data);
</script>

<h1>{data.pokemon.name}</h1>
<img src={data.pokemon.sprites.front_default} alt={data.pokemon.name} />
