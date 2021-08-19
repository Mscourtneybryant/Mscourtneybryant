


let buttons = document.querySelectorAll('.btn');
let input = document.querySelector('#OfComplaints');

button.forEach((btn) => {
  btn.addEventListener('click', () => {
    let inputValue = input.value;
    let buttonValue = btn.value;
    if (!inputValue) {
    
      inputValue = 10;
    }
    nypdComplaints(inputValue, buttonValue);
  });
});

function nypdComplaints(value, city) {
  list.innerHTML = '';
  fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
    .then((response) => response.json())
    .then((data) => {
      if ((data = data.filter((data) => data.agency === 'input'))) {
  


        for (i = 0; i < data.length; i++) {
          let createTag = document.createElement('p');
        }

      }
        filter((filterByAgency) => filterByAgency.agency === 'NYPD')
        filter((filterByCity) => filterByCity.borough === city.toUpperCase())
    
            let nypdResponse = document.querySelector('.response');
            let response = document.querySelector('.response-container');
            nypdResponse.addEventListener('click', () => {
              response.classList.remove('response-container');
            });

            nypdResponse.addEventListener('mouseout', () => {
              setTimeout(() => {
                response.classList.add('response-container');
              }, 500);
            });
          }
        
    );
   displayData(data)};
