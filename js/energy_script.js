var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  document.addEventListener("DOMContentLoaded", () => {
    // Get the select elements
    const countrySelect = document.getElementById("countrySel");
    const stateSelect = document.getElementById("stateSel");
  
    // Fetch the list of countries and states from the JSON file
    fetch("https://gist.githubusercontent.com/ebaranov/41bf38fdb1a2cb19a781/raw/fb097a60427717b262d5058633590749f366bd80/gistfile1.json")
      .then(res => res.json())
      .then(data => {
        // Populate the options for the country select element
        let output = "";
        data.countries.forEach(country => {
          output += `<option value="${country.country}">${country.country}</option>`;
        });
        countrySelect.innerHTML = output;
  
        // Listen for the change event on the country select element
        countrySelect.addEventListener("change", () => {
          // Get the selected country
          const selectedCountry = countrySelect.value;
  
          // Find the corresponding states for the selected country
          const states = data.find(country => country.country === selectedCountry).states;
  
          // Populate the options for the state select element
          let output = "";
          states.forEach(state => {
            output += `<option value="${state}">${state}</option>`;
          });
          stateSelect.innerHTML = output;
        });
      })
      .catch(err => {
        console.log(err);
      });
  });



  

  