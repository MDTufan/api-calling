
// kanye data start

function kanyeData(){
    fetch('https://api.kanye.rest')
    .then( res =>res.json())
    .then(data => showData(data))
};


  function showData(Quoteobject){
    // console.log(Quoteobject)
    document.getElementById('Quote').innerText=Quoteobject.quote;

  };
// kanye data end


// friends data start
function FriendData(){
    fetch('https://randomuser.me/api/?results=50')
    .then( res =>res.json())
    .then(data => showFriend(data.results))
};
FriendData();

 const showFriend=(object)=>{
    
    
    const img =document.getElementById('img');
    const name=document.getElementById('name');
    for( const friends of object){
        

        img.setAttribute('src',`${friends.picture.thumbnail}`)

        name.innerText=`${friends.name.title} ${friends.name.first}`

    }
    

  };


  // friends data end

  // country data start
  function allCountry(){
    fetch('https://restcountries.com/v3.1/all')
    .then( res =>res.json())
    .then(data => countryData(data))
};

allCountry();

function countryData(countries){
    // console.log(country);
    const countrydiv = document.getElementById('country');
    countries.forEach((country1)=>{
        // console.log(country1)
        const country = document.createElement('div');
        country.classList.add('color')
        country.innerHTML=`
        <h3> ${country1.name.common} </h3>
        <p> ${country1?.capital} </p>
        <button onClick=showCity('${country1.name.common}')> Shows Details</button>
        `
        countrydiv.appendChild(country);
    })



}


const showCity=(name)=>{
  fetch(`https://restcountries.com/v3.1/name/${name}`)
  .then(res => res.json())
  .then(data => showscity1(data[0]))
}

// showCity();

const showscity1=(city)=>{
  
  const city1=document.getElementById('city-1');
  city1.innerHTML=`

        <h3> Name: ${city.name.common} </h3>
        <p>Capital: ${city.capital[0]} </p>
        <p>Status: ${city.status} </p>
        <p>pouplation: ${city.population} </p>
        <p>StartOfWeek: ${city.startOfWeek} </p>
        <img src="${city.flags.png}" alt=''>
  `

}
    







    // country data end