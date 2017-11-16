function latestNews(){
 
	 var divSection = document.getElementById("DivSection");
	 divSection.data-href="https://www.facebook.com/rebelsreginacc/posts/1579123645444344";
	 
	 var blockquote = document.getElementById("quote");
	 blockquote.cite="https://www.facebook.com/rebelsreginacc/posts/1579123645444344";
	 
	 document.getElementById('ln-p').innerHTML  = 'our official slogan :' + &#x201c; + 'Rebel by Blood' + &#x201d; + 'Thanks to Savan Singh and Phani Chakradhar Reddy for coming up with such a slogan.';

	 var aTag = document.getElementById("A");
	 aTag.href="https://www.facebook.com/rebelsreginacc/posts/1579123645444344";
	 document.getElementById('A').innerHTML  = 'Tuesday, October 10, 2017';
	 
	 }
