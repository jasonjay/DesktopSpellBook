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
function updateText(event)
{
	var spellName = event.data.param1;
	var spellLevel = event.data.param2;
	var spellSchool = event.data.param3;
	
	var maxSpellLevel = 0; for(var a of mage.mind)maxSpellLevel++;
	
	for(var currentLevel = spellLevel; currentLevel < maxSpellLevel;currentLevel++)
	{
		var addSpellToLevel = $("#spellLevel"+currentLevel);
	
		var buttonArray = addSpellToLevel[0].children;
	    
		for(var slot of buttonArray)
		{
			if(slot.className == "btn btn-info" && slot.textContent == "Empty")
			{	
				slot.textContent = spellName;
				return;
			}
			if(slot.className == "btn btn-warning" && slot.textContent == "Empty" && slot.id == spellSchool)
			{
				slot.textContent = spellName;
				return;
				
			}
		}

	
	}
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
    //rewrite this function to return only the spells currently in the characters spell book.
	//the primary keys of the spells known will be in an array.

	for(var num of characterSpellList)
	{
		if(masterSpellList[num].fields.level.includes("wizard"))
			var levelOfSpell = masterSpellList[num].fields.level.split("wizard ");
		else
			continue;
		
		var addedSpell = $("<button></button>")
		.attr("class","btn btn-primary")
		.attr("id",masterSpellList[num].fields.name)
		.text(this.masterSpellList[num].fields.name);
		//onclick parameters: Spell name, Level of Spell, School of spell
		addedSpell.click({param1:masterSpellList[num].fields.name, param2:levelOfSpell[1], param3:masterSpellList[num].fields.school},updateText);
	
		
		
		var levelSection = "#bookLevel"+levelOfSpell[1];
		$(levelSection).append(addedSpell);
	}	
	populateMind();
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

function populateMind()
{
	var spellLevelCounter = 0;

	for(var num of mage.mind)
	{	
		var levelToAddSlotsTo = "#spellLevel"+spellLevelCounter;
		for(var a = 0; a < num; a++)
		{
			
			var addedButton=$("<button></button>")
				.attr("class","btn btn-info")
				.text("Empty");
			
			$(levelToAddSlotsTo).append(addedButton);
		}
	    if(mage.specialization != null && spellLevelCounter != 0)
		{
			var addedButton=$("<button></button>")
				.attr("class","btn btn-warning")
				.attr("id",mage.specialization)
				.text("Empty");
			$(levelToAddSlotsTo).append(addedButton);
		}
		spellLevelCounter++;
	}	
}