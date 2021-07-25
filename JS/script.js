var giphyresponse = "https://api.giphy.com/v1/gifs/search?api_key=fdiEDRxuRteChrtVUrkb5VKksu0O0Pwi&q=smiley&limit=25&offset=0&rating=g&lang=en";

async function word(){
    try{
        var words = await fetch(wordresponse);
        var worddata = await words.json();
        var string = worddata[0];
        console.log(string);
        
        var h1 = document.createElement("h1");
        h1.innerHTML = `<br> <br> The selected word is: ${string} <br> <br>`;
        document.body.append(h1);
        return string;
    }
    catch(error){
        console.log("error invoked");
        console.log(error);
    }

}

word().then(async (str) =>{
    var giphy = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=fdiEDRxuRteChrtVUrkb5VKksu0O0Pwi&q=smiley&limit=25&offset=0&rating=g&lang=en${str}&limit=5&offset=0&rating=g&lang=en`);
    var giphydata = await giphy.json();
    var giphyurl = giphydata.data[0].images.original.url;
    console.log(giphydata);
    var obj = document.createElement("object");
    obj.setAttribute("data",giphyurl);
    document.body.append(obj);
}).catch((error) =>{
    console.log("Something is wrong");
    console.log(error);
    var h2 = document.createElement("h2");
    h2.innerHTML = "<br> No related gif found";
    document.body.append(h2);
});