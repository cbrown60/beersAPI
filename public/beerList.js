var BeerList = function(url){
  this.url = url
  this.beers= []
}

BeerList.prototype ={
  getData: function(callback){
    var request = new XMLHttpRequest()
    request.open('GET',this.url)
    request.onload = function(){
      if(request.status == 200){
        var jsonString = request.responseText
        this.beers = JSON.parse(jsonString)
        callback(this.beers)
      }
    }.bind(this)
    request.send()
  }


}