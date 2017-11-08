

var xc = ''




function cricketTab(){
	
	clearInterval(xb);
	
	 document.getElementById('latestResult-h4').innerHTML  = 'Rebels Winter League';
	 document.getElementById('latestResult-p').innerHTML  = 'Rebels Winter League inter club team tournaments latest score. Each team will play 5 overs. Results are based on the final score of each team.';
	 
     document.getElementById('latestResult-badge1').style = 'background:url(images/team-logo/wolves.png)';
	 document.getElementById('latestResult-team1-name').innerHTML  = 'Rebel Wolves';
	 document.getElementById('latestResult-team1-result').innerHTML  = 'Lost';
	 document.getElementById('latestResult-team1-topScorer').innerHTML  = '';
	 
	 
	 document.getElementById('latestResult-team1-score').innerHTML  = '21/4';
	 document.getElementById('latestResult-team2-score').innerHTML  = '22/1';
	 document.getElementById('latestResult-date').innerHTML  = '04th November 2017 - ';
	 document.getElementById('latestResult-time').innerHTML  = '7:00 PM';
	 document.getElementById('latestResult-place').innerHTML  = 'Regina';
	 document.getElementById('latestResult-country').innerHTML  = 'Canada';
	 
	 
	 document.getElementById('latestResult-badge2').style = 'background:url(images/team-logo/eagles.png)';
	 document.getElementById('latestResult-team2-name').innerHTML  = 'Rebel Eagles';
	 document.getElementById('latestResult-team2-result').innerHTML  = 'Won';
	 document.getElementById('latestResult-team2-topScorer').innerHTML  = '';
	 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 

	 document.getElementById('matchSchedule').innerHTML  = 'Rebels Cricket has all around the year activities. The team participates in Regina Cricket Association T20 league during summers and conducts its own Fall/Winter inter-club league. The Rebels Cricket has four inter club teams who play against each other.';
 
	 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	 
/////////////////////////////////////NEXT MATCH SECTION (VS SECTION)///////////////////////////////////////////////////////////////////	 
	 
	 document.getElementById('nextMatch-p').innerHTML  = 'Upcomming match in the Rebels Winter League -2017';
	 
	 var logoimg1 = document.getElementById("nextMatch-logo1");
	 logoimg1.src="images/matchResult/wolves.png";
	 
	 var logoimg2 = document.getElementById("nextMatch-logo2");
	 logoimg2.src="images/matchResult/dragons.png";
	 
	 document.getElementById('nextMatch-dateTime').innerHTML  = 'Friday - November 10, 2017 | 7:00 PM';
	 document.getElementById('nextMatch-place').innerHTML  = 'Regina (Canada)';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	// Set the date we're counting down to
	var countDownDate = new Date("Nov 10, 2017 18:00:00").getTime();
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

	// Update the count down every 1 second
	xc = setInterval(function() {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("min").innerHTML = minutes;
	document.getElementById("sec").innerHTML = seconds;

	// If the count down is finished, write some text 
	if (distance < 0) {
    clearInterval(xc);
	document.getElementById("days").innerHTML = "00";
	document.getElementById("hours").innerHTML = "00";
	document.getElementById("min").innerHTML = "00";
	document.getElementById("sec").innerHTML = "00";
	}
	}, 1000);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	

	document.getElementById("hTeam1").innerHTML = "Eagles";
	document.getElementById("aTeam1").innerHTML = "Wolves";
	document.getElementById("Team1-Fix-Date").innerHTML = "Nov 4, 2017";
	document.getElementById("Team1-Fix-Time").innerHTML = "6:00 PM";
	
	document.getElementById("hTeam2").innerHTML = "Wolves";
	document.getElementById("aTeam2").innerHTML = "Dragons";
	document.getElementById("Team2-Fix-Date").innerHTML = "Nov 10 (Fri), 2017";
	document.getElementById("Team2-Fix-Time").innerHTML = "7:00 PM";
	
	document.getElementById("hTeam3").innerHTML = "Dragons";
	document.getElementById("aTeam3").innerHTML = "Eagles";
	document.getElementById("Team3-Fix-Date").innerHTML = "Nov 17 (Fri), 2017";
	document.getElementById("Team3-Fix-Time").innerHTML = "8:30 PM";

	document.getElementById("hTeam4").innerHTML = "Eagles";
	document.getElementById("aTeam4").innerHTML = "Wolves";
	document.getElementById("Team4-Fix-Date").innerHTML = "Nov 24 (Fri), 2017";
	document.getElementById("Team4-Fix-Time").innerHTML = "7:00 PM";

	document.getElementById("hTeam5").innerHTML = "Dragons";
	document.getElementById("aTeam5").innerHTML = "Wolves";
	document.getElementById("Team5-Fix-Date").innerHTML = "Jan 06, 2018";
	document.getElementById("Team5-Fix-Time").innerHTML = "7:00 PM";

	document.getElementById("hTeam6").innerHTML = "Dragons";
	document.getElementById("aTeam6").innerHTML = "Eagles";
	document.getElementById("Team6-Fix-Date").innerHTML = "Jan 13, 2018";
	document.getElementById("Team6-Fix-Time").innerHTML = "7:00 PM";

	document.getElementById("hTeam7").innerHTML = "Eagles";
	document.getElementById("aTeam7").innerHTML = "Wolves";
	document.getElementById("Team7-Fix-Date").innerHTML = "Jan 20, 2018";
	document.getElementById("Team7-Fix-Time").innerHTML = "7:00 PM";

	document.getElementById("hTeam8").innerHTML = "Eagles";
	document.getElementById("aTeam8").innerHTML = "Wolves";
	document.getElementById("Team8-Fix-Date").innerHTML = "Jan 27, 2018";
	document.getElementById("Team8-Fix-Time").innerHTML = "7:00 PM";	
	
	document.getElementById("hTeam9").innerHTML = "Wolves";
	document.getElementById("aTeam9").innerHTML = "Dragons";
	document.getElementById("Team9-Fix-Date").innerHTML = "Jan 03, 2018";
	document.getElementById("Team9-Fix-Time").innerHTML = "7:00 PM";

	document.getElementById("hTeam10").innerHTML = "Dragons";
	document.getElementById("aTeam10").innerHTML = "Wolves";
	document.getElementById("Team10-Fix-Date").innerHTML = "Feb 10, 2018";
	document.getElementById("Team10-Fix-Time").innerHTML = "7:00 PM";

	document.getElementById("hTeam11").innerHTML = "Eagles";
	document.getElementById("aTeam11").innerHTML = "Dragons";
	document.getElementById("Team11-Fix-Date").innerHTML = "Feb 17, 2018";
	document.getElementById("Team11-Fix-Time").innerHTML = "7:00 PM";
	
	document.getElementById("hTeam12").innerHTML = "Eagles";
	document.getElementById("aTeam12").innerHTML = "Dragons";
	document.getElementById("Team12-Fix-Date").innerHTML = "Feb 24, 2018";
	document.getElementById("Team12-Fix-Time").innerHTML = "7:00 PM";

	document.getElementById("hTeam13").innerHTML = "Eagles";
	document.getElementById("aTeam13").innerHTML = "Wolves";
	document.getElementById("Team13-Fix-Date").innerHTML = "Mar 03, 2018";
	document.getElementById("Team13-Fix-Time").innerHTML = "7:00 PM";	

	document.getElementById("hTeam14").innerHTML = "Wolves";
	document.getElementById("aTeam14").innerHTML = "Dragons";
	document.getElementById("Team14-Fix-Date").innerHTML = "Mar 16 (Fri), 2018";
	document.getElementById("Team14-Fix-Time").innerHTML = "7:00 PM";

	document.getElementById("hTeam15").innerHTML = "Dragons";
	document.getElementById("aTeam15").innerHTML = "Eagles";
	document.getElementById("Team15-Fix-Date").innerHTML = "Mar 23 (Fri), 2018";
	document.getElementById("Team15-Fix-Time").innerHTML = "9:00 PM";	

	document.getElementById("hTeam16").innerHTML = "Qualifier 1";
	document.getElementById("aTeam16").innerHTML = "Qualifier 2";
	document.getElementById("Team16-Fix-Date").innerHTML = "Mar 31, 2018";
	document.getElementById("Team16-Fix-Time").innerHTML = "7:00 PM";


	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	document.getElementById("pointsTable-p").innerHTML = "Rebels Winter League - 2017 points table";
	
	document.getElementById("pointTable-team1").innerHTML = "Rebel Eagles";
	document.getElementById("teamPoint1").innerHTML = "2";
	
	document.getElementById("pointTable-team2").innerHTML = "Rebel Wolves";
	document.getElementById("teamPoint2").innerHTML = "2";
	
	document.getElementById("pointTable-team3").innerHTML = "Rebel Dragons";
	document.getElementById("teamPoint3").innerHTML = "0";
	

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	


}
