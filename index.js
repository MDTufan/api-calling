


function kanyeData(){
    fetch('https://api.kanye.rest')
    .then( res =>res.json())
    .then(data => showData(data))
};


  function showData(Quoteobject){
    // console.log(Quoteobject)
    document.getElementById('Quote').innerText=Quoteobject.quote;

  };

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