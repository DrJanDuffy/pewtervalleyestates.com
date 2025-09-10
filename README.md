# Pewter Valley Estates

A SvelteKit website for Pewter Valley Estates, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte), deployed to [Vercel](https://vercel.com).

## Google Analytics 4 Setup

This project includes Google Analytics 4 (GA4) tracking with the following configuration:

- **Measurement ID**: G-YB0SCBWM09
- **Stream URL**: https://www.pewtervalleyestates.com/
- **Stream ID**: 11219125744

### Environment Variables

Create a `.env` file in the root directory with:

```bash
PUBLIC_GA_MEASUREMENT_ID=G-YB0SCBWM09
```

### Analytics Features

The analytics setup includes:

- Automatic page view tracking
- Custom event tracking utilities
- External link click tracking
- Form submission tracking
- Download tracking
- Scroll depth tracking
- Time on page tracking

### Usage

Import analytics functions in your Svelte components:

```javascript
import { trackEvent, trackExternalLink, trackFormSubmission } from '$lib/analytics';

// Track custom events
trackEvent('button_click', { button_name: 'cta' });

// Track external links
trackExternalLink('https://example.com', 'External Link');

// Track form submissions
trackFormSubmission('contact_form');
```

## Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fsveltekit&project-name=sveltekit-vercel&repository-name=sveltekit-vercel&demo-title=SvelteKit%20%2B%20Vercel&demo-description=A%20SvelteKit%20app%20optimized%20Edge-first.&demo-url=https%3A%2F%2Fsveltekit-template.vercel.app%2F)

_Live Example: https://sveltekit-template.vercel.app_

## Developing

Once you've installed dependencies with `pnpm install`, start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `npm run preview`.
