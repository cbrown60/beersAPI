var app = function(){

var beerList = new BeerList('https://api.punkapi.com/v2/beers')
var beerSelectView = new BeerSelectView(document.querySelector('#beers'))

beerList.getData(function(beers){
  beerSelectView.render(beers)

beerSelectView.selectElement.addEventListener('change',function(){
  console.log('beers'[this.value])
  var foundBeer = beers[this.value]
  beerDetailsView.render(foundBeer)

})

})



}

window.onload = app