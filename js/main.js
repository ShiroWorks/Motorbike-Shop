window.addEventListener('load', () =>
  document.querySelector('.preloader').classList.add('hidePreloader')
);

const CreateMotorBikes = (() => {
  const motorBikes = [];

  class MotorBike {
    constructor(make, country, img, special, model, price, type, trans, gas) {
      this.make = make;
      this.country = country;
      this.img = img;
      this.special = special;
      this.model = model;
      this.price = price;
      this.type = type;
      this.trans = trans;
      this.gas = gas;
    }
  }

  // motorbike creation function
  function makeMotorBike(
    make,
    country,
    img = 'imgs/default-bike.jpg',
    special = true,
    model = 'old model',
    price = 10000,
    type = 'vintage',
    trans = 'manual',
    gas = '49'
  ) {
    const motorBike = new MotorBike(
      make,
      country,
      img,
      special,
      model,
      price,
      type,
      trans,
      gas
    );

    motorBikes.push(motorBike);
  }
  //produce motorBikes
  function produceMotorBikes() {
    makeMotorBike('chevy', 'american');
    makeMotorBike('BMW', 'german', 'imgs/1776728_f520.webp', true);
    makeMotorBike('Horex', 'german', 'imgs/german-2.jpg', false);
    makeMotorBike(
      'BMW',
      'german',
      'imgs/german-3.jpg',
      true,
      'new model',
      '10000',
      'naked bike'
    );
    makeMotorBike('DKW', 'german', 'imgs/german-4.webp', true);
    makeMotorBike('BMW', 'german', 'imgs/german-5.webp', true);
    makeMotorBike(
      'Boss Hoss Cycles',
      'american',
      'imgs/american-1.jpg',
      false,
      'new model',
      '10000',
      'Chopper'
    );
    makeMotorBike(
      "Bourget's Bike Works",
      'american',
      'imgs/american-2.jpg',
      false,
      'new model',
      '10000',
      'Chopper'
    );
    makeMotorBike(
      'Harley-Davidson',
      'american',
      'imgs/american-3.jpg',
      false,
      'new model',
      '10000',
      'Cruiser'
    );
    makeMotorBike(
      'Darwin Motorcycles',
      'american',
      'imgs/american-4.jpg',
      false,
      'old model',
      '10000',
      'chopper'
    );
    makeMotorBike(
      'Darwin Motorcycles',
      'american',
      'imgs/american-5.jpg',
      false,
      'new model',
      '10000',
      'Power Cruiser'
    );
  }
  produceMotorBikes();
  //console.log(motorBikes);
  //special motorbikes
  const specialMotorBikes = motorBikes.filter(
    motorBike => motorBike.special == true
  );
  // console.log(specialMotorBikes);
  return {
    motorBikes,
    specialMotorBikes
  };
})();

const DisplaySpecialMotorBikes = (CreateMotorBikes => {
  const specialMotorBikes = CreateMotorBikes.specialMotorBikes;

  const info = document.querySelector('.featured-info');
  //document loaded event
  document.addEventListener('DOMContentLoaded', () => {
    info.innerHTML = '';

    let data = '';

    specialMotorBikes.forEach(item => {
      data += ` <!-- single item -->
      <div
        class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap"
      >
        <span data-img="${item.img}" class="featured-icon mr-2">
          <i class="fas fa-motorcycle"></i>
        </span>
        <h5 class="font-weight-bold mx-1">${item.make}</h5>
        <h5 class="mx-1">${item.model}</h5>
      </div>
      <!--end of single item-->`;
    });
    info.innerHTML = data;
  });
  // change img
  info.addEventListener('click', event => {
    if (event.target.parentElement.classList.contains('featured-icon')) {
      const img = event.target.parentElement.dataset.img;
      document.querySelector('.featured-photo').src = img;
    }
  });
})(CreateMotorBikes);

const DisplayMotorBikes = (CreateMotorBikes => {
  //all motorbikes
  const motorBikes = CreateMotorBikes.motorBikes;
  //motorbike container
  const inventory = document.querySelector('.inventory-container');
  //content loaded
  document.addEventListener('DOMContentLoaded', () => {
    inventory.innerHTML = '';
    let output = '';
    motorBikes.forEach(motorBike => {
      output += ` <!-- single motorbike -->
        <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-motorBike ${
          motorBike.country
        }">
          <div class="card card-card">
            <img
              src="${motorBike.img}"
              alt=""
              class="card-img-top motor-img"
            />
            <!-- card body-->
            <div class="card-body">
              <div class="motorbike-info d-flex justify-content-between">
                <!--first flex child-->
                <div class="motor-text text-uppercase">
                  <h6 class="font-weight-bold">${motorBike.make}</h6>
                  <h6>${motorBike.model}</h6>
                </div>
                <!--second flex child-->
                <h5 class="motor-value align-self-center py-2 px-3">
                  $ <span class="motor-price">${motorBike.price}</span>
                </h5>
              </div>
            </div>
            <!--end if card-->
            <div
              class="card-footer text-capitalize d-flex justify-content-between"
            >
              <p>
                <span> <i class="fas fa-motorcycle"></i> ${
                  motorBike.type
                } </span>
              </p>
              <p>
                <span> <i class="fas fa-cogs"></i> ${motorBike.trans} </span>
              </p>
              <p>
                <span> <i class="fas fa-gas-pump"></i> ${motorBike.gas} </span>
              </p>
            </div>
          </div>
        </div>

        <!-- end of single motorbike -->`;
    });
    inventory.innerHTML = output;
  });
})(CreateMotorBikes);

//filter motorbikes
const FilterMotorBikes = (() => {
  const filter = document.querySelectorAll('.filter-btn');

  filter.forEach(btn => {
    btn.addEventListener('click', event => {
      const value = event.target.dataset.filter;

      const singleMotorBike = document.querySelectorAll('.single-motorBike');

      singleMotorBike.forEach(motorbike => {
        if (value === 'all') {
          motorbike.style.display = 'block';
        } else {
          !motorbike.classList.contains(value)
            ? (motorbike.style.display = 'none')
            : (motorbike.style.display = 'block');
        }
      });
    });
  });
})();
