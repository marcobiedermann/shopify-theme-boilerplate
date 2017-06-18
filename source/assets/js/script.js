import lazysizes     from 'lazysizes';
import svg4everybody from 'svg4everybody';

// lazysizes
lazySizesConfig = {
  expand: 300
};

// svg4everybody
svg4everybody({
  polyfill: true
});

// sort by
document.querySelector('#sort-by').addEventListener('change', function() {
  const urlSearchParams = new URLSearchParams(window.location.search);

  urlSearchParams.set(this.name, this.value);

  window.location = `?${urlSearchParams}`;
});

// fetch next page
// const domParser = new DOMParser();
// const url = document.querySelector('[rel="next"]').getAttribute('href');

// fetch(url)
//   .then(response => response.text())
//   .then(result => {
//     const products = '';

//     domParser.parseFromString(result, 'text/html').querySelectorAll('.products li').forEach(product => products += product.innerHTML());

//     console.log(products);

//     document.querySelector('.products').insertAdjacentHTML('beforeend', products);
//   });
