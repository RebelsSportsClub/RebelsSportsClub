var xc=''
function cricketTab(){clearInterval(xb);document.getElementById('latestResult-h4').innerHTML='Rebels Winter League';document.getElementById('latestResult-p').innerHTML='Rebels Winter League inter club team tournaments latest score. Each team will play 10 overs. Results are based on the final score of each team.';document.getElementById('latestResult-badge1').style='background:url(images/team-logo/wolves.png)';document.getElementById('latestResult-team1-name').innerHTML='Rebel Wolves';document.getElementById('latestResult-team1-result').innerHTML='Lost';document.getElementById('latestResult-team1-topScorer').innerHTML='Red Viper (12*)';document.getElementById('latestResult-team1-score').innerHTML='50/7';document.getElementById('latestResult-team2-score').innerHTML='52/4';document.getElementById('latestResult-date').innerHTML='28th October 2017 - ';document.getElementById('latestResult-time').innerHTML='7:00 PM';document.getElementById('latestResult-place').innerHTML='Regina';document.getElementById('latestResult-country').innerHTML='Canada';document.getElementById('latestResult-badge2').style='background:url(images/team-logo/dragons.png)';document.getElementById('latestResult-team2-name').innerHTML='Rebel Dragons';document.getElementById('latestResult-team2-result').innerHTML='Win';document.getElementById('latestResult-team2-topScorer').innerHTML='Jon Snow (18*)';document.getElementById('matchSchedule').innerHTML='Rebels Cricket has all around the year activities. The team participates in Regina Cricket Association T20 league during summers and conducts its own Fall/Winter inter-club league. The Rebels Cricket has four inter club teams who play against each other.';document.getElementById('nextMatch-p').innerHTML='Upcomming match in the Rebels Winter League -2017';var logoimg1=document.getElementById("nextMatch-logo1");logoimg1.src="images/matchResult/eagles.png";var logoimg2=document.getElementById("nextMatch-logo2");logoimg2.src="images/matchResult/wolves.png";document.getElementById('nextMatch-dateTime').innerHTML='November 04, 2017 | 7:00 PM';document.getElementById('nextMatch-place').innerHTML='Regina (Canada)';var countDownDate=new Date("Nov 4, 2017 15:00:00").getTime();xc=setInterval(function(){var now=new Date().getTime();var distance=countDownDate-now;var days=Math.floor(distance/(1000*60*60*24));var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));var minutes=Math.floor((distance%(1000*60*60))/(1000*60));var seconds=Math.floor((distance%(1000*60))/1000);document.getElementById("days").innerHTML=days;document.getElementById("hours").innerHTML=hours;document.getElementById("min").innerHTML=minutes;document.getElementById("sec").innerHTML=seconds;if(distance<0){clearInterval(xc);document.getElementById("days").innerHTML="00";document.getElementById("hours").innerHTML="00";document.getElementById("min").innerHTML="00";document.getElementById("sec").innerHTML="00";}},1000);document.getElementById("hTeam1").innerHTML="Rebel Eagles";document.getElementById("aTeam1").innerHTML="Rebel Wolves";document.getElementById("Team1-Fix-Date").innerHTML="Nov 4, 2017";document.getElementById("Team1-Fix-Time").innerHTML="7:00 PM";document.getElementById("pointsTable-p").innerHTML="Rebels Winter League - 2017 points table";document.getElementById("pointTable-team1").innerHTML="Rebel Dragons";document.getElementById("teamPoint1").innerHTML="0";document.getElementById("pointTable-team2").innerHTML="Rebel Wolves";document.getElementById("teamPoint2").innerHTML="0";document.getElementById("pointTable-team3").innerHTML="Rebel Eagles";document.getElementById("teamPoint3").innerHTML="0";}