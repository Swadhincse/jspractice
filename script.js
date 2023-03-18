document.getElementById("start-btn").addEventListener("click", function() {
    sportsDay(
      { red: 0, blue: 0, green: 0, yellow: 0 },
      [
        function(score) {
          console.log("The winning team is " + getWinningTeam(score));
        },
        function(score) {
          console.log("The losing team is " + getLosingTeam(score));
        },
        function(score) {
          console.log("The total score is " + getTotalScore(score));
        }
      ]
    );
    function sportsDay(scores, callbacks) {
        var teams = Object.keys(scores);
        var teamScores = {};
      
        // Initialize all team scores to 0
        for (var i = 0; i < teams.length; i++) {
          teamScores[teams[i]] = 0;
        }
      
        // Run the sports day simulation
        for (var i = 0; i < 10; i++) {
          var teamIndex = Math.floor(Math.random() * teams.length);
          var team = teams[teamIndex];
          var score = Math.floor(Math.random() * 11);
      
          teamScores[team] += score;
      
          // Call each callback function with the updated score object
          for (var j = 0; j < callbacks.length; j++) {
            callbacks[j](teamScores);
          }
        }
      }
      
      function getWinningTeam(scores) {
        var winningTeam = "";
        var winningScore = -1;
      
        for (var team in scores) {
          if (scores[team] > winningScore) {
            winningTeam = team;
            winningScore = scores[team];
          }
        }
      
        return winningTeam;
      }
      
      function getLosingTeam(scores) {
        var losingTeam = "";
        var losingScore = Infinity;
      
        for (var team in scores) {
          if (scores[team] < losingScore) {
            losingTeam = team;
            losingScore = scores[team];
          }
        }
      
        return losingTeam;
      }
      
      function getTotalScore(scores) {
        var totalScore = 0;
      
        for (var team in scores) {
          totalScore += scores[team];
        }
      
        return totalScore;
      }
      
  });