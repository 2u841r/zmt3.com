<script>
  export let serviceName;
  export let forWhom;
  export let features = [];
  export let priceRange;
</script>

<div class="card">
  <p class="service-name">{serviceName}</p>
  <p class="for-whom">For: {forWhom}</p>

  <ul class="features">
    {#each features as feature}
      <p>{feature}</p>
    {/each}
  </ul>

  <p class="price-range">Price: {priceRange} USD</p>
</div>

<style>
  /* .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      max-width: 300px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    .service-name {
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 8px;
    }
  
    .for-whom {
      font-size: 1.1em;
      color: #666;
      margin-bottom: 12px;
    }
  
    .features {
      list-style: none;
      padding: 0;
      margin-bottom: 12px;
    }
  
    .features li {
      background-color: #f9f9f9;
      padding: 6px 8px;
      border-radius: 4px;
      margin-bottom: 4px;
    }
  
    .price-range {
      font-weight: bold;
      color: #333;
    } */
</style>
