$(document).ready(function () {
    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });
    
    let easyArr = ["multiply", "even-or-odd", "opposite-number", 
        "sum-of-positive", "find-the-smallest-integer-in-the-array", "string-repeat",
         "return-negative", "remove-first-and-last-character", "remove-string-spaces", "reversed-strings",
        "vowel-count", "disemvowel-trolls"];

    let mediumArr = ["get-the-middle-character", ""];

    let hardArr = [];


    let easy = $("#easy")
    let medium = $("#medium");
    let hard = $("#hard");

    function getChallenge(){
            if(easy.prop("checked") === true){
                challengeIndex = Math.floor(Math.random() * easyArr.length)
                challengeID = easyArr[challengeIndex];
                
            } else if(medium.prop("checked") === true){
                challengeIndex = Math.floor(Math.random() * mediumArr.length)
                challengeID = mediumArr[challengeIndex];
                
            } else if(hard.prop("checked") === true){
                challengeIndex = Math.floor(Math.random() * hardArr.length)
                challengeID = hardArr[challengeIndex];
                
            }
        }


    let q = $("#question");
    let getQ = $("#generate");

    getQ.on("click", function () {

        getChallenge();

        $.ajax({
            url: "https://www.codewars.com/api/v1/code-challenges/" + challengeID,
            headers: { "Authorization": "MhherAbCWBLgq-YZvg_G" },
            method: "GET"
        }).then(function (data) {
            q.text(data.description)
            console.log(data)
        })

    });

});