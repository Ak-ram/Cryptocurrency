// screen height = 100vh - [nav-height + searchbar-height]
let screen = document.getElementById('screen');

// searching functionality
let n = [];
let searching = (searchField) => {
  let coinsWrapper = Object.values(main.children[2].children);
  coinsWrapper.map((coin) => {
    let coinName = coin.querySelector(".coin_name").innerHTML.toLowerCase(),
      isFound = coinName.includes(searchField.value.toLowerCase());
    isFound ? coin.classList.remove("d-none") : coin.classList.add("d-none");
  });
  resultNum.innerHTML =
    `${coinsWrapper.length - main.children[2].querySelectorAll(".d-none").length} result`;
};

// Ordering according to price
let ordering = (sorting) => {
  let coinsWrapper = Object.values(main.children[2].children);
  coinsWrapper.map((coin, i) => {
    let coinPrice = +coin.querySelector("[data-coin_price]").dataset.coin_price;
    n.push(coinPrice);
    n.sort((a, b) => {
      return a - b;
    });
  });

  n.map((coin, index) => {
    let coinPrice =
      +coinsWrapper[index].querySelector("[data-coin_price]").dataset
        .coin_price;
    coinsWrapper[index].style.order = n.indexOf(coinPrice);
  });
};

// convert currency
convertCurrency=()=>{
  let toAmount = document.getElementById('toAmount'),
  selectedCrypto = document.getElementById('currFrom').value,
  selectedCoin =  document.getElementById('currTo'),
  selectedCryptoPrice = +document.getElementById(selectedCrypto).dataset.price,
  selectedCoinPrice = +document.getElementById(selectedCoin.value).dataset.price,
  fromAmount = +document.getElementById('fromAmount').value,
  result = (fromAmount * selectedCryptoPrice * selectedCoinPrice).toFixed(3);
toAmount.value = new Intl.NumberFormat('de-DE',{ style: 'currency', currency: document.getElementById(selectedCoin.value).id }).format(result);
}

// dark/light mode
const darkModeToggleBtn = document.getElementById("modeToggler");
let theme = localStorage.getItem("theme");

if (theme === "dark") enableDarkMode();

darkModeToggleBtn.addEventListener('click',()=>{
  
    theme = localStorage.getItem("theme");
    if (theme === "dark") {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  
})

function enableDarkMode() {
  darkModeToggleBtn.innerHTML = "Mode is: 🌞";
  localStorage.setItem("theme", "dark");
  document.body.classList.add("dark-mode");
}
function disableDarkMode() {
  darkModeToggleBtn.innerHTML = "Mode is: 🌛";
  localStorage.setItem("theme", "light");
  document.body.classList.remove("dark-mode");
}

window
  .matchMedia("(prefers-color-scheme:dark)")
  .addListener((e) => e.matches ? enableDarkMode() : disableDarkMode());
