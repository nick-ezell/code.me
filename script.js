$(document).ready(function () {
    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });
    //Arrays containing our questions
    let easyArr = ["opposite-number",
        "sum-of-positive", "find-the-smallest-integer-in-the-array", "remove-first-and-last-character", "remove-string-spaces",
        "vowel-count", "disemvowel-trolls"];
    let mediumArr = ["get-the-middle-character", "century-from-year", "convert-a-number-to-a-string", "reversed-strings", "grasshopper-order-of-operations", "exes-and-ohs",
        "shortest-word", "descending-order", "sum-of-odd-numbers", ""];
    let hardArr = ["create-phone-number", "who-likes-it", "find-the-odd-int", "counting-duplicates", "replace-with-alphabet-position", "convert-string-to-camel-case"];

    //IDs for difficulty buttons
    let easy = $("#easy")
    let medium = $("#medium");
    let hard = $("#hard");
    //Elements for writing questions
    let q = $("#question");
    let qDiv = $("<div>");
    qDiv.attr("id", "qDiv");
    qDiv.attr("class", "box");
    let qText = $("<p>");
    let favIcon = $("<img>").attr("src", "images/favicon.png");
    favIcon.attr("class", "favIcon");
    //Variable for YT API call
    let youtubeBtn = $("<button>").attr("class", "button is-rounded is-danger is-medium");
     let youtubeIcon = $("<i>").attr("class","fab fa-youtube" )
    youtubeBtn.text("YouTube References")
    //Click listeners for each difficulty
    easy.on("click", function () {
        challengeIndex = Math.floor(Math.random() * easyArr.length)
        challengeID = easyArr[challengeIndex];
        $.ajax({
            url: "https://www.codewars.com/api/v1/code-challenges/" + challengeID,
            headers: { "Authorization": "MhherAbCWBLgq-YZvg_G" },
            method: "GET"
        }).then(function (props) {
            $(".buttons").empty();
            $("#youtubeBtn").append(youtubeBtn)
            youtubeBtn.prepend(youtubeIcon)
            q.empty();
            q.append(qDiv);
            qDiv.append(favIcon);
            qDiv.append(qText);
            qText.text(props.description)
            console.log(props)

            // Youtube API search call - Mathew 
            youtubeBtn.on("click", function () {
                $(".hide").css("visibility", "visible")
                var searchQuery = challengeID + "JavaScript";
                let googleKey = "AIzaSyCN8BP_zA7LbOr5ZegORQuuaaKh06r5Fkk";
                $.ajax({
                    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchQuery + "&key=" + googleKey,
                    method: "GET"
                }).then(function (data) {
                    console.log(data);
                    console.log(data.items[1].id.videoId);
                    for (var videoNum = 0; videoNum < 5; videoNum++) {
                        var videoUrl = "https://www.youtube.com/embed/" + data.items[videoNum].id.videoId;
                        console.log(videoUrl);
                        $(".videos").append('<li><iframe width="200" height="150" src=' + videoUrl + ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>')
                    }
                }).catch(function (error) {
                    console.log(error)
                })

            })

        })
    })

    medium.on("click", function () {
        challengeIndex = Math.floor(Math.random() * mediumArr.length)
        challengeID = mediumArr[challengeIndex];
        $.ajax({
            url: "https://www.codewars.com/api/v1/code-challenges/" + challengeID,
            headers: { "Authorization": "MhherAbCWBLgq-YZvg_G" },
            method: "GET"
        }).then(function (props) {
            $(".buttons").empty();
            $("#youtubeBtn").append(youtubeBtn)
            q.empty();
            q.append(qDiv);
            qDiv.append(favIcon);
            qDiv.append(qText);
            qText.text(props.description)
            console.log(props)

            // Youtube API search call - Mathew 
            youtubeBtn.on("click", function () {
                $(".hide").css("visibility", "visible")
                var searchQuery = challengeID + "JavaScript";
                let googleKey = "AIzaSyCN8BP_zA7LbOr5ZegORQuuaaKh06r5Fkk";
                $.ajax({
                    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchQuery + "&key=" + googleKey,
                    method: "GET"
                }).then(function (data) {
                    console.log(data);
                    console.log(data.items[1].id.videoId);
                    for (var videoNum = 0; videoNum < 5; videoNum++) {
                        var videoUrl = "https://www.youtube.com/embed/" + data.items[videoNum].id.videoId;
                        console.log(videoUrl);
                        $(".videos").append('<li><iframe width="200" height="150" src=' + videoUrl + ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>')
                    }
                }).catch(function (error) {
                    console.log(error)
                })

            })

        })
    })

    hard.on("click", function () {
        challengeIndex = Math.floor(Math.random() * hardArr.length)
        challengeID = hardArr[challengeIndex];
        $.ajax({
            url: "https://www.codewars.com/api/v1/code-challenges/" + challengeID,
            headers: { "Authorization": "MhherAbCWBLgq-YZvg_G" },
            method: "GET"
        }).then(function (props) {
            $(".buttons").empty();
            $("#youtubeBtn").append(youtubeBtn)
            q.empty();
            q.append(qDiv);
            qDiv.append(favIcon);
            qDiv.append(qText);
            qText.text(props.description)
            console.log(props);

            // Youtube API search call - Mathew 
            youtubeBtn.on("click", function () {
                $(".hide").css("visibility", "visible")
                var searchQuery = challengeID + "JavaScript";
                let googleKey = "AIzaSyCN8BP_zA7LbOr5ZegORQuuaaKh06r5Fkk";
                $.ajax({
                    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchQuery + "&key=" + googleKey,
                    method: "GET"
                }).then(function (data) {
                    console.log(data);
                    console.log(data.items[1].id.videoId);
                    for (var videoNum = 0; videoNum < 5; videoNum++) {
                        var videoUrl = "https://www.youtube.com/embed/" + data.items[videoNum].id.videoId;
                        console.log(videoUrl);
                        $(".videos").append('<li><iframe width="200" height="150" src=' + videoUrl + ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>')
                    }
                }).catch(function (error) {
                    console.log(error)
                })

            })

        })
    })
    //Saving individual's name from index.html
    let save = $("#saveName");
    let user = $("#userName");
    let loadName = $("#name");


    loadName.text(localStorage.getItem("Name"));
    save.on("click", function () {
        localStorage.setItem("Name", user.val());
    })

});