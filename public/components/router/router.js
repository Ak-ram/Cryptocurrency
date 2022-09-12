// screen content
let tabs = {
    coinList : "coinListTab/coinListTab.js",
    coinExchangeTracker : "coinListTab/coinExchangeTracker/coinExchangeTracker.js",
    features: {
        currencyConverter: "featuresTab/featuresTab.js",
    },
    news: "newsTab/newsTab.js",
    profile: "profileTab/profileTab.js",
};

let Route = (tab,content)=>{
   let Route = document.getElementById('route'); // script tag
    let viewer =  Route.previousElementSibling;
    viewer.innerHTML = content
}