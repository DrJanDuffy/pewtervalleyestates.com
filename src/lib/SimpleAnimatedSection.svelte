<script>
import { onMount } from "svelte"

export let children
export const delay = 0
export const duration = 0.6
export const direction = "up"

let _isVisible = false
let element

onMount(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          _isVisible = true
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

const _getInitialStyle = () => {
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

const _getAnimateStyle = () => {
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
