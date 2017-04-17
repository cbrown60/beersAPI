var BeerSelectView = function(selectElement){
this.selectElement = selectElement
}

BeerSelectView.prototype = {

  render: function(beers){
    console.log(beers)
    beers.forEach(function(beer, index){
      var optionElement = document.createElement('option')
      optionElement.value = index
      optionElement.text = beer.name
      this.selectElement.appendChild(optionElement)
    }.bind(this))
  }
}