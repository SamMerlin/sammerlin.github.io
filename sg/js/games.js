var popGames = ["miniMetro", "Diggy", "catNinja", "gba", "motox3m", "raftWars2Html5", "getawayShootout", "henryStickmanBreakingTheBank"];
var popwGames = ["funnyShooter2", "bigTowerTinySquare", "bigIceTowerTinySquare", "gba", "motox3mSpookyLand", "raftWars", "impossibleQuiz", "henryStickmanBreakingTheBank", "papasPizzeria"];
var recGames = ["superhot", "catNinja", "tableTanks", "learnToFly3", "territorialIo", "motox3m", "raftWarsMultiplayer", "impossibleQuiz2", "eaglercraft"];
var newGames = ["proxy", "zombsRoyale", "basketbros", "jellyTruck", "vex8", "hydroStorm2", "burninRubber5XS", "cobrazIo", "criticalStrike", "papasPizzeria", "papasPancakeria", "papasPastaria", "papasHotDoggeria", "papasFreezeria", "papasDonuteria", "papasCupcakeria", "papasCheeseria", "papasBurgeria", "papasBakeria", "pandemic2", "pandemic", "ageOfWar", "fancyPantsAdventure2", "effingWorms2", "duckLife", "duckLife2", "duckLife3", "duckLife4", "superhot", "getawayShootout", "defendTheTank", "portalFlash", "battleForGondor", "bloxors", "worldsEasiestGame", "worldsHardestGame2", "worldsHardestGame3", "worldsHardestGame4", "gunMayhem", "gunMayhem2", "effingWormsXmas", "rockGarden", "emuJS", "stickRPG", "motherLoad", "clickerHeroes", "baconMayDie", "basketBallStars", "funnyShooter2", "polywar2", "raftWars2Html5", "raftWarsHtml5","pixelCombat2", "miniMetro", "bigIceTowerTinySquare", "bigTowerTinySquare"];
/*
    "getawayShootout": { //internal name
        "id": "getawayShootout", //id passed to the openfunc and used for identification on the server, for abflash it is the swf id, for abgame its the folder name in games
        "name": "Getaway Shootout", //name shown to users
        "image": "getawayShootout.jpg", //image shown to users in /images
        "openfunc": "abGame" //open function, currently only abgame(for games in /games) and abflash(for dfl games in /dfl/1)
    },
*/
var games = {
    "2048": {
        "id": "2048",
        "name": "2048",
        "image": "2048.webp",
        "openfunc": "abGame"
    },
    "0hh1": {
        "id": "0hh1",
        "name": "0hh1",
        "image": "0hh1.webp",
        "openfunc": "abGame"
    },
    "0hn0": {
        "id": "0hn0",
        "name": "0hn0",
        "image": "0hn0.webp",
        "openfunc": "abGame"
    },
    "1On1Soccer": {
        "id": "e4556d5f-0f06-4b33-9023-489b9bd5fe72",
        "name": "1 On 1 Soccer",
        "image": "1On1Soccer.webp",
        "openfunc": "abFlash"
    },
    "3dtanks": {
        "id": "bb176516-f1d5-493f-b0d9-bcf362fa6ea5",
        "name": "3d Tanks",
        "image": "3dtanks.webp",
        "openfunc": "abFlash"
    },
    "achievementUnlocked": {
        "id": "52094fd7-fa43-49cc-8451-3d4e35d65217",
        "name": "Achievement Unlocked",
        "image": "achievementUnlocked.webp",
        "openfunc": "abFlash"
    },
    "achievementUnlocked2": {
        "id": "4bc9b4b4-869c-41ba-a652-8be1de334919",
        "name": "Achievement Unlocked 2",
        "image": "achievementUnlocked2.webp",
        "openfunc": "abFlash"
    },
    "/achievementUnlocked3": {
        "id": "/173942a8-b339-420f-8f38-02ef2f86f396",
        "name": "Achievement Unlocked 3",
        "image": "achievementUnlocked3.webp",
        "openfunc": "abFlash"
    },
    "alienhominid": {
        "id": "168b280f-625d-4b61-b4e3-e1c78589792b",
        "name": "Alien hominid",
        "image": "alienhominid.webp",
        "openfunc": "abFlash"
    },
    "ageOfWar": {
        "id": "0263502f-5df3-4f42-a0b9-28744ed94a90",
        "name": "Age of War",
        "image": "ageOfWar.webp",
        "openfunc": "abFlash"
    },
    "ageOfWar2": {
        "id": "aaf98ecd-3677-4abf-99b1-25779acd0bfb",
        "name": "Age of War",
        "image": "ageOfWar2.webp",
        "openfunc": "abFlash"
    },
    "amidstthesky": {
        "id": "amidstthesky",
        "name": "Amidst the Sky",
        "image": "amidstthesky.webp",
        "openfunc": "abGame"
    },
    "amongus": {
        "id": "amongus",
        "name": "Among Us Singleplayer",
        "image": "amongus.webp",
        "openfunc": "abGame"
    },
    "animatorvsanimation": {
        "id": "c5bfef40-582e-4b81-9070-0c406a32e0d1",
        "name": "Animator vs Animation",
        "image": "animatorvsanimation.webp",
        "openfunc": "abFlash"
    },
    "asteroids": {
        "id": "asteroids",
        "name": "Asteroids",
        "image": "asteroids.webp",
        "openfunc": "abGame"
    },
    "astray": {
        "id": "astray",
        "name": "Astray",
        "image": "astray.webp",
        "openfunc": "abGame"
    },
    "/awesomeCars": {
        "id": "/362ab9ff-8a38-4d4d-9d92-f8f2e5c9d2ae",
        "name": "Awesome Cars",
        "image": "awesomeCars.webp",
        "openfunc": "abFlash"
    },
    "awesomePirates": {
        "id": "63d9c576-4d36-432e-a67f-9b11b3ec98f7",
        "name": "Awesome Pirates",
        "image": "awesomePirates.webp",
        "openfunc": "abFlash"
    },
    "awesomePlanes": {
        "id": "f34d528a-b100-425f-a52e-3cccca84b3e8",
        "name": "Awesome Planes",
        "image": "awesomePlanes.webp",
        "openfunc": "abFlash"
    },
    "awesomeTanks": {
        "id": "c0f70621-f8f6-4bc7-9e41-981179250e11",
        "name": "Awesome Tanks",
        "image": "awesomeTanks.webp",
        "openfunc": "abFlash"
    },
    "awesomeTanks2": {
        "id": "f1e76802-edce-4204-a14b-29e728a5bb87",
        "name": "Awesome Tanks2",
        "image": "awesomeTanks2.webp",
        "openfunc": "abFlash"
    },
    "baconMayDie": {
        "id": "baconMayDie",
        "name": "Bacon May Die",
        "image": "baconMayDie.jpg",
        "openfunc": "abGame"
    },
    "ballisticChickens": {
        "id": "ballisticChickens",
        "name": "Ballistic Chickens",
        "image": "ballistic-chickens.webp",
        "openfunc": "abGame"
    },
    "banjok": {
        "id": "banjok",
        "name": "Banjo-Kazooie",
        "image": "banjok.webp",
        "openfunc": "abGame"
    },
    "basketAndBall": {
        "id": "basketAndBall",
        "name": "Basket and Ball",
        "image": "basketAndBall.webp",
        "openfunc": "abGame"
    },
    "basketBallStars": {
        "id": "basketBallStars",
        "name": "Basket Ball Stars",
        "image": "basketBallStars.avif",
        "openfunc": "abGame"
    },
    "basketbros": {
        "id": "basketbros",
        "name": "Basket Bros",
        "image": "basketbros.webp",
        "openfunc": "abGame"
    },
    "battlePanic": {
        "id": "6948323f-0df3-4aff-a897-c4be34788d6d",
        "name": "Battle Panic",
        "image": "battlePanic.webp",
        "openfunc": "abFlash"
    },
    "battleForGondor": {
        "id": "be129404-4e7f-4392-b2cf-e4a36508f80f",
        "name": "Battle For Gondor",
        "image": "battleForGondor.webp",
        "openfunc": "abFlash"
    },
    "bigTowerTinySquare": {
        "id": "bigTowerTinySquare",
        "name": "Big Tower Tiny Square",
        "image": "bigTowerTinySquare.webp",
        "openfunc": "abGame"
    },
    "bigIceTowerTinySquare": {
        "id": "bigIceTowerTinySquare",
        "name": "Big Ice Tower Tiny Square",
        "image": "bigIceTowerTinySquare.webp",
        "openfunc": "abGame"
    },
    "bloonsTowerDefense": {
        "id": "2166157b-4d3f-44c6-b129-07146b633d7e",
        "name": "Bloons Tower Defense",
        "image": "bloonsTowerDefense.webp",
        "openfunc": "abFlash"
    },
    "bloonsTowerDefense2": {
        "id": "082855ae-be62-4b7c-9f93-af7afb52358b",
        "name": "Bloons Tower Defense 2",
        "image": "bloonsTowerDefense2.webp",
        "openfunc": "abFlash"
    },
    "bloonsTowerDefense3": {
        "id": "d5c40a9c-f37e-4b18-853b-49aadb3a314f",
        "name": "Bloons Tower Defense 3",
        "image": "bloonsTowerDefense3.webp",
        "openfunc": "abFlash"
    },
    "bloonsTowerDefense4": {
        "id": "9fe6b0f4-6739-4313-9ea2-fb5bb16033e7",
        "name": "Bloons Tower Defense 4",
        "image": "bloonsTowerDefense4.webp",
        "openfunc": "abFlash"
    },
    "bloonsTowerDefense5": {
        "id": "248ff449-1e17-4e9a-a6b6-103cbc161525",
        "name": "Bloons Tower Defense 5",
        "image": "bloonsTowerDefense5.avif",
        "openfunc": "abFlash"
    },
    "bloxors": {
        "id": "be45ae6e-dc55-4364-b648-59bc9ef552ea",
        "name": "Bloxors",
        "image": "bloxors.jpg",
        "openfunc": "abFlash"
    },
    "blue": {
        "id": "blue",
        "name": "Blue",
        "image": "blue.webp",
        "openfunc": "abGame"
    },
    "bobTheRobber": {
        "id": "a4c15343-8b9c-4547-a12c-125fa6f37b15",
        "name": "Bob The Robber",
        "image": "bobTheRobber.webp",
        "openfunc": "abFlash"
    },
    "boxHead": {
        "id": "d539babd-65e9-456e-9286-f7549d09409a",
        "name": "boxHead",
        "image": "boxHead.webp",
        "openfunc": "abFlash"
    },
    "bubbleTanks": {
        "id": "bubbld3eede09-0eb8-42ee-bece-a5a6bd7c5118eTanks",
        "name": "Bubble Tanks",
        "image": "bubbleTanks.webp",
        "openfunc": "abFlash"
    },
    "burninRubber5XS": {
        "id": "burninRubber5XS",
        "name": "Burnin Rubber 5XS",
        "image": "burninRubber5XS.avif",
        "openfunc": "abGame"
    },
    "/burnoutDrift3": {
        "id": "/burnoutDrift3",
        "name": "Burnout Drift 3",
        "image": "burnout-drift-3.webp",
        "openfunc": "abGame"
    },
    "/burritoBison": {
        "id": "/burritoBison",
        "name": "Burrito Bison",
        "image": "burritoBison.webp",
        "openfunc": "abGame"
    },
    "catNinja": {
        "id": "ab071dec-33ec-4f58-81de-2b81836ed4df",
        "name": "Cat Ninja",
        "image": "catNinja.webp",
        "openfunc": "abFlash"
    },
    "championIsland": {
        "id": "championIsland",
        "name": "Google Champion Island",
        "image": "championisland.webp",
        "openfunc": "abGame"
    },
    "/chess": {
        "id": "/chess",
        "name": "Chess",
        "image": "chess.webp",
        "openfunc": "abGame"
    },
    "chessai": {
        "id": "chessai",
        "name": "Chess with ai",
        "image": "chess.webp",
        "openfunc": "abGame"
    },
    "chillRadio": {
        "id": "chillRadio",
        "name": "Chill Radio",
        "image": "chillradio.webp",
        "openfunc": "abGame"
    },
    "chromeDino": {
        "id": "chromeDino",
        "name": "Google Chrome Dinosaur Game",
        "image": "chromedino.webp",
        "openfunc": "abGame"
    },
    "chronoTrigger": {
        "id": "chronoTrigger",
        "name": "Chrono Trigger",
        "image": "chronoTrigger.webp",
        "openfunc": "abGame"
    },
    "circloO": {
        "id": "circloO",
        "name": "CircloO",
        "image": "circloO.webp",
        "openfunc": "abGame"
    },
    "circus": {
        "id": "circus",
        "name": "Circus",
        "image": "circus.webp",
        "openfunc": "abGame"
    },
    "clubhousegames": {
        "id": "clubhousegames",
        "name": "Clubhouse Games",
        "image": "clubhousegames.webp",
        "openfunc": "abGame"
    },
    "classicMinecraft": {
        "id": "classicMinecraft",
        "name": "Classic Minecraft",
        "image": "classicminecraft.webp",
        "openfunc": "abGame"
    },
    "clickerHeroes": {
        "id": "7a22cc5a-de2d-43ce-a2e3-476a9768e198",
        "name": "Clicker Heroes",
        "image": "clickerHeroes.webp",
        "openfunc": "abFlash"
    },
    "cobrazIo": {
        "id": "cobrazIo",
        "name": "Cobraz.io",
        "image": "cobrazIo.jpg",
        "openfunc": "abGame"
    },
    "cookieclicker": {
        "id": "cookieclicker",
        "name": "Cookie Clicker",
        "image": "cookieclicker.webp",
        "openfunc": "abGame"
    },
    "criticalStrike": {
        "id": "criticalStrike",
        "name": "Critical Strike",
        "image": "criticalStrike.jpg",
        "openfunc": "abGame"
    },
    "cubefield": {
        "id": "cubefield",
        "name": "Cubefield",
        "image": "cubefield.webp",
        "openfunc": "abGame"
    },
    "customTetris": {
        "id": "customTetris",
        "name": "Custom Tetris",
        "image": "customtetris.webp",
        "openfunc": "abGame"
    },
    "defendTheTank": {
        "id": "defendTheTank",
        "name": "Defend The Tank",
        "image": "defendTheTank.jpg",
        "openfunc": "abGame"
    },
    "dkc1": {
        "id": "dkc1",
        "name": "Donkey Kong Country",
        "image": "dkc1.webp",
        "openfunc": "abGame"
    },
    "dkc2": {
        "id": "dkc2",
        "name": "Donkey Kong Country 2",
        "image": "dkc2.webp",
        "openfunc": "abGame"
    },
    "dkc3": {
        "id": "dkc3",
        "name": "Donkey Kong Country 3",
        "image": "dkc3.webp",
        "openfunc": "abGame"
    },
    "dbzdevolution": {
        "id": "8499fd03-193a-4222-9caf-793467a10acf",
        "name": "Dragon Ball Devolution",
        "image": "dbzdevolution.webp",
        "openfunc": "abFlash"
    },
    "deflyIo": {
        "id": "deflyIo",
        "name": "Defly io",
        "image": "deflyIo.webp",
        "openfunc": "abProx"
    },
    "Diggy": {
        "id": "b9a60903-1fdf-40fc-a45c-4ae5827c14e5",
        "name": "Diggy",
        "image": "diggy.webp",
        "openfunc": "abFlash"
    },
    "doodleJump": {
        "id": "doodleJump",
        "name": "Doodle Jump",
        "image": "doodlejump.webp",
        "openfunc": "abGame"
    },
    "duckLife": {
        "id": "47167583-b006-4d56-9229-8c8941aaf538",
        "name": "Duck Life",
        "image": "duckLife.jpg",
        "openfunc": "abFlash"
    },
    "duckLife2": {
        "id": "ae97b803-e546-4d62-ab4f-6309d6cc3e30",
        "name": "Duck Life 2",
        "image": "duckLife2.jpg",
        "openfunc": "abFlash"
    },
    "duckLife3": {
        "id": "9817c95b-ee7d-4e7f-8173-a144d6c3b349",
        "name": "Duck Life 3",
        "image": "duckLife3.png",
        "openfunc": "abFlash"
    },
    "duckLife4": {
        "id": "e1899cad-0d56-42be-b04a-bb212243339e",
        "name": "Duck Life 4",
        "image": "duckLife4.webp",
        "openfunc": "abFlash"
    },
    "/duckLifeAdventure": {
        "id": "/duckLifeAdventure",
        "name": "Duck Life Adventure",
        "image": "duckLifeAdventure.webp",
        "openfunc": "abGame"
    },
    "eaglercraft": {
        "id": "eaglercraft",
        "name": "Eaglercraft",
        "image": "eaglercraft.webp",
        "openfunc": "abGame"
    },
    "earthboundZero": {
        "id": "earthboundZero",
        "name": "Earthbound 0 (Mother 1)",
        "image": "earthboundZero.webp",
        "openfunc": "abGame"
    },
    "earthbound": {
        "id": "earthbound",
        "name": "Earthbound (Mother 2)",
        "image": "earthbound.webp",
        "openfunc": "abGame"
    },
    "edgesurf": {
        "id": "edgesurf",
        "name": "Microsoft Edge Surf",
        "image": "edgesurf.webp",
        "openfunc": "abGame"
    },
    "effingWorms2": {
        "id": "cdec9170-797e-4ea1-b7ca-82d314bc498c",
        "name": "Effing Worms 2",
        "image": "effingWorms2.jpg",
        "openfunc": "abFlash"
    },
    "effingWormsXmas": {
        "id": "392ef3ef-3350-4117-b9a4-d44875b492d5",
        "name": "Effing Worms Xmas",
        "image": "effingWormsXmas.jpg",
        "openfunc": "abFlash"
    },
    "eggyCar": {
        "id": "eggyCar",
        "name": "Eggy Car",
        "image": "eggyCar.webp",
        "openfunc": "abGame"
    },
    "elasticMan": {
        "id": "elasticMan",
        "name": "Elastic Man",
        "image": "elasticman.webp",
        "openfunc": "abGame"
    },
    "emuJS": {
        "id": "emuJS",
        "name": "Emulator JS Demo (see readme)",
        "image": "emuJS.png",
        "openfunc": "abGame"
    },
    "fancyPantsAdventure": {
        "id": "75906032-6f12-47b8-a8b8-99c7ab0d0110",
        "name": "Fancy Pants Adventure",
        "image": "fancyPantsAdventure.webp",
        "openfunc": "abFlash"
    },
    "fancyPantsAdventure2": {
        "id": "75906032-6f12-47b8-a8b8-99c7ab0d0110",
        "name": "Fancy Pants Adventure 2",
        "image": "fancyPantsAdventure2.jpg",
        "openfunc": "abFlash"
    },
    "fireboyAndWatergirl": {
        "id": "fireboyAndWatergirl",
        "name": "Fireboy And Watergirl",
        "image": "fireboyAndWatergirl.webp",
        "openfunc": "abGame"
    },
    "flappybird": {
        "id": "flappybird",
        "name": "Flappy Bird",
        "image": "flappybird.webp",
        "openfunc": "abGame"
    },
    "animations": {
	"id": "animations",
	"name": "Flash Animations",
	"image": "animations.svg",
	"openfunc": "abGame"
    },
    "fluidSimulation": {
        "id": "fluidSimulation",
        "name": "Fluid Simulation",
        "image": "fluidsimulation.webp",
        "openfunc": "abGame"
    },
    "fnaf": {
        "id": "fnaf",
        "name": "Five Nights At Freddy's",
        "image": "fnaf.webp",
        "openfunc": "abGame"
    },
    "fnaw": {
        "id": "fnaw",
        "name": "Five Nights at Winston's",
        "image": "fnaw.webp",
        "openfunc": "abGame"
    },
    "/fnf": {
        "id": "/fnf",
        "name": "Friday Night Funkin",
        "image": "fnf.webp",
        "openfunc": "abGame"
    },
    "funnyShooter2": {
        "id": "funnyShooter2",
        "name": "Funny Shooter 2",
        "image": "funnyShooter2.jpg",
        "openfunc": "abGame"
    },
    "fzero": {
        "id": "fzero",
        "name": "F-Zero",
        "image": "fzero.webp",
        "openfunc": "abGame"
    },
    "gba": {
        "id": "gba",
        "name": "Gameboy Advance Emulator",
        "image": "gba.webp",
        "openfunc": "abGame"
    },
    "getawayShootout": {
        "id": "getawayShootout",
        "name": "Getaway Shootout",
        "image": "getawayShootout.jpg",
        "openfunc": "abGame"
    },
    "goldMiner": {
        "id": "bad18f6a-5773-4e3a-8f12-91574aa1b3a4",
        "name": "Gold Miner",
        "image": "goldMiner.webp",
        "openfunc": "abFlash"
    },
    "/grindcraft": {
        "id": "/grindcraft",
        "name": "Grind Craft",
        "image": "grindcraft.webp",
        "openfunc": "abGame"
    },
    "googleSnake": {
        "id": "googleSnake",
        "name": "Google Snake",
        "image": "gsnake.webp",
        "openfunc": "abGame"
    },
    "gunMayhem": {
        "id": "9bc1f3c4-2b03-4f03-85be-f76904a6c747",
        "name": "Gun Mayhem",
        "image": "gunMayhem.avif",
        "openfunc": "abFlash"
    },
    "gunMayhem2": {
        "id": "2aa787ae-db5c-43ee-83c7-1c58ef8ee876",
        "name": "Gun Mayhem 2",
        "image": "gunMayhem2.webp",
        "openfunc": "abFlash"
    },
    "hackerTyper": {
        "id": "hackerTyper",
        "name": "Hacker Typer",
        "image": "hackertyper.webp",
        "openfunc": "abGame"
    },
    "happyWheels": {
        "id": "happyWheels",
        "name": "happy Wheels",
        "image": "happyWheels.webp",
        "openfunc": "abGame"
    },
    "henryStickmanBreakingTheBank": {
        "id": "d897a413-ced0-4319-9862-e738d64b5aee",
        "name": "Breaking The Bank",
        "image": "henryStickmanBreakingTheBank.webp",
        "openfunc": "abFlash"
    },
    "henryStickmanEscapingThePrison": {
        "id": "2087b2c2-a392-4ceb-a07a-17e6cde7bdf9",
        "name": "Escaping The Prison",
        "image": "henryStickmanEscapingThePrison.webp",
        "openfunc": "abFlash"
    },
    "henryStickmanFleeingTheCompex": {
        "id": "d7689e09-90b2-4026-943c-227313c2277a",
        "name": "Fleeing The Compex",
        "image": "henryStickmanFleeingTheCompex.webp",
        "openfunc": "abFlash"
    },
    "henryStickmanInfiltratingTheAirship": {
        "id": "35a3118a-de81-49a3-b63d-40afd8c7d694",
        "name": "Infiltrating The Airship",
        "image": "henryStickmanInfiltratingTheAirship.webp",
        "openfunc": "abFlash"
    },
    "henryStickmanStealingTheDiamond": {
        "id": "a38038fb-51d6-4118-9202-c40c0f132c82",
        "name": "Stealing The Diamond",
        "image": "henryStickmanStealingTheDiamond.webp",
        "openfunc": "abFlash"
    },
    "hexgl": {
        "id": "hexgl",
        "name": "Hex GL",
        "image": "hexgl.webp",
        "openfunc": "abGame"
    },
    "hextris": {
        "id": "hextris",
        "name": "Hextris",
        "image": "hextris.webp",
        "openfunc": "abGame"
    },
    "htmledit": {
        "id": "htmledit",
        "name": "HTML editor",
        "image": "htmledit.webp",
        "openfunc": "abGame"
    },
    "hydroStorm2": {
        "id": "hydroStorm2",
        "name": "Hydro Storm 2",
        "image": "hydroStorm2.webp",
        "openfunc": "abGame"
    },
    "impossibleQuiz": {
        "id": "18b79f06-a8b2-4b64-83c4-0d89937b083a",
        "name": "Impossible Quiz",
        "image": "impossiblequiz.webp",
        "openfunc": "abFlash"
    },
    "impossibleQuiz2": {
        "id": "c11da9f0-dcf6-4959-b494-69a7252d0983",
        "name": "Impossible Quiz 2",
        "image": "impossibleQuiz2.webp",
        "openfunc": "abFlash"
    },
    "/infinetemario": {
        "id": "/infinetemario",
        "name": "Infinite Mario",
        "image": "infinitemario.webp",
        "openfunc": "abGame"
    },
    "jackSmith": {
        "id": "d0d0ea94-cb19-400a-9036-898fbd32c04a",
        "name": "Jacksmith",
        "image": "jackSmith.webp",
        "openfunc": "abFlash"
    },
    "jellyTruck": {
        "id": "jellyTruck",
        "name": "Jelly Truck",
        "image": "jellyTruck.jpg",
        "openfunc": "abGame"
    },
    "KDL": {
        "id": "KDL",
        "name": "Kirby's Dream Land",
        "image": "KDL.webp",
        "openfunc": "abGame"
    },
    "learnToFly": {
        "id": "23304124-ea3a-4b89-98d2-d1802fd49c9a",
        "name": "Learn To Fly",
        "image": "learnToFly.webp",
        "openfunc": "abFlash"
    },
    "learnToFly2": {
        "id": "8427e552-f0ec-4050-a279-fa02629b73b8",
        "name": "Learn To Fly 2",
        "image": "learnToFly2.webp",
        "openfunc": "abFlash"
    },
    "learnToFly3": {
        "id": "89b60ee6-d9ff-4fd0-b38a-d207d5c7c902",
        "name": "Learn To Fly 3",
        "image": "learnToFly3.webp",
        "openfunc": "abFlash"
    },
    "littleAlchemy": {
        "id": "littleAlchemy",
        "name": "Little Alchemy",
        "image": "littleAlchemy.webp",
        "openfunc": "abGame"
    },
    "madalinCars2": {
        "id": "madalinCars2",
        "name": "Madalin Stunt Cars 2",
        "image": "madalincars2.webp",
        "openfunc": "abGame"
    },
    "madalinCars3": {
        "id": "madalinCars3",
        "name": "Madalin Stunt Cars Multiplayer",
        "image": "madalincarsmulti.webp",
        "openfunc": "abGame"
    },
    "mineBlocks": {
        "id": "mineBlocks",
        "name": "Mine Blocks",
        "image": "mineblocks.webp",
        "openfunc": "abGame"
    },
    "miniMetro": {
        "id": "miniMetro",
        "name": "Mini Metro",
        "image": "miniMetro.webp",
        "openfunc": "abGame"
    },
    "/minekhan": {
        "id": "/minekhan",
        "name": "Minekhan",
        "image": "minekhan.webp",
        "openfunc": "abGame"
    },
    "moonlander": {
        "id": "moonlander",
        "name": "Moon Lander",
        "image": "moonlander.webp",
        "openfunc": "abGame"
    },
    "motherLoad": {
        "id": "6f0f3d66-311b-4f1f-b3e8-32419bee0757",
        "name": "Mother Load",
        "image": "motherLoad.webp",
        "openfunc": "abFlash"
    },
    "motox3m": {
        "id": "motox3m",
        "name": "Motox3m",
        "image": "motox3m.webp",
        "openfunc": "abGame"
    },
    "motox3m2": {
        "id": "motox3m2",
        "name": "Motox3m 2",
        "image": "motox3m2.webp",
        "openfunc": "abGame"
    },
    "motox3m3": {
        "id": "motox3m3",
        "name": "Motox3m 3",
        "image": "motox3m3.webp",
        "openfunc": "abGame"
    },
    "motox3mPoolParty": {
        "id": "motox3mPoolParty",
        "name": "Motox3m Pool Party",
        "image": "motox3mPoolParty.webp",
        "openfunc": "abGame"
    },
    "motox3mSpookyLand": {
        "id": "motox3mSpookyLand",
        "name": "Motox3m Spooky Land",
        "image": "motox3mSpookyLand.webp",
        "openfunc": "abGame"
    },
    "motox3mWinter": {
        "id": "motox3mWinter",
        "name": "Motox3m Winter",
        "image": "motox3mWinter.webp",
        "openfunc": "abGame"
    },
    "msFlight": {
        "id": "msFlight",
        "name": "Microsoft Flight Simulator 1-4",
        "image": "msflight.webp",
        "openfunc": "abGame"
    },
    "n-gon": {
        "id": "n-gon",
        "name": "n-gon",
        "image": "n-gon.webp",
        "openfunc": "abGame"
    },
    "oneChance": {
        "id": "oneChance",
        "name": "One Chance",
        "image": "oneChance.webp",
        "openfunc": "abGame"
    },
    "pacman": {
        "id": "pacman",
        "name": "Pac-Man",
        "image": "pacman.webp",
        "openfunc": "abGame"
    },
    "pacman3d": {
        "id": "pacman3d",
        "name": "Pac-Man 3d",
        "image": "pacman3d.webp",
        "openfunc": "abGame"
    },
    "pandemic": {
        "id": "a89d20d0-3f18-46b7-a892-87523dcf08e1",
        "name": "Pandemic",
        "image": "pandemic.webp",
        "openfunc": "abFlash"
    },
    "pandemic2": {
        "id": "11473cc9-9fe6-45db-8584-feeb073b9930",
        "name": "Pandemic 2",
        "image": "pandemic2.jpg",
        "openfunc": "abFlash"
    },
    "papasBakeria": {
        "id": "60fb1546-c631-4fcc-abb6-af680c6f9607",
        "name": "Papas Bakeria",
        "image": "papasBakeria.webp",
        "openfunc": "abFlash"
    },
    "papasBurgeria": {
        "id": "19eecd99-1fe2-4f2e-8bc4-166333848af8",
        "name": "Papas Burgeria",
        "image": "papasBurgeria.webp",
        "openfunc": "abFlash"
    },
    "papasCheeseria": {
        "id": "641aa1d5-9c0a-47ba-8b5f-d4a8a58cb912",
        "name": "Papas Cheeseria",
        "image": "papasCheeseria.webp",
        "openfunc": "abFlash"
    },
    "papasCupcakeria": {
        "id": "ad223e4a-f7e5-4247-a021-044026402034",
        "name": "Papas Donuteria",
        "image": "papasCupcakeria.webp",
        "openfunc": "abFlash"
    },
    "papasDonuteria": {
        "id": "8ca53897-ed19-4ada-b715-476fabe72642",
        "name": "Papas Donuteria",
        "image": "papasDonuteria.jpg",
        "openfunc": "abFlash"
    },
    "papasFreezeria": {
        "id": "3c2d9a23-5a29-4401-bf73-3975a6b0d62e",
        "name": "Papas Freezeria",
        "image": "papasFreezeria.jpg",
        "openfunc": "abFlash"
    },
    "papasHotDoggeria": {
        "id": "de67af7a-d0ef-44ab-b1e2-eefa727502fc",
        "name": "Papas Hot Doggeria",
        "image": "papasHotDoggeria.webp",
        "openfunc": "abFlash"
    },
    "papasPancakeria": {
        "id": "6623a8b4-2972-4bbf-aa9f-d7c5c14403bc",
        "name": "Papas Pancakeria",
        "image": "papasPancakeria.webp",
        "openfunc": "abFlash"
    },
    "papasPastaria": {
        "id": "0691b7b3-382b-40f1-8c00-66f430a5bead",
        "name": "Papas Pastaria",
        "image": "papasPastaria.avif",
        "openfunc": "abFlash"
    },
    "papasPizzeria": {
        "id": "5fb2d155-338e-409b-8ff3-49b18ec01ee9",
        "name": "Papas Pizzeria",
        "image": "papasPizzeria.jpg",
        "openfunc": "abFlash"
    },
    "paperio2": {
        "id": "paperio2",
        "name": "Paper.io 2",
        "image": "paperio2.webp",
        "openfunc": "abGame"
    },
    "pico8": {
        "id": "pico8",
        "name": "Pico-8",
        "image": "pico8.webp",
        "openfunc": "abGame"
    },
    "picross": {
        "id": "picross",
        "name": "Picross (DS)",
        "image": "picross.webp",
        "openfunc": "abGame"
    },
    "picross3d": {
        "id": "picross3d",
        "name": "Picross 3d",
        "image": "picross3d.webp",
        "openfunc": "abGame"
    },
    "pixelCombat2": {
        "id": "pixelCombat2",
        "name": "Pixel Combat 2",
        "image": "pixelCombat2.jpg",
        "openfunc": "abGame"
    },
    "playingWithFire3": {
        "id": "547cdd6d-d78a-4e6c-b2e4-6d846adeeb22",
        "name": "Playing With Fire 3",
        "image": "playingWithFire3.jpg",
        "openfunc": "abFlash"
    },
    "polywar2": {
        "id": "polywar2",
        "name": "Polywar 2",
        "image": "polywar2.jpg",
        "openfunc": "abGame"
    },
    "poom": {
        "id": "poom",
        "name": "Poom",
        "image": "poom.webp",
        "openfunc": "abGame"
    },
    "portalFlash": {
        "id": "4fc452ba-aae6-4a11-aec7-16aaef520dec",
        "name": "Portal Flash",
        "image": "portalFlash.webp",
        "openfunc": "abFlash"
    },
    "powderGame": {
        "id": "powderGame",
        "name": "Powder Game2 ",
        "image": "powdergame.webp",
        "openfunc": "abGame"
    },
    "proxy": {
        "id": "proxy",
        "name": "proxy",
        "image": "proxy.webp",
        "openfunc": "abProx"
    },
    "punchout": {
        "id": "punchout",
        "name": "Punch Out!!! (NES)",
        "image": "punchout.webp",
        "openfunc": "abGame"
    },
    "raftWars": {
        "id": "be73da89-d561-4853-87e3-3516e413efa9",
        "name": "Raft Wars",
        "image": "raftWars.webp",
        "openfunc": "abFlash"
    },
    "raftWarsHtml5": {
        "id": "raftWarsHtml5",
        "name": "Raft Wars html5",
        "image": "raftWarsHtml5.jpg",
        "openfunc": "abGame"
    },
    "raftWars2": {
        "id": "d7a186f6-e1e3-4638-a982-8de19213d7c8",
        "name": "Raft Wars 2",
        "image": "raftWars2.webp",
        "openfunc": "abFlash"
    },
    "raftWars2Html5": {
        "id": "raftWars2Html5",
        "name": "Raft Wars 2 html5",
        "image": "raftWars2Html5.jpg",
        "openfunc": "abGame"
    },
    "raftWarsMultiplayer": {
        "id": "raftWarsMultiplayer",
        "name": "Raft Wars Multiplayer",
        "image": "raftWarsMultiplayer.webp",
        "openfunc": "abProx"
    },
    "redBall4": {
        "id": "9c6323ca-7074-42a4-a881-bfebd269db36",
        "name": "Red Ball 4",
        "image": "redBall4.webp",
        "openfunc": "abFlash"
    },
    "redBall4Vol2": {
        "id": "777efba8-38b1-440f-a092-8d0c4d230ed5",
        "name": "Red Ball 4 Volume 2",
        "image": "redBall4Vol2.webp",
        "openfunc": "abFlash"
    },
    "redBall4Vol3": {
        "id": "f6516a02-194f-4116-9c7f-7ce100409f4d",
        "name": "Red Ball 4 Volume 3",
        "image": "redBall4Vol3.webp",
        "openfunc": "abFlash"
    },
    "retroBowl": {
        "id": "retroBowl",
        "name": "Retro Bowl",
        "image": "retrobowl.webp",
        "openfunc": "abGame"
    },
    "riddleSchool": {
        "id": "3c5d471f-4c19-459f-be5f-8ea25fd605c4",
        "name": "Riddle Shool",
        "image": "riddleschool.webp",
        "openfunc": "abFlash"
    },
    "riddleSchool2": {
        "id": "46f2c0a6-31f4-411d-acc3-2e2934a9c780",
        "name": "Riddle School 2",
        "image": "riddleschool2.webp",
        "openfunc": "abFlash"
    },
    "riddleSchool3": {
        "id": "4ce71588-9ccf-4091-be9f-f20ac3763e20",
        "name": "Riddle School 3",
        "image": "riddleschool3.webp",
        "openfunc": "abFlash"
    },
    "riddleSchool4": {
        "id": "fa59feed-f6f3-4bb0-801d-ec6311e53166",
        "name": "Riddle School 4",
        "image": "riddleschool4.webp",
        "openfunc": "abFlash"
    },
    "riddleSchool5": {
        "id": "riddleca2959af-5bb3-4f9d-82d0-469d0c7ba88fSchool5",
        "name": "Riddle School 5",
        "image": "riddleschool5.webp",
        "openfunc": "abFlash"
    },
    "riddleTransfer": {
        "id": "6a706b4d-3bee-45be-93b7-e764015b3369",
        "name": "Riddle Transfer",
        "image": "riddletransfer.webp",
        "openfunc": "abFlash"
    },
    "riddleTransfer2": {
        "id": "d12116e9-55a8-4671-88cc-bfc5473ee66b",
        "name": "Riddle Transfer 2",
        "image": "riddletransfer2.webp",
        "openfunc": "abFlash"
    },
    "rocketSoccer": {
        "id": "rocketSoccer",
        "name": "Rocket Soccer",
        "image": "rocketSoccer.webp",
        "openfunc": "abGame"
    },
    "rockGarden": {
        "id": "2232555f-3c1f-4cd5-b464-8df450177357",
        "name": "Rock Garden",
        "image": "rockGarden.jpg",
        "openfunc": "abFlash"
    },
    "rooftopSnipers": {
        "id": "rooftopSnipers",
        "name": "Rooftop Snipers",
        "image": "rooftopSnipers.webp",
        "openfunc": "abGame"
    },
    "rooftopSnipers2": {
        "id": "rooftopSnipers2",
        "name": "Rooftop Snipers 2",
        "image": "rooftopSnipers2.webp",
        "openfunc": "abGame"
    },
    "ruffleDemo": {
        "id": "ruffleDemo",
        "name": "Ruffle (Flash Emulator)",
        "image": "ruffle.webp",
        "openfunc": "abGame"
    },
    "run2": {
        "id": "b7f6e36d-2bc8-437a-85fb-fe622c1b622b",
        "name": "Run 2",
        "image": "run2.webp",
        "openfunc": "abFlash"
    },
    "run3": {
        "id": "run3",
        "name": "Run 3",
        "image": "run3.webp",
        "openfunc": "abGame"
    },
    "sandspiel": {
        "id": "sandspiel",
        "name": "Sandspiel",
        "image": "sandspiel.webp",
        "openfunc": "abGame"
    },
    "shapez": {
        "id": "shapez",
        "name": "Shapez",
        "image": "shapez.webp",
        "openfunc": "abGame"
    },
    "/shellShockers": {
        "id": "/shellShockers",
        "name": "Shell Shockers",
        "image": "shellShockers.webp",
        "openfunc": "abProx"
    },
    "slope": {
        "id": "slope",
        "name": "Slope",
        "image": "slope.webp",
        "openfunc": "abGame"
    },
    "/snowRider3d": {
        "id": "/snowRider3d",
        "name": "Snow Rider 3d",
        "image": "snowRider3d.png",
        "openfunc": "abGame"
    },
    "mk64": {
        "id": "mk64",
        "name": "Mario Kart 64",
        "image": "mk64.webp",
        "openfunc": "abGame"
    },
    "sm64": {
        "id": "sm64",
        "name": "Super Mario 64",
        "image": "sm64.webp",
        "openfunc": "abGame"
    },
    "sm64ds": {
        "id": "sm64ds",
        "name": "Super Mario 64 DS",
        "image": "sm64ds.webp",
        "openfunc": "abGame"
    },
    "mario1": {
        "id": "mario1",
        "name": "Super Mario Bros. (NES)",
        "image": "mario1.webp",
        "openfunc": "abGame"
    },
    "superhot": {
        "id": "superhot",
        "name": "Superhot",
        "image": "superhot.avif",
        "openfunc": "abGame"
    },
    "superMarioRPG": {
        "id": "superMarioRPG",
        "name": "Super Mario RPG: Legend of the Seven Stars",
        "image": "superMarioRPG.webp",
        "openfunc": "abGame"
    },
    "superMarioWorld": {
        "id": "superMarioWorld",
        "name": "Super Mario World",
        "image": "superMarioWorld.webp",
        "openfunc": "abGame"
    },
    "marioWorldYoshisIsland": {
        "id": "marioWorldYoshisIsland",
        "name": "Super Mario World 2: Yoshis Island",
        "image": "marioWorldYoshisIsland.webp",
        "openfunc": "abGame"
    },
    "sonny": {
        "id": "f3d71336-a166-435d-abde-df37a6f86df6",
        "name": "Sonny",
        "image": "sonny.webp",
        "openfunc": "abFlash"
    },
    "sonny2": {
        "id": "a893d1ea-3a65-47cf-8472-c3706a22062b",
        "name": "Sonny 2",
        "image": "sonny2.webp",
        "openfunc": "abFlash"
    },
    "spaceCadetPinball": {
        "id": "spaceCadetPinball",
        "name": "Space Cadet Pinball",
        "image": "spacecadetpinball.webp",
        "openfunc": "abGame"
    },
    "spelunky": {
        "id": "spelunky",
        "name": "Spelunky",
        "image": "spelunky.webp",
        "openfunc": "abGame"
    },
    "spinningRat": {
        "id": "spinningRat",
        "name": "Spinning Rat",
        "image": "spinningrat.webp",
        "openfunc": "abGame"
    },
    "ssf": {
        "id": "737358a0-b330-477f-a67e-f86c5d82c581",
        "name": "Super Smash Flash",
        "image": "ssf.webp",
        "openfunc": "abFlash"
    },
    "starfox1": {
        "id": "starfox1",
        "name": "Star Fox",
        "image": "starfox1.webp",
        "openfunc": "abGame"
    },
    "starfox2": {
        "id": "starfox2",
        "name": "Star Fox 2",
        "image": "starfox2.webp",
        "openfunc": "abGame"
    },
    "stickRPG": {
        "id": "2b0cf44c-7997-4c66-82a8-b99804668288",
        "name": "Stick RPG",
        "image": "stickRPG.png",
        "openfunc": "abFlash"
    },
    "subwaySurfers": {
        "id": "subwaySurfers",
        "name": "Subway Surfers",
        "image": "subwaySurfers.webp",
        "openfunc": "abGame"
    },
    "superMetroid": {
        "id": "superMetroid",
        "name": "Super Metroid",
        "image": "superMetroid.webp",
        "openfunc": "abGame"
    },
    "tableTanks": {
        "id": "tableTanks",
        "name": "Table Tanks",
        "image": "tableTanks.webp",
        "openfunc": "abGame"
    },
    "tankTrouble2": {
        "id": "tankTrouble2",
        "name": "Tank Trouble 2",
        "image": "tanktrouble2.webp",
        "openfunc": "abGame"
    },
    "templeRun2": {
        "id": "templeRun2",
        "name": "Temple Run 2",
        "image": "templerun2.webp",
        "openfunc": "abGame"
    },
    "territorialIo": {
        "id": "territorialIo",
        "name": "Territorial io",
        "image": "territorialIo.webp",
        "openfunc": "abProx"
    },
    "tetris": {
        "id": "tetris",
        "name": "Tetris",
        "image": "tetris.webp",
        "openfunc": "abGame"
    },
    "tetrisAttack": {
        "id": "tetrisAttack",
        "name": "Tetris Attack",
        "image": "tetrisAttack.webp",
        "openfunc": "abGame"
    },
    "tetrisds": {
        "id": "tetrisds",
        "name": "Tetris DS",
        "image": "tetrisds.webp",
        "openfunc": "abGame"
    },
    "theOcarinaOfTime": {
        "id": "theOcarinaOfTime",
        "name": "The Ocarina Of Time",
        "image": "theOcarinaOfTime.webp",
        "openfunc": "abGame"
    },
    "tinyFishing": {
        "id": "tinyFishing",
        "name": "Tiny Fishing",
        "image": "tiny-fishing.webp",
        "openfunc": "abGame"
    },
    "tossTheTurtle": {
        "id": "72d6fe01-c6fc-46e8-8595-1d9a36eb0be0",
        "name": "Toss The Turtle",
        "image": "tossTheTurtle.webp",
        "openfunc": "abFlash"
    },
    "typewriter": {
        "id": "typewriter",
        "name": "Typewriter",
        "image": "typewriter.webp",
        "openfunc": "abGame"
    },
    "veryNormalShooter": {
        "id": "veryNormalShooter",
        "name": "Very Normal Shooter",
        "image": "veryNormalShooter.webp",
        "openfunc": "abGame"
    },
    "vex3": {
        "id": "vex3",
        "name": "Vex 3",
        "image": "vex-3.webp",
        "openfunc": "abGame"
    },
    "vex4": {
        "id": "vex4",
        "name": "Vex 4",
        "image": "vex4.webp",
        "openfunc": "abGame"
    },
    "vex5": {
        "id": "vex5",
        "name": "Vex 5",
        "image": "vex-5.webp",
        "openfunc": "abGame"
    },
    "vex6": {
        "id": "vex6",
        "name": "Vex 6",
        "image": "vex6.webp",
        "openfunc": "abGame"
    },
    "vex7": {
        "id": "vex7",
        "name": "vex 7",
        "image": "vex7.webp",
        "openfunc": "abGame"
    },
    "vex8": {
        "id": "vex8",
        "name": "vex 8",
        "image": "vex8.avif",
        "openfunc": "abGame"
    },
    "vmlinux": {
        "id": "vmlinux",
        "name": "Linux Virtual Machine",
        "image": "vmlinux.webp",
        "openfunc": "abGame"
    },
    "wallSmash": {
        "id": "wallSmash",
        "name": "Wall Smash",
        "image": "wallsmash.webp",
        "openfunc": "abGame"
    },
    "wariowaretouched": {
        "id": "wariowaretouched",
        "name": "Warioware Touched!",
        "image": "wariowaretouched.webp",
        "openfunc": "abGame"
    },
    "wbwwb": {
        "id": "wbwwb",
        "name": "We Become What We Behold",
        "image": "wbwwb.webp",
        "openfunc": "abGame"
    },
    "weaveSilk": {
        "id": "weaveSilk",
        "name": "Weavesilk",
        "image": "weavesilk.webp",
        "openfunc": "abGame"
    },
    "webRetro": {
        "id": "webRetro",
        "name": "Web Retro",
        "image": "webretro.webp",
        "openfunc": "abGame"
    },
    "wordle": {
        "id": "wordle",
        "name": "Wordle",
        "image": "wordle.webp",
        "openfunc": "abGame"
    },
    "zombsRoyale": {
        "id": "zombsRoyale",
        "name": "Zombs Royale",
        "image": "zombsRoyale.webp",
        "openfunc": "abProx"
    },
    "worldsEasiestGame": {
        "id": "76f50382-ceeb-47cb-8765-b24f2f88867b",
        "name": "World's Easiest Game",
        "image": "worldsEasiestGame.png",
        "openfunc": "abFlash"
    },
    "worldsHardestGame": {
        "id": "443392fb-5c8a-41a8-8187-428f32661917",
        "name": "World's Hardest Game",
        "image": "hardestgame.webp",
        "openfunc": "abFlash"
    },
    "worldsHardestGame2": {
        "id": "4e1ce5a8-3283-4397-aac4-0f097ea39c9a",
        "name": "World's Hardest Game 2",
        "image": "worldsHardestGame2.png",
        "openfunc": "abFlash"
    },
    "worldsHardestGame3": {
        "id": "2c74b6ed-1b55-4f38-a3aa-c14c4d7f6111",
        "name": "World's Hardest Game 3",
        "image": "worldsHardestGame3.webp",
        "openfunc": "abFlash"
    },
    "worldsHardestGame4": {
        "id": "d5b66d2f-5eab-43d4-98a3-01f368053b9c",
        "name": "World's Hardest Game 4",
        "image": "worldsHardestGame4.webp",
        "openfunc": "abFlash"
    },
    "zelda1": {
        "id": "zelda1",
        "name": "Zelda 1 (NES)",
        "image": "zelda1.webp",
        "openfunc": "abGame"
    },
    "LinksAwakening": {
        "id": "LinksAwakening",
        "name": "Zelda a Link's Awakening",
        "image": "LinksAwakening.webp",
        "openfunc": "abGame"
    },
    "alttp": {
        "id": "alttp",
        "name": "Zelda a Link to The Past",
        "image": "alttp.webp",
        "openfunc": "abGame"
    },
    "OoA": {
        "id": "OoA",
        "name": "Oracle of Ages",
        "image": "OoA.webp",
        "openfunc": "abGame"
    },
    "OoS": {
        "id": "OoS",
        "name": "Oracle of Seasons",
        "image": "OoS.webp",
        "openfunc": "abGame"
    }
};
run(games);
