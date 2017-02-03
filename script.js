$(document).ready(function() {
    //example showing fucntion decleration
    var myTest = function() {
        console.log("testing testing 123");
        return "you can return whatever you want from any function";
    };

    //JSONObject to hold all the content
    var myChar = {
        'characteristics' : {
            'characterName' : "",
            'homeWord' : "",
            'divination' : "",
            'gender' : "",
            'skinColor' : "",
            'playerName' : "Alex",
            'careerPath' : "",
            'quirk' : "",
            'build' : "",
            'hairColor' : "",
            'height' : "",
            'weight' : "",
            'eyeColor' : "",
            'age' : 0
        },
        'skills' : {

        },
        'talents' : {

        },
        'fatePoints' : {

        },
        'meleeWeapons' : {

        },
        'missleWeapns' : {

        },
        'psychicPowers' : {

        },
        'mutations' : {

        }, 
        'wounds' :{

        },
        'armour' : {

        },
        'gear' : {

        },
        'insanitly' : {
            'points': 0
        },
        'curruption' : {

        },
        'wealth' : {

        }
    },
    lookHowDumb = "this looks!";



    //set some stuff as an example
    myChar.characteristics.characterName = "Jimbo Johnson";
    myChar.wealth.throwns = 10000000;

    //the . is to select a class, just look this stuff up
    $(".characterName").text("Character Name: " + myChar.characteristics.characterName);
    $(".playerName").text("Player Name: " + myChar.characteristics.playerName);
});