function swapSpellsAndScrolls()
{
	var x = document.getElementById("leftPane");
	
	if(x.innerHTML == 'Items')
	{
		x.innerHTML = "Spellbook";
		scrollList();
	}
	else if(x.innerHTML == 'Spellbook')
	{
		x.innerHTML = "Items";
		populateSpellBook();
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
	
		var buttonArray = $(addSpellToLevel[0].children);
	    
		for(var slot of buttonArray)
		{
			if(slot.children[0].className.includes("btn-info") && slot.children[0].textContent == "Empty")
			{	
				slot.children[0].textContent = spellName;
				return;
			}
			if(slot.children[0].className.includes("btn-warning") && slot.children[0].textContent == "Empty" && slot.children[0].id == spellSchool)
			{
				slot.children[0].textContent = spellName;
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
	for(var num of characterSpellList)
	{
		if(masterSpellList[num].fields.level.includes("wizard"))
		{
			var levelOfSpell = masterSpellList[num].fields.level.split("wizard ");
		}
		else
			continue;
		
		var addedButtonGrp = $("<div></div>")
		.attr("class","btn-group");

		var addedBaseSpell =  $("<button></button>")
				.attr("class","btn btn-sm btn-primary")
				.attr("id",masterSpellList[num].fields.name)
				.text(this.masterSpellList[num].fields.name);
				//onclick parameters: Spell name, Level of Spell, School of spell
				addedBaseSpell.click({param1:masterSpellList[num].fields.name, param2:levelOfSpell[1], param3:masterSpellList[num].fields.school},updateText);

		addedButtonGrp.append(addedBaseSpell);

		
		addedButtonGrp.append('<button class="btn btn-sm btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><span class="caret"></span></button>');
		var unorderList = $("<ul></ul>")
		.attr("class","dropdown-menu");

		for(var feat of mage.metamagic)
		{
			var listItem = $("<li></li>");
			var a = $("<a></a>")
			.text(feat.name)
			.click({param1:feat.nameAdj+masterSpellList[num].fields.name,param2:feat.levelAdj+parseInt(levelOfSpell[1]),param3:masterSpellList[num].fields.school},updateText);
			
			listItem.append(a);
			
			unorderList.append(listItem);
		}	

		addedButtonGrp.append(unorderList);
		

		var levelSection = "#bookLevel"+levelOfSpell[1];
		$(levelSection).append(addedButtonGrp);
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
/*
function populateMind()
{
	var spellLevelCounter = 0;

	for(var num of mage.mind)
	{	
		var levelToAddSlotsTo = "#spellLevel"+spellLevelCounter;
		for(var a = 0; a < num; a++)
		{
			
			var addedButton=$("<button></button>")
				.attr("class","btn btn-sm btn-info")
				.click(function()
				{
					if(($(this).text() != "Empty") && $(this).parent().attr("id") != "spellLevel0")
					{
						$(this).removeClass();$(this).addClass("btn btn-sm btn-danger");
					}
				})
				.text("Empty");
			
			$(levelToAddSlotsTo).append(addedButton);
		}
	    if(mage.specialization != null && spellLevelCounter != 0)
		{
			var addedButton=$("<button></button>")
				.attr("class","btn btn-sm btn-warning")
				.attr("id",mage.specialization)
				.text("Empty")
				.click(function()
				{
					if($(this).text() != "Empty")
					{
						$(this).removeClass();$(this).addClass("btn btn-sm btn-danger");
					}
				});
			$(levelToAddSlotsTo).append(addedButton);
		}
		spellLevelCounter++;
	}	
}
*/
function populateMind()
{
	var spellLevelCounter = 0;

	for(var num of mage.mind)
	{	
		var levelToAddSlotsTo = "#spellLevel"+spellLevelCounter;
		for(var a = 0; a < num; a++)
		{
			var buttonGroup = $("<div></div>")
							.attr("class","btn-group");
							
			var addedButton=$("<button></button>")
				.attr("class","btn btn-sm btn-info")
				.click(function()
				{
					if(($(this).text() != "Empty") && $(this).parent().attr("id") != "spellLevel0")
					{
						$(this).removeClass();$(this).addClass("btn btn-sm btn-danger");
					}
				})
				.text("Empty");
			
			$(buttonGroup).append(addedButton);
			var xButton = $('<button class="btn btn-sm btn-info" type="button"><span class="glyphicon glyphicon-remove"></span></button>')
						.click(function()
						{$(this).siblings().text("Empty"); 
						 $(this).siblings().attr("class","btn btn-sm btn-info");
						});
				
			$(buttonGroup).append(xButton);
			
			$(levelToAddSlotsTo).append(buttonGroup);
			
		}
	    if(mage.specialization != null && spellLevelCounter != 0)
		{
			var buttonGroup = $("<div></div>")
							.attr("class","btn-group");
							
			var addedButton=$("<button></button>")
				.attr("class","btn btn-sm btn-warning")
				.attr("id",mage.specialization)
				.text("Empty")
				.click(function()
				{
					if($(this).text() != "Empty")
					{
						$(this).removeClass();$(this).addClass("btn btn-sm btn-danger");
					}
				});
				
			var xButton = $('<button class="btn btn-sm btn-warning" type="button"><span class="glyphicon glyphicon-remove"></span></button>')
			.click(function()
			{$(this).siblings().text("Empty"); 
			 $(this).siblings().attr("class","btn btn-sm btn-warning");
			});
			
			$(buttonGroup).append(addedButton)
						  .append(xButton);
				
			
			$(levelToAddSlotsTo).append(buttonGroup);
		}
		spellLevelCounter++;
	}	
}
function populateSpellBook()
{
	var pane1Div = $("#pane1");
	var container = $("<div></div>")
					  .addClass("container-fluid");
	
	for(var a = 0; a < 10; a++)
	{
		var newRow = $("<div></div>")
					.addClass("row");
					
		var newSpan = $("<div></div>")
						.addClass("span5");
						
		var newButton = $("<button></button>") 
						.attr("type","button") 
						.addClass("btn btn-sm btn-success") 
						.attr("data-toggle","collapse") 
						.attr("data-target","#bookLevel"+a)
						.html("Level "+a);
						
		var newCollapseDiv =$("<div></div>")
							.attr("id","bookLevel"+a)
							.addClass("collapse in");
		
		newSpan.append(newButton);
		newSpan.append(newCollapseDiv);
		newRow.append(newSpan);
		container.append(newRow);
	}
	
	pane1Div.append(container);
}

function pageLoaded()
{
	spellList();
	populateMind();
}

function testAddingSpell()
{
	
	
}



