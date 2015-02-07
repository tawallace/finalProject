// Functions to hide or show content

function HideContent(d) {
	document.getElementById(d).style.display = "none";
}

function ShowContent(d) {
	document.getElementById(d).style.display = "block";
}

function ReverseDisplay(d) {
	if(document.getElementById(d).style.display == "none") { 
		document.getElementById(d).style.display = "block"; 
	}
	else { 
		document.getElementById(d).style.display = "none"; 
	}
}

function HideAllShowOne(d) {
	var IDvaluesOfEachDiv = "A B C D E F G PrintSummary";
		IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/[,\s"']/g," ");
		IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/^\s*/,"");
		IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/\s*$/,"");
		IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/  +/g," ");
	var IDlist = IDvaluesOfEachDiv.split(" ");
		
	for(var i=0; i<IDlist.length; i++) { 
			HideContent(IDlist[i]); 
		}
			ShowContent(d);
}


