/**
 * All JavaScript goes here
 * 
 */

$(window).on('load', function () {
  const api = {
    base: 'http://ec2-34-201-5-138.compute-1.amazonaws.com:3000'
  };

  $.get(`${api.base}/plans`, function(data, status){
    const plans = data;
    const plansWrapper = $('.plans');
    console.log(plansWrapper);

    plans.forEach((plan) => {
     console.log(plan);
     const price = plan.price;
     const formatted = (price/100).toFixed(2);
     const parts = formatted.split('.');

     plansWrapper.append(`
      <div class="plan">
        <div class="plan__inner">
          <div class="plan__speed">
            <span>${plan.speed} Mbps</span>
          </div>
          <h2 class="plan__title">${plan.name}</h2>
          <div class="plan__price">
            <span class="currency">&dollar;</span>
            <span class="amount">${parts[0]}</span>
            <span class="per">${parts[1]}<br>/mo.</span>
          </div>
          <button class="plan__button">Order Now</button>
          <div class="plan-features">
            <ul class="plan-features__list">
              <li class="plan-features__list-item">
                <i class="plan-features__icon"></i>Plan feature goes here
              </li>
              <li class="plan-features__list-item">
                <i class="plan-features__icon"></i>Plan feature goes here
              </li>
              <li class="plan-features__list-item">
                <i class="plan-features__icon"></i>Plan feature goes here
              </li>
              <li class="plan-features__list-item">
                <i class="plan-features__icon"></i>Plan feature goes here
              </li>
            </ul>
          </div>
        </div>
      </div>  
     `)
    });
  });
})
}
