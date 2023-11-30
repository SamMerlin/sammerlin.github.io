var popGames = ["miniMetro", "Diggy", "catNinja", "gba", "motox3m", "raftWars2Html5", "getawayShootout", "henryStickmanBreakingTheBank"];
var popwGames = ["funnyShooter2", "bigTowerTinySquare", "bigIceTowerTinySquare", "gba", "motox3mSpookyLand", "raftWars", "impossibleQuiz", "henryStickmanBreakingTheBank"];
var recGames = ["superhot", "catNinja", "tableTanks", "learnToFly3", "achievementUnlocked2", "motox3m", "raftWarsHtml5", "impossibleQuiz2", "eaglercraft"];
var newGames = ["hydroStorm2", "burninRubber5XS", "cobrazIo", "criticalStrike", "papasPizzeria", "papasPancakeria", "papasPastaria", "papasHotDoggeria", "papasFreezeria", "papasDonuteria", "papasCupcakeria", "papasCheeseria", "papasBurgeria", "papasBakeria", "pandemic2", "pandemic", "ageOfWar", "fancyPantsAdventure2", "effingWorms2", "duckLife", "duckLife2", "duckLife3", "duckLife4", "superhot", "getawayShootout", "defendTheTank", "portalFlash", "battleForGondor", "bloxors", "worldsEasiestGame", "worldsHardestGame2", "worldsHardestGame3", "worldsHardestGame4", "gunMayhem", "gunMayhem2", "effingWormsXmas", "rockGarden", "emuJS", "stickRPG", "motherLoad", "clickerHeroes", "baconMayDie", "basketBallStars", "funnyShooter2", "polywar2", "raftWars2Html5", "raftWarsHtml5","pixelCombat2", "miniMetro", "bigIceTowerTinySquare", "bigTowerTinySquare"];
var games;
//var api = "https://api." + location.hostname + ":3000";
var socket;
var searchSuggestionFocus = false;
if(window.self == window.top){

    var a = window.open("about:blank", "_blank");
    if(navigator.userAgent.includes('Firefox')){
        a.addEventListener("DOMContentLoaded", function () {
            a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin: 0;}</style><body onload=' + "'" + 'document.getElementsByTagName("iframe")[0].focus();' + "'" + '><iframe style="height:100%; width:100%; top:0px; left:0; position:absolute;  z-index:1;" src="https://' + window.location.hostname + '" frameborder="0"></iframe></body></html>';
            window.location.replace("https://classroom.google.com/");
        });
    }else{
    if(a != null){
        a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin: 0;}</style><body onload=' + "'" + 'document.getElementsByTagName("iframe")[0].focus();' + "'" + '><iframe style="height:100%; width:100%; top:0px; left:0; position:absolute;  z-index:1;" src="https://' + window.location.hostname + '" frameborder="0"></iframe></body></html>';
        window.location.replace("https://classroom.google.com/");
    }
}
}
 //show discord popup
 if (localStorage.getItem("discord") != "stop") {
    document.getElementById("discord").style.display = "block";
}
async function run(loadedgames) {
    games = loadedgames;
    loadPopGames();
    start();
}
function start() {
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
        //attempt to connect to the server
        socket = io(api);
        socket.emit('get');
        //when we hear back write the new data
        socket.on('popgames', (games) => {
            popGames = games;
            console.log(games);
            console.log(popGames);
            cleargames("popgames");
            addGamesFromList(popGames, "popgames");
        });
        socket.on('popwgames', (games) => {
            popwGames = games;
            console.log(games);
            cleargames("popwgames");
            addGamesFromList(popwGames, "popwgames");
        });
    }

}
function addGamesFromList(list, gameType) {
    //repeats for each item on the list with gameid being the item
    list.forEach(function (gameId, index) {
        //set gameinfo to gameid of the data
        let gameInfo = games[gameId];
        //if it is on sccreen
        if (index < 6) {
            //add the game with all the info and no extra properties
            addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image, "", gameInfo.openfunc);
        } else {
            //add the game with all the info and lazy loading
            addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image, 'loading="lazy"', gameInfo.openfunc);
        }
    });
    /* old method(no index)
    //repeats for each item on the list with gameid being the item
    for (const gameId of list) {
        //set gameinfo to gameid of the data
        let gameInfo = games[gameId];
        //add the game with all the info
        addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image);
    }
    */
}
function addGamesFromJson(Json, gameType) {
    //repeats for each item on the list with gameid being the item
    for (const [gameId] of Object.entries(Json)) {
        //set gameinfo to gameid of the data
        let gameInfo = games[gameId];
        //add the game with all the info
        if (gameInfo.id.startsWith("/") == false) {
            addgame(gameType, gameInfo.id, gameInfo.name, gameInfo.image, "", gameInfo.openfunc);
        }
    }
}
function closediscrod(save) {
    document.getElementById("discord").style.display = "none";
    if (save == "yes") {
        localStorage.setItem("discord", "stop");
    }
}
function opendiscrod() {
    window.location.replace("https://discord.gg/xYSgcdDXrJ")
}
async function abGame(gameid) {
    
        var a = window.open("about:blank", "_blank");
        if(navigator.userAgent.includes('Firefox')){
            a.addEventListener("DOMContentLoaded", function () {
                a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body,html{margin:0;overflow:hidden}</style><body onload=' + "'" + 'document.getElementsByTagName("iframe")[0].focus();' + "'" + '><iframe style="height:100%;width:100%;border:0;top:0px;left:0;position:absolute;z-index:1;overflow:hidden" src="https://' + window.location.host + '/sg/games/' + gameid + '/index.html" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-downloads allow-same-origin" loading="eager" allowfullscreen allowpaymentrequest></iframe></body></html>';
                socket.emit('game', gameid);    
            });
        }else{
        a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body,html{margin:0;overflow:hidden}</style><body onload=' + "'" + 'document.getElementsByTagName("iframe")[0].focus();' + "'" + '><iframe style="height:100%;width:100%;border:0;top:0px;left:0;position:absolute;z-index:1;overflow:hidden" src="https://' + window.location.host + '/sg/games/' + gameid + '/index.html" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-downloads allow-same-origin" loading="eager" allowfullscreen allowpaymentrequest></iframe></body></html>';
        socket.emit('game', gameid);    
        }
}
async function abFlash(gameid) {
    var a = window.open("about:blank", "_blank");
    if(navigator.userAgent.includes('Firefox')){
        a.addEventListener("DOMContentLoaded", function () {
            a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body,html{margin:0;overflow:hidden}</style><body onload=' + "'" + 'document.getElementsByTagName("iframe")[0].focus();' + "'" + '><iframe style="height:100%;width:100%;border:0;top:0px;left:0;position:absolute;z-index:1;overflow:hidden" src="https://' + window.location.host + '/sg/dfl/?f=' + gameid + '" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-downloads allow-same-origin" loading="eager" allowfullscreen allowpaymentrequest></iframe></body></html>';
            socket.emit('game', gameid);
        });
    }else{
    a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body,html{margin:0;overflow:hidden}</style><body onload=' + "'" + 'document.getElementsByTagName("iframe")[0].focus();' + "'" + '><iframe style="height:100%;width:100%;border:0;top:0px;left:0;position:absolute;z-index:1;overflow:hidden" src="https://' + window.location.host + '/sg/dfl/?f=' + gameid + '" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-downloads allow-same-origin" loading="eager" allowfullscreen allowpaymentrequest></iframe></body></html>';
    socket.emit('game', gameid);  
    }  
}
function addgame(sectionid, gameid, gamename, img, properties, func) {
    document.getElementById(sectionid).innerHTML += '<div class="game" onclick="' + func + '(' + "'" + gameid + "'" + ')"><img class="gimg" alt="' + gamename + '" ' + properties + 'src="images/' + img + '"><div class="gradient"></div><h class="text">' + gamename + '</h></div>'
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
                }else{
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
                    searchSuggestions.innerHTML += '<div onclick="' + game.openfunc + '(' + "'" + game.id + "'" + ')" style="    background-color: rgba(255, 255, 255, 0.05);background-image:url(' + "'images/" + game.image + "'" + ');" id="searchSuggestion">' + game.name + '</div>'
                } else {
                    searchSuggestions.innerHTML += '<div onclick="' + game.openfunc + '(' + "'" + game.id + "'" + ')" style="background-image:url(' + "'images/" + game.image + "'" + ');" id="searchSuggestion">' + game.name + '</div>'
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
