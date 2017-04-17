var BeerDetailsView = function(detailsElement, clearButton){
  this.detailsElement = detailsElement
  this.clearButton = clearButton
  this.clearButton.addEventListener('click', this.clear.bind(this))

}

BeerDetailsView.prototype = {

render: function(beer){
  var pTag = document.createElement('p')
  pTag.innerText = beer.description + '\n' + 'The ABV of this beer is '+beer.abv + ' %'
  this.detailsElement.appendChild(pTag)
  var image = document.createElement('img')
  image.src = beer.image_url 
  this.detailsElement.appendChild(image)

},

clear: function(){
  this.detailsElement.innerHTML = ''
}

}