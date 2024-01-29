<script>
        import videojs from 'video.js';
	import { onMount } from 'svelte';
	import { message } from '$lib/message.js';
	export let data;

  const options = {};
  let video_element;

  onMount(() => {
    const player = videojs('vid1', video_element, options, function onPlayerReady() {
      videojs.log('Your player is ready!');

      // In this context, `this` is the player that was created by Video.js.
      this.play();

    // How about an event listener?
      this.on('ended', function() {
       videojs.log('Awww...over so soon?!');
      });
    });
  });
</script>

<video id="vid1" class="video-js">
  <source src="//vjs.zencdn.net/v/oceans.mp4">
</video>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>

<h1>Welcome to Patrouch.com</h1>

<p>{message}</p>

