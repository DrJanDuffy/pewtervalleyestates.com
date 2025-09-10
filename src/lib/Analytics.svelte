<script>
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import { inject } from '@vercel/analytics/sveltekit';
  
  // Initialize Vercel Analytics
  inject();
  
  // Initialize Speed Insights
  injectSpeedInsights();
</script>

<!-- This component handles analytics automatically -->
