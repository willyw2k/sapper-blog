<svelte:head>
	<title>{post.fmData.attributes.title}-GzhiYi's blog</title>
	<meta name="description" content="{post.fmData.attributes.description || `GzhiYi's blog`}">
	<meta name="keywords" content="{post.fmData.attributes.keywords || `GzhiYi's blog`}">
</svelte:head>
<div class='content'>
	<h1>{post.fmData.attributes.title}</h1>
	<p class="desc">
		{new Date(post.fmData.attributes.date).toLocaleDateString()}
		{#each post.fmData.attributes.labels as label}
			<span class="label">{label}</span>
		{/each}
	</p>
	{@html post.html}
</div>
{#if 'data' in likeData}
	<div class="clap-here flex cursor-pointer justify-center">
		{#if loading}
			<span>处理中...</span>
		{:else}
			<img src="clap.png" class="w-8 h-8" alt="" on:click={doLike}>
			<span class="ml-1">{likeData.data || ''}</span>
		{/if}
	</div>
{/if}
<!-- <div class="divide relative">
	<span class="line"></span>
	<img class="absolute w-6 h-6 cat" src="favicon.png" alt="catcat!">
</div> -->
<div id="vcomments" class="my-8"></div>
<!-- <div id="gitalk-container"></div> -->
<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import { onMount, onDestroy } from 'svelte'
	import Fingerprint2 from 'fingerprintjs2'
	let zoom = null
	let storeFinger = ''
	let likeData = {}
	let loading = false
	onMount(() => {
		try {
			import('../../../static/medium-zoom.esm.js').then(mediumZoom => {
				zoom = mediumZoom.default('[data-zoomable]')
			})
		} catch (error) {
			console.log('import zoom error', error)
		}
		new Valine({
			el: '#vcomments',
			appId: 'jMRbNJRVqVMPkivFo08DMhO3-gzGzoHsz',
			appKey: 'umugMHpa6HfcC81tB6dl8TiE',
			placeholder: '欢迎评论留言，我都会看的～',
			meta: ['nick', 'mail'],
			path: location.pathname
		})

		getFinger()
		ah.proxy({
			//请求发起前进入
			onRequest: (config, handler) => {
				if (config.url.includes('classes/Comment') && config.method === 'POST') {
					console.log('请求发起前', config.body)
					fetch(
						`https://push.techulus.com/api/v1/notify/0429893b-781b-4885-b153-c20b3a5c5049?title=${location.pathname || '文章'}有新回复&body=${config.body.substr(12, 30)}`,
						{
							method: 'POST',
							mode: 'cors',
							headers: new Headers({
								'Content-Type': 'application/json'
							})
						}
					)
				}
				handler.next(config);
			},
			//请求发生错误时进入，比如超时；注意，不包括http状态码错误，如404仍然会认为请求成功
			onError: (err, handler) => {
					handler.next(err)
			},
			//请求成功后进入
			onResponse: (response, handler) => {
					handler.next(response)
			}
		})
	})
	function getFinger() {
		if (window.requestIdleCallback) {
			requestIdleCallback(function () {
				Fingerprint2.get(function (components) {
					const values = components.map(function (component) {
						return component.value
					})
					getLikeData(Fingerprint2.x64hash128(values.join(''), 31))
				})
			})
		} else {
			setTimeout(function () {
				Fingerprint2.get(function (components) {
					const values = components.map(function (component) {
						return component.value
					})
					getLikeData(Fingerprint2.x64hash128(values.join(''), 31))
				})  
			}, 500)
		}
	}

	async function getLikeData(finger) {
		storeFinger = finger
		loading = true
		try {
			const res = await fetch(
				'https://us-central1-sapper-blog-f8d89.cloudfunctions.net/getLikes',
				{
					method: 'POST',
					mode: 'cors',
					headers: new Headers({
						'Content-Type': 'application/json'
					}),
					body: JSON.stringify({
						title: document.title,
						id: finger
					})
				}
			)
			likeData = await res.json()
		} catch (error) {
			console.error('Get like data error', error)
		}
		loading = false
	}

	async function doLike() {
		loading = true
		const res = await fetch(
			'https://us-central1-sapper-blog-f8d89.cloudfunctions.net/newLike',
			{
				method: 'POST',
				mode: 'cors',
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify({
					title: document.title,
					id: storeFinger
				})
			}
		)
		const resJson = await res.json()
		if (resJson.code === 1) {
			alert(resJson.message)
			loading = false
		} else {
			getLikeData()
		}
	}
	onDestroy(() => {
		if (zoom) {
			zoom.detach()
		}
	})
	export let post
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(a) {
		text-decoration: underline !important;
    text-decoration-color: rgba(255, 12, 0, 0.1) !important;
	}
	.content :global(a:hover) {
		color: rgba(255, 12, 0, 0.5);
	}
	.content :global(h1) {
		margin: 0 0 0.9rem;
	}
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
		margin: 3rem 0 1.5rem;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
    border-radius: 0.3rem;
		overflow-x: auto;
		line-height: 1.2rem;
    font-size: 0.9rem;
    padding: 1rem;
    border: 2px solid #eee;
	}

	.content :global(code) {
    font-size: 0.8rem;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}
	.content :global(ol) {
		padding-left: 1rem;
	}

	.content :global(li) {
		margin: 0 0 0.2em 0;
		list-style-type: decimal;
	}

	.content :global(p) {
		margin: 0.3rem 0 1rem;
	}

	/* .divide {
		width: 100%;
	}
	.divide .line {
		height: 1px;
    width: 100%;
    display: inline-block;
    background-color: #ebeef5;
    margin: 2rem 0;
	}
	.divide .cat {
		top: calc(50% - 0.95rem);
    left: 0;
    right: 0;
    margin: auto;
	} */
	.desc{
		color: #757575;
		font-size: 0.9rem;
		margin-bottom: 3rem !important;
	}
	.label {
		background-color: #f2f2f2;
		color: #757575;
		padding: 0.3rem 0.6rem;
		border-radius: 4px;
		margin-left: 0.5rem;
	}
	.label:first-child {
		margin-left: 1rem;
	}
	.clap-here {
		margin: 50px 0;
	}
</style>