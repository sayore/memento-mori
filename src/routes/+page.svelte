<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Welcome to the Hub of Insanity</h1>

	<p>
		This is a test of the new layout and styling. The left menu should be visible, and the content
		should be on the right. The header should be at the top, with a skewed effect.
	</p>

	<p>
		The theme should be dark, with blue and magenta accents. The font should be a monospace font.
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
