<script>
import { onMount } from "svelte"

// Svelte 5: Use $props() instead of export let
let {
  children,
  delay = 0,
  duration = 0.6,
  direction = "up"
} = $props()

let isVisible = $state(false)
let element

onMount(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible = true
        }
      })
    },
    { threshold: 0.1 }
  )

  if (element) {
    observer.observe(element)
  }

  return () => {
    if (element) {
      observer.unobserve(element)
    }
  }
})

const getInitialStyle = () => {
  const baseStyle = {
    opacity: 0,
    transition: `all ${duration}s ease-out ${delay}s`,
  }

  switch (direction) {
    case "up":
      return { ...baseStyle, transform: "translateY(50px)" }
    case "down":
      return { ...baseStyle, transform: "translateY(-50px)" }
    case "left":
      return { ...baseStyle, transform: "translateX(50px)" }
    case "right":
      return { ...baseStyle, transform: "translateX(-50px)" }
    default:
      return { ...baseStyle, transform: "translateY(50px)" }
  }
}

const getAnimateStyle = () => {
  return {
    opacity: 1,
    transform: "translate(0, 0)",
    transition: `all ${duration}s ease-out ${delay}s`,
  }
}
</script>

<div bind:this={element}>
  <div style={isVisible ? getAnimateStyle() : getInitialStyle()}>
    {children}
  </div>
</div>
