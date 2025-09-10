<script>
import { injectAnalytics } from "@vercel/analytics/sveltekit"
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"

// Initialize Vercel Analytics
injectAnalytics()

// Initialize Speed Insights
injectSpeedInsights()
</script>

<!-- This component handles analytics automatically -->
