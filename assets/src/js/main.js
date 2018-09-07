/**
 * All JavaScript goes here
 * 
 */

$(window).on('load', function () {
  const api = {
    base: 'http://ec2-34-201-5-138.compute-1.amazonaws.com:3000'
  }

  $.get(`${api.base}/plans`, function(data, status) {
    const plans = data;
    const plansWrapper = $('.js-plans');
    console.log(plansWrapper);

    plans.forEach(function (plan, index) {
      console.log(plan);

      const price = plan.price;
      const formatted = (price/100).toFixed(2);
      console.log(formatted);
      const parts = formatted.split('.');
      console.log(parts);

      plansWrapper.append(`
        <div class="plan">
          <div class="plan__inner">
            <div class="plan__speed">
              <span>${plan.speed} Mbps</span>
            </div>
            <!-- /.plan__illustration -->
            <h2 class="plan__title">${plan.name}</h2>
            <!-- /.plan__title -->
            <div class="plan__price">
              <span class="currency">&dollar;</span>
              <span class="amount">${parts[0]}</span>
              <span class="per">${parts[1]}<br>/mo.</span>
            </div>
            <!-- /.plan__price -->
            <p>${plan.disclaimer}</p>
            <button class="plan__button">Order Now</button>
            <div class="plan-features">
              <ul class="plan-features__list js-list-${index}">
              </ul>
            </div>
          </div>
          <!-- /.plan__inner -->
        </div>
        <!-- /.plan -->
      `)

      const featureList = $(`.js-list-${index}`);
      console.log(featureList);

      const features = plan.features;
      console.log(features);
      features.forEach(function (feature) {
        console.log(feature);
        featureList.append(`
          <li class="plan-features__list-item">
            <i class="plan-features__icon"></i>${feature}
          </li>
        `)
      });
    });
  });
});

