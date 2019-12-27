const friends = require("../data/friends");

module.exports = function(app){
    app.get("../data/friends.js", function(_req, res){
        res.json(friends);
    });

    app.post("../data/friends.js", function(req, res){
        const bestMatch = {
            name: "",
            friendDifference: Infinity
        };

        const userData = req.body;
        const userScores = userData.scores;

        const totalDifference;

        for(const i = 0; i < friends.length; i++){
            const currentFriend = friends[i];
            totalDifference = 0;

            console.log(currentFriend.name);

            for(const j = 0; j < currentFriend.scores.length; j++){
                const currentFriendScore = currentFriend.scores[j];
                const currentUserScore = userScores[j];

                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            if (totalDifference <= bestMatch.friendDifference){
                bestMatch.name = currentFriend.name;
              
                bestMatch.friendDifference = totalDifference;
            }
        }
        friends.push(userData);

        res.json(bestMatch);
    });
};