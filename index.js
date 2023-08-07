


function kanyeData(){
    fetch('https://api.kanye.rest')
    .then( res =>res.json())
    .then(data => showData(data))
}


  function showData(Quoteobject){
    // console.log(Quoteobject)
    document.getElementById('Quote').innerText=Quoteobject.quote;

  }