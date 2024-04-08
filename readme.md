Rock Paper Scissor RPG
🪨️🗞️✂️
------------------------------------------------Principle-------------------------------------------------------------

A rock paper game with rpg elements
Players have a HP bar and take damage while playing

------------------------------------------------Class system--------------------------------------------------------

Players can choose a class at the start of the game (Knight, Warrior, Magician...)
Classes give some types of buffs

Buffs can be like :

-8% damage on scissor attack
-6% chance to evade rock attack

Players can regain health from landing attack with their prefer weapon (5-10%)

Knights will have buffs on precision with scissor, evasion against rock and will prefer scissor attacks
Warriors will have buffs on damage with rocks, defense against paper and will prefer rock attacks
Magician will have buffs on heal, damage with paper and will prefer paper attack

Ex of a match:

Warrior 										Knight
(											(
  -8% more damage with rocks				VS				  -7% more scissor precision
  -5% less damage from paper								    -6% more chance to evade rocks
)											)

Warrior 										Knight
(											(
  -7% more heal						          VS				  -9% more scissor precision
  -8% more damage with paper								    -5% more chance to evade rocks
)											)

--------------------------------------------------------------Buff Management-----------------------------------------

The buffs will be random between a range from 5 to 10%
Players have a 10% chance to miss attacks

HP bar = 100
one attack remove 10 to 15 hp
When you game a buff in attack => base dmg + (buff*base dmg)/100

Heal bring a certain percentage of your health
Buff on heal => heal% +  buff%

Buff on precision => 10% - buff%
