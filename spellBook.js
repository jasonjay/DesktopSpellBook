function swapSpellsAndScrolls()
{
	var x = document.getElementById("leftPane");
	
	if(x.innerHTML == 'Scrolls')
	{
		x.innerHTML = "Spellbook";
		scrollList();
	}
	else if(x.innerHTML == 'Spellbook')
	{
		x.innerHTML = "Scrolls";
		spellList();
	}
}
function updateText(spellToPrep)
{
	var preparedSpells = $("pane2");
	var stringIt = "#"+spellToPrep;
	var specificSpell = $(stringIt);

	var addToList = $("#one");
	if(spellToPrep == "Sleep")
		addToList = $("#two");
	var theButton = $("<button></button>").text(spellToPrep)
	                .click(function(){$(this).css('background-color','red');
									  $(this).click(function(){$(this).attr("background-color","");});
									  });
	addToList.append(theButton);
	//addToList.appendChild(spellToAdd);
	//preparedSpells.innerHTML +="<br><button onclick = castSpell()>"+specificSpell[counter].childNodes[0].nodeValue+"</button>"
}

function strike(specificScroll)
{
	for(var b = 0; b <scrollDoc.getElementsByTagName("scroll").length; b++)
	{
		if(scrollDoc.getElementsByTagName("scroll")[b].getAttribute('id') == specificScroll)
		{
			toRemove =scrollDoc.getElementsByTagName("scroll")[b];
			scrollDoc.documentElement.removeChild(toRemove);
		}
	}
	scrollList();
}

function spellList()
{
	var x = document.getElementById("pane1");
	x.innerHTML = "";
	var specificSpell;
	for(var c = 0; c < spellDoc.getElementsByTagName("spell").length; c++)
	{
		specificSpell = spellDoc.getElementsByTagName("spell")[c];
		x.innerHTML += "<span onclick = updateText("+"\'"+specificSpell.id+"\'"+")>" + specificSpell.childNodes[0].nodeValue +  "</span><br>";

	}
}

function scrollList()
{   
	var x = document.getElementById("pane1");
	x.innerHTML = "";
	var specificScroll;
	for(var c = 0; c < scrollDoc.getElementsByTagName("scroll").length; c++)
	{
		specificScroll = scrollDoc.getElementsByTagName("scroll")[c];
		x.innerHTML += "<button onclick = strike("+"\'"+specificScroll.id+"\'"+")>Use Scroll</button>";
		x.innerHTML += specificScroll.childNodes[0].nodeValue +" <br>"
	}
}

function castSpell(spell)
{
	
}
