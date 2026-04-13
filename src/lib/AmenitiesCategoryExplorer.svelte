<script>
  import { trackEvent } from "$lib/analytics"
  import { neighborhoodFeatures, getFeatureIcon } from "$lib/data/silverado-pewter-area.js"

  let selectedCategory = $state("Shopping & Dining")
  let selectedFeature = $state(null)

  function selectCategory(category) {
    selectedCategory = category
    selectedFeature = null
    trackEvent("amenities_category_select", { category, page: "amenities" })
  }

  function selectFeature(feature) {
    selectedFeature = feature
    trackEvent("amenities_feature_select", {
      feature: feature.name,
      category: selectedCategory,
      page: "amenities",
    })
  }

  const activeCategory = $derived(
    neighborhoodFeatures.find((c) => c.category === selectedCategory) ?? neighborhoodFeatures[0],
  )
</script>

<div class="category-tabs">
  {#each neighborhoodFeatures as category}
    <button
      type="button"
      class="category-tab"
      class:active={selectedCategory === category.category}
      onclick={() => selectCategory(category.category)}
    >
      {category.category}
    </button>
  {/each}
</div>

<div class="features-grid">
  {#each activeCategory.features as feature}
    <div
      class="feature-card"
      class:selected={selectedFeature === feature}
      onclick={() => selectFeature(feature)}
      onkeydown={(e) => e.key === "Enter" && selectFeature(feature)}
      role="button"
      tabindex="0"
    >
      <div class="feature-icon">{getFeatureIcon(feature.type)}</div>
      <div class="feature-content">
        <h3 class="feature-name">{feature.name}</h3>
        <p class="feature-distance">{feature.distance} away</p>
        <p class="feature-description">{feature.description}</p>
      </div>
    </div>
  {/each}
</div>

<style>
  .category-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .category-tab {
    padding: 0.6rem 1.1rem;
    border: 2px solid #e2e8f0;
    background: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    color: #475569;
    transition: all 0.2s;
  }

  .category-tab:hover,
  .category-tab.active {
    border-color: #1e3a8a;
    color: #1e3a8a;
    background: #eff6ff;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.25rem;
  }

  .feature-card {
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.25rem;
    cursor: pointer;
    transition: all 0.2s;
    background: white;
  }

  .feature-card:hover,
  .feature-card.selected {
    border-color: #3a8dde;
    box-shadow: 0 4px 14px rgba(58, 141, 222, 0.15);
  }

  .feature-icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  .feature-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 0.35rem;
  }

  .feature-distance {
    font-size: 0.85rem;
    color: #3a8dde;
    font-weight: 600;
    margin: 0 0 0.5rem;
  }

  .feature-description {
    font-size: 0.95rem;
    color: #64748b;
    line-height: 1.5;
    margin: 0;
  }
</style>
