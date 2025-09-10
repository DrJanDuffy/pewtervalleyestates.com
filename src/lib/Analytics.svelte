<script>
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  
  // Initialize Vercel Analytics
  injectAnalytics();
  
  // Initialize Speed Insights
  injectSpeedInsights();
</script>

<!-- This component handles analytics automatically -->
