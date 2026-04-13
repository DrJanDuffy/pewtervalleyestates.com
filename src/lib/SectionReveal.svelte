<script>
  import { onMount } from "svelte"
  import { fade, fly } from "svelte/transition"

  /** @type {{ class?: string, children: import("svelte").Snippet }} */
  let { class: className = "", children } = $props()

  let root = $state(/** @type {HTMLDivElement | null} */ (null))
  let visible = $state(false)

  onMount(() => {
    if (typeof window === "undefined" || !root) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      visible = true
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          visible = true
          io.disconnect()
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    )
    io.observe(root)
    return () => io.disconnect()
  })
</script>

<div bind:this={root} class="section-reveal {className}">
  {#if visible}
    <div in:fly={{ y: 18, duration: 420, opacity: 0 }} out:fade={{ duration: 180 }}>
      {@render children()}
    </div>
  {/if}
</div>

<style>
  .section-reveal {
    content-visibility: auto;
  }
</style>
