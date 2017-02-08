# DesktopSpellBook

The DesktopSpellBook is a webpage used for playing Pathfinder. A player with a Wizard character can use the DesktopSpellBook to prepare and use spells during the game. 

Spells are taken from https://github.com/machinalis/django-srd20/tree/master/pathfinder/spells.json. 

<h3>Using this page</h3>
After customizing this page for your wizard(see below), you'll see the spells your character has within the spellbook on the right. Click the level buttons to collapse that specific level. Clicking a spell name will add it to your prepared spells on the right. Click the drop down arrow next to the spell will allow you to apply metamagic feats with a click if you have any. 

Spells will be added to your prepared spell selection at the lowest level possible. If no slots exist on the lowest possible level the spell will be added to a higher level slot. 

If you have a specialization you will have an orange spell slot on any spell level where you have at least one spell slot. This slot can only be filled by a spell that is within your school. If you select a spell that does not fit your specialization and this is the only slot open for that level, then a higher level slot will be used. The specialization slot is filled last when choosing spells. 

To cast a spell click on the spell from the prepared spells section on the right side of the screen. The button will turn red, indicating the spell has been cast. 

To remove a prepared spell, click the 'X' next to the spell. This will return the slot to an empty state and a new spell can be 
placed in that slot.

To remove all your spells, refresh the browser. 

<h3>How to customize this page for your wizard</h3>

Currently the spell slots and feats are stored in the spells.js file under the mage object. 
To customize this page to your wizard, replace the specialization with your current school or null for universalists.
The mind array is an array of spell slots per level starting with 0. Each element should contain your base slots + bonus slots.
Do not add in your specialization slot, that is already accounted for. 

The metamagic array contains the metamagic feat information that is currently possessed by the wizard, please adjust accordingly.
The nameAdj field is the name that will appear appended to your spell name upon selection. 

The characterSpellList array contains the primary keys of the spells the character has in their spellbook. The masterspell list array
has the primary key under the pk field. Add in the primary key to the characterSpellList array for spells your character has. 

<h3>Updates needed</h3>
<ol>
<li><s>Functionality to remove spells that are accidently assigned</s> *Added 2/8/2017</li>
<li>Support for flexible slot feat</li>
<li>Modal window for new character creation</li>
<li>Items functionality needs to be added, wands, scroll, spontaneous casts for bonded mages</li>
<li>Opposition spells taking up two slots instead of one</li>
</ol>
