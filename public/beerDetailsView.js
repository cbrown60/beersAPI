var BeerDetailsView = function(detailsElement, clearButton){
  this.detailsElement = detailsElement
  this.clearButton = clearButton
  this.clearButton.addEventListener('click', this.clear.bind(this))

}

BeerDetailsView.prototype = {

render: function(beer){
  var pTag = document.createElement('p')
  pTag.innerText = 'the ABV of this beer is '+beer.abv + ' %'
  this.detailsElement.appendChild(pTag)
},

clear: function(){
  this.detailsElement.innerHTML = ''
}

}