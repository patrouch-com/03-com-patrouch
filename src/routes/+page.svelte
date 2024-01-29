<script>
import 'vidstack/player/styles/default/theme.css';
import 'vidstack/player/styles/default/layouts/video.css';
import 'vidstack/player';
import 'vidstack/player/layouts';
import 'vidstack/player/ui';
	import { message } from '$lib/message.js';
	export let data;

</script>

<media-player title="Sprite Fight" src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4">
  <media-provider></media-provider>
  <media-video-layout thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"></media-video-layout>
</media-player>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>

<h1>Welcome to Patrouch.com</h1>

<p>{message}</p>

