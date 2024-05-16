var games;
var api = "https://supremegmes-api.onrender.com";
var socket;
var searchSuggestionFocus = false;
if(window.self == window.top){

    var a = window.open("about:blank", "_blank");
    if(navigator.userAgent.includes('Firefox')){
        a.addEventListener("DOMContentLoaded", function () {
            a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>My Drive - Google Drive</title><link rel="icon" type="image/png" href="https://' + document.location.host  + '/sg/icon.webp"><style>body {margin: 0;}</style><body onload=\'window.addEventListener("beforeunload",(event)=>{event.preventDefault();event.returnValue = true;});document.getElementsByTagName("iframe")[0].focus();\'><iframe style="height:100%; width:100%; top:0px; left:0; position:absolute;  z-index:1;" src="https://' + window.location.hostname + '" frameborder="0"></iframe></body></html>';
            window.location.replace("https://classroom.google.com/");
        });
    }else{
    if(a != null){
        a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>My Drive - Google Drive</title><link rel="icon" type="image/png" href="https://' + document.location.host  + '/sg/icon.webp"><style>body {margin: 0;}</style><body onload=\'window.addEventListener("beforeunload",(event)=>{event.preventDefault();event.returnValue = true;});document.getElementsByTagName("iframe")[0].focus();\'><iframe style="height:100%; width:100%; top:0px; left:0; position:absolute;  z-index:1;" src="https://' + window.location.hostname + '" frameborder="0"></iframe></body></html>';
        window.location.replace("https://classroom.google.com/");
    }
}
}
 //show  popup
 if (localStorage.getItem("popup2") != "stop") {
    document.getElementById("popup").style.display = "block";
}
async function run(loadedgames) {
    games = loadedgames;
    loadPopGames();
    start();
}
async function start() {
    //check if you are on all games
    if (window.location.pathname.includes("allgames")) {
        addGamesFromJson(games, "allgames");
    } else {
        //add all the games from the stored lists(these wil be overwrited when the data from the server is reseved)
        addGamesFromList(recGames, "recgames");
        addGamesFromList(newGames, "newgames");
        addGamesFromList(popwGames, "popwgames");
        addGamesFromList(popGames, "popgames");
    }
}
async function loadPopGames() {
    if (window.location.pathname.includes("allgames") != true) {
        console.log("connecting time is:" + Date.now());
        //attempt to connect to the server
        socket = io(api);
        //when we hear back write the new data
        console.log("ready:" + Date.now());
        socket.on('popgames', (games) => {
            console.log("loaded:" + Date.now());
            popGames = games;
            //console.log(games);
            //console.log(popGames);
            cleargames("popgames");
            addGamesFromListById(popGames, "popgames");
            console.log("done:" + Date.now());
        });
        socket.on('popwgames', (games) => {
            popwGames = games;
            //console.log(games);
            cleargames("popwgames");
            addGamesFromListById(popwGames, "popwgames");
        });
    }

}
async function addGamesFromList(list, gameType) {
    //repeats for each item on the list with gameid being the item
    list.forEach(function (gameName, index) {
        //set gameinfo to gameid of the data
        let gameInfo = games[gameName];
        //if it uses prox then make sure your on medsci
        if(gameInfo.openfunc != "abProx" || window.location.hostname == 'gm.medscience.cl' || window.location.hostname == 'sg.robofan.ro'){
        //if it is on sccreen
        if (index < 6) {
            //add the game with all the info and no extra properties
            addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image, "", gameInfo.openfunc);
        } else {
            //add the game with all the info and lazy loading
            addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image, 'loading="lazy"', gameInfo.openfunc);
        }
    }
    });
}
async function addGamesFromListById(list, gameType) {
    //repeats for each item on the list with gameid being the item
    list.forEach(function (gameId, index) {
        //get game name
        let gamename = Object.entries(games).find(([useless, game]) => game.id == gameId)[0];
        //set gameinfo to gameid of the data
        let gameInfo = games[gamename];
        if(gameInfo.openfunc != "abProx" || window.location.hostname == 'gm.medscience.cl' || window.location.hostname == 'sg.robofan.ro'){

        //if it is on sccreen
        if (index < 6) {
            //add the game with all the info and no extra properties
            addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image, "", gameInfo.openfunc);
        } else {
            //add the game with all the info and lazy loading
            addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image, 'loading="lazy"', gameInfo.openfunc);
        }
    }
    });
}
async function addGamesFromJson(Json, gameType) {
    Object.entries(Json).forEach(function ([gameId], index) {
//set gameinfo to gameid of the data
let gameInfo = games[gameId];
//add the game with all the info
if (gameInfo.id.startsWith("/") == false) {
    addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image, "", gameInfo.openfunc);
}
    });
}
async function closepopup(save) {
    document.getElementById("popup").style.display = "none";
    if (save == "yes") {
        localStorage.setItem("popup2", "stop");
    }
}
async function opendiscord() {
    window.location.replace("https://discord.gg/xYSgcdDXrJ")
}
async function abGame(gameid) {
        var a = window.open("about:blank", "_blank");
        if(navigator.userAgent.includes('Firefox')){
            a.addEventListener("DOMContentLoaded", function () {
                a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body,html{margin:0;overflow:hidden}</style><body onload=\'window.addEventListener("beforeunload",(event)=>{event.preventDefault();event.returnValue = true;});document.getElementsByTagName("iframe")[0].focus();\'><iframe style="height:100%;width:100%;border:0;top:0px;left:0;position:absolute;z-index:1;overflow:hidden" src="' + window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/games/' + gameid + '/index.html" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-downloads allow-same-origin" loading="eager" allowfullscreen allowpaymentrequest></iframe></body></html>';
                socket.emit('game', gameid);    
            });
        }else{
        a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body,html{margin:0;overflow:hidden}</style><body onload=\'window.addEventListener("beforeunload",(event)=>{event.preventDefault();event.returnValue = true;});document.getElementsByTagName("iframe")[0].focus();\'><iframe style="height:100%;width:100%;border:0;top:0px;left:0;position:absolute;z-index:1;overflow:hidden" src="' + window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/games/' + gameid + '/index.html" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-downloads allow-same-origin" loading="eager" allowfullscreen allowpaymentrequest></iframe></body></html>';
        socket.emit('game', gameid);    window.location.host
        }
}
async function abProx(gameid) {
    var a = window.open("about:blank", "_blank");
    if(navigator.userAgent.includes('Firefox')){
        a.addEventListener("DOMContentLoaded", function () {
            a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body,html{margin:0;overflow:hidden}</style><body onload=\'window.addEventListener("beforeunload",(event)=>{event.preventDefault();event.returnValue = true;});document.getElementsByTagName("iframe")[0].focus();\'><iframe style="height:100%;width:100%;border:0;top:0px;left:0;position:absolute;z-index:1;overflow:hidden" src="' + window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/games/' + gameid + '/index.html" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-downloads allow-same-origin" loading="eager" allowfullscreen allowpaymentrequest></iframe></body></html>';
            socket.emit('game', gameid);    
        });
    }else{
    a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body,html{margin:0;overflow:hidden}</style><body onload=\'window.addEventListener("beforeunload",(event)=>{event.preventDefault();event.returnValue = true;});document.getElementsByTagName("iframe")[0].focus();\'><iframe style="height:100%;width:100%;border:0;top:0px;left:0;position:absolute;z-index:1;overflow:hidden" src="' + window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/games/' + gameid + '/index.html" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-downloads allow-same-origin" loading="eager" allowfullscreen allowpaymentrequest></iframe></body></html>';
    socket.emit('game', gameid);    window.location.host
    }
}
async function abFlash(gameid) {
    var a = window.open("about:blank", "_blank");
    if(navigator.userAgent.includes('Firefox')){
        a.addEventListener("DOMContentLoaded", function () {
            a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body,html{margin:0;overflow:hidden}</style><body onload=\'window.addEventListener("beforeunload",(event)=>{event.preventDefault();event.returnValue = true;});document.getElementsByTagName("iframe")[0].focus();\'><iframe style="height:100%;width:100%;border:0;top:0px;left:0;position:absolute;z-index:1;overflow:hidden" src="' + window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/dfl/?f=' + gameid + '" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-downloads allow-same-origin" loading="eager" allowfullscreen allowpaymentrequest></iframe></body></html>';
            socket.emit('game', gameid);
        });
    }else{
    a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body,html{margin:0;overflow:hidden}</style><body onload=\'window.addEventListener("beforeunload",(event)=>{event.preventDefault();event.returnValue = true;});document.getElementsByTagName("iframe")[0].focus();\'><iframe style="height:100%;width:100%;border:0;top:0px;left:0;position:absolute;z-index:1;overflow:hidden" src="' + window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/dfl/?f=' + gameid + '" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-downloads allow-same-origin" loading="eager" allowfullscreen allowpaymentrequest></iframe></body></html>';
    socket.emit('game', gameid);  
    }  
}
async function addgame(sectionid, gameid, gamename, img, properties, func) {
    document.getElementById(sectionid).insertAdjacentHTML("beforeend", '<div class="game" onclick="' + func + '(' + "'" + gameid + "'" + ')"><img class="gimg" alt="' + gamename + '" ' + properties + 'src="images/' + img + '"><div class="gradient"></div><h class="text">' + gamename + '</h></div>');
}
function cleargames(section) {
    document.getElementById(section).innerHTML = '';
}
let searchbar = document.getElementById('searchbar');
let searchSuggestions = document.getElementById('searchSuggestions');
searchbar.addEventListener("keypress", function (event) {
    let input = searchbar.value.toLowerCase();
    if (event.key === "Enter") {
        event.preventDefault();
        let done = 0;
        for (const [useless, game] of Object.entries(games)) {
            if (game.name.toLowerCase().includes(input) && done == 0 && game.id.startsWith("/") == false) {
                if(game.openfunc == "abFlash"){
                    abFlash(game.id);
                    done = 1;
                }else if(game.openfunc != "abProx" || window.location.hostname == 'gm.medscience.cl' || window.location.hostname == 'sg.robofan.ro'){
                    abGame(game.id);
                done = 1;
                }
            }
        }
    }
});
function liveSearch() {
    const input = document.getElementById('searchbar').value.toLowerCase();
    if (input != "") {
        //clear sugjustions
        searchSuggestions.innerHTML = "";
        for (const [useless, game] of Object.entries(games)) {
            if (game.name.toLowerCase().includes(input) && game.id.startsWith("/") == false) {
                //add sugjestions
                if (searchSuggestions.innerHTML == "") {
                    searchSuggestions.insertAdjacentHTML("beforeend", '<div onclick="' + game.openfunc + '(' + "'" + game.id + "'" + ')" style="    background-color: rgba(255, 255, 255, 0.05);background-image:url(' + "'images/" + game.image + "'" + ');" id="searchSuggestion">' + game.name + '</div>');
                }else if(game.openfunc != "abProx" || window.location.hostname == 'gm.medscience.cl' || window.location.hostname == 'sg.robofan.ro'){
                    searchSuggestions.insertAdjacentHTML("beforeend", '<div onclick="' + game.openfunc + '(' + "'" + game.id + "'" + ')" style="background-image:url(' + "'images/" + game.image + "'" + ');" id="searchSuggestion">' + game.name + '</div>');
                }
            }
        }
        if (searchSuggestions.innerHTML == "") {
            searchSuggestions.style.display = "none";
        } else {
            searchSuggestions.style.display = "block";
        }
    } else {
        searchSuggestions.style.display = "none";
    }

}
searchbar.addEventListener("blur", function (event) {
    setTimeout(() => {
        if (document.activeElement.id  != "searchSuggestions") {
            searchSuggestions.style.display = "none";
        }
    }, 100)
});
searchbar.addEventListener("focus", function (event) {
    if (searchSuggestions.innerHTML != "") {
        searchSuggestions.style.display = "block";
    }
});
searchSuggestions.addEventListener("blur", function (event) {
        if (document.activeElement.id  != "searchSuggestions") {
            searchSuggestions.style.display = "none";
        }
});
