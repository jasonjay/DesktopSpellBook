txt ="<spellbook>"
txt+="<spell id = \"MageArmor\">Mage Armor</spell>"
txt+="<spell id = \"MagicMissile\">Magic Missile</spell>"
txt+="<spell id = \"Grease\">Grease</spell>"
txt+="<spell id = \"Sleep\">Sleep</spell>"
txt+="</spellbook>"

parser = new DOMParser();
spellDoc = parser.parseFromString(txt,"text/xml");

blue ="<scrollcase>"
blue+="<scroll id = \"BurningHands\">Burning Hands</scroll>"
blue+="<scroll id = \"Shield\">Shield</scroll>"
blue+="<scroll id = \"Vanish\">Vanish</scroll>"
blue+="<scroll id = \"SilentImage\">Silent Image</scroll>"
blue+="</scrollcase>"

scrollParser = new DOMParser();
scrollDoc = scrollParser.parseFromString(blue,"text/xml");