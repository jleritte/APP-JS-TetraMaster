/*
Card Name Type  Max Attack  Max Defense Max Magic Def Maximum Hex stats

Goblin    P 7   9   4   0A00
Fang    P 9   10    4   0A00
Skeleton  P 11    12    10    0A00
Flan    M 13    6   19    0A01
Zaghnol   P 15    13    13    0A00
Lizard Man  P 17    15    8   1A00
Zombie    P 19    19    11    1A10
Bomb    M 21    12    21    1A01
Ironite   P 23    23    13    1A10
Sahagin   P 25    18    4   1A10
Yeti    M 27    6   26    1A01
Mimic   M 29    20    27    1A11
Wyerd   M 31    9   33    1A02
Mandragora  M 33    15    39    2A02
Crawler   P 35    36    8   2A20
Sand Scorpion P 37    37    17    2A21
Nymph   M 39    12    38    2A02
Sand Golem  P 41    38    16    2A21
Zuu   P 43    11    34    2A02
Dragonfly P 45    40    19    2A21
Carrion Worm  M 47    29    25    2A11
Cerberus  P 49    45    4   3A20
Antlion   P 51    48    27    3A31
Cactuar   P 53    195   4   3AC0
Gimme Cat M 55    33    29    3A21
Ragtimer  M 57    34    30    3A21
Hedgehog Pie  M 59    22    40    3A12
Ralvuimahgo P 61    68    12    3A40
Ochu    P 63    37    18    3A21
Troll   P 65    62    34    4A32
Blazer Beetle P 67    91    18    4A51
Abomination P 69    59    58    4A33
Zemzelett M 71    32    96    4A26
Stroper   P 73    64    8   4A40
Tantarian M 75    43    39    4A22
Grand Dragon  P 77    65    71    4A44
Feather Circle  M 79    45    41    4A22
Hecteyes  M 81    10    70    5A04
Ogre    P 83    80    29    5A51
Armstrong M 85    36    75    5A24
Ash   M 87    50    50    5A33
Wraith    M 89    80    17    5A51
Gargoyle  M 91    51    47    5A32
Vepal   M 93    52    48    5A33
Grimlock  M 84    37    54    5A23
Tonberry  P 41    54    50    2A33
Veteran   M 90    30    145   5A19
Garuda    M 98    72    29    6A41
Malboro   M 86    57    99    5A36
Mover   M 102   250   8   6AF0
Abadon    M 125   105   45    7A62
Behemoth  P 189   71    106   BA46
Iron Man  P 197   110   12    CA60
Nova Dragon P 236   125   194   EA7C
Ozma    P 221   6   199   DA0C
Hades   M 250   200   20    FAC1
Holy    M 134   40    63    8A23
Meteor    M 190   162   2   BAA0
Flare   M 208   17    17    DA11
Shiva   M 83    6   95    5A05
Ifrit   M 100   150   17    6A91
Ramuh   M 74    29    103   4A16
Atomos    M 66    100   100   4A66
Odin    M 205   136   72    CA84
Leviathan M 183   100   22    BA61
Bahamut   M 200   145   83    CA95
Ark   M 226   96    90    EA65
Fenrir    M 139   36    22    8A21
Madeen    M 162   22    100   AA16
Alexander M 225   183   86    EAB5
Excalibur II  P 255   180   6   FAB0
Ultima Weapon P 248   24    102   FA16
Masamune  P 202   180   56    CAB3
Elixir    M 100   100   100   6A66
Dark Matter M 199   56    195   CA3C
Ribbon    M 12    200   255   0ACF
Tiger Racket  P 12    5   19    0A01
Save the Queen  P 112   60    10    7A30
Genji   P 10    105   175   0A6A
Mythril Sword P 32    4   6   2A00
Blue Narciss  P 143   144   20    8A91
Hilda Garde 3 P 98    62    16    6A31
Invincible  M 185   145   201   BA9C
Cargo Ship  P 45    100   10    2A60
Hilda Garde 1 P 99    75    2   6A40
Red Rose  P 143   20    144   8A19
Theater Ship  P 33    106   19    2A61
Viltgance P 228   145   32    EA92
Chocobo   P 3   5   12    0A00
Fat Chocobo P 25    30    30    1A11
Mog   M 3   5   12    0A00
Frog    P 2   2   2   0A00
Oglop   P 40    33    6   2A20
Alexandria  P 4   178   100   0AB6
Lindblum  P 6   100   178   0A6B
Two Moons M 113   88    88    7A55
Gargant   P 46    17    56    2A13
Namingway M 127   127   127   7A77
Boco    P 128   127   127   8A77
Airship   P 129   127   127   8A77
*/
export const masterCardList = [
  ["Goblin",15,"P",15,15,"b"],
  ["Fang",15,"P",15,15,"b"],
  ["Skeleton",15,"P",15,15,"b"],
  ["Flan",15,"M",15,31,"b"],
  ["Zaghnol",15,"P",15,15,"b"],
  ["Lizardman",31,"P",15,15,"b"],
  ["Zombie",31,"P",31,15,"b"],
  ["Bomb",31,"M",15,31,"b"],
  ["Ironite",31,"P",31,15,"b"],
  ["Sahagin",31,"P",31,15,"b"],
  ["Yeti",31,"M",15,31,"b"],
  ["Mimic",31,"M",31,31,"b"],
  ["Wyerd",31,"M",15,47,"b"],
  ["Mandragora",47,"M",15,47,"b"],
  ["Crawler",47,"P",47,15,"b"],
  ["S. Scorpion",47,"P",47,31,"b"],
  ["Nymph",47,"M",15,47,"b"],
  ["Sand Golom",47,"P",47,31,"b"],
  ["Zuu",47,"P",15,47,"b"],
  ["Dragonfly",47,"P",47,31,"b"],
  ["Carrion Worm",47,"M",31,31,"b"],
  ["Cerberus",63,"P",47,15,"b"],
  ["Antlion",63,"P",63,31,"b"],
  ["Cactuar",63,"P",207,15,"b"],
  ["Gimme Cat",63,"M",47,31,"b"],
  ["Ragtimer",63,"M",47,31,"b"],
  ["Hedgehog Pie",63,"M",31,47,"b"],
  ["Raluimahgo",63,"P",79,15,"b"],
  ["Ocho",63,"P",47,31,"b"],
  ["Troll",79,"P",63,47,"b"],
  ["Blazer Beetle",79,"P",95,31,"b"],
  ["Abomination",79,"P",63,63,"b"],
  ["Zemzelett",79,"M",47,111,"b"],
  ["Stroper",79,"P",79,15,"b"],
  ["Tantarian",79,"M",47,47,"b"],
  ["Grand Dragon",79,"P",79,79,"b"],
  ["Feather Circle",79,"M",47,47,"b"],
  ["Hecteyes",95,"M",15,79,"b"],
  ["Ogre",95,"P",79,31,"b"],
  ["Armstrong",95,"M",47,79,"b"],
  ["Ash",95,"M",63,63,"b"],
  ["Wraith",95,"M",95,31,"b"],
  ["Gargoyle",95,"M",63,47,"b"],
  ["Vepal",95,"M",63,63,"b"],
  ["Grimlock",95,"M",47,63,"b"],
  ["Tonberry",47,"P",63,63,"b"],
  ["Veteran",95,"M",31,159,"b"],
  ["Garuda",111,"M",79,31,"b"],
  ["Malboro",95,"M",63,111,"b"],
  ["Mover",111,"M",255,15,"b"],
  ["Abadon",127,"M",111,47,"b"],
  ["Behemoth",191,"P",79,111,"b"],
  ["Iron Man",207,"P",111,15,"b"],
  ["Nova Dragon",239,"P",127,207,"b"],
  ["Ozma",223,"M",15,207,"b"],
  ["Hades",255,"M",207,31,"b"],
  ["Holy",143,"M",47,63,"m"],
  ["Meteor",191,"M",175,15,"m"],
  ["Flare",223,"M",31,31,"m"],
  ["Shiva",95,"M",15,95,"m"],
  ["Ifrit",111,"M",159,31,"m"],
  ["Ramuh",79,"M",31,111,"m"],
  ["Atomos",79,"M",111,111,"m"],
  ["Odin",207,"M",143,79,"m"],
  ["Leviathan",191,"M",111,31,"m"],
  ["Bahamut",207,"M",159,95,"m"],
  ["Ark",239,"M",111,95,"m"],
  ["Fenrir",143,"M",47,31,"m"],
  ["Madeen",175,"M",31,111,"m"],
  ["Alexander",239,"M",191,95,"m"],
  ["Excalibur 2",255,"P",191,15,"w"],
  ["Ultima Weapon",255,"P",31,111,"w"],
  ["Masamune",207,"P",191,63,"w"],
  ["Elixer",111,"w",111,111,"w"],
  ["Dark Matter",207,"w",63,207,"w"],
  ["Ribbon",15,"w",207,255,"w"],
  ["Tiger Paw Racket",15,"P",15,31,"w"],
  ["Save The Queen",127,"P",63,15,"w"],
  ["Genji",15,"P",111,175,"w"],
  ["Mythril Sword",47,"P",15,15,"w"],
  ["Blue Narciss",143,"P",159,31,"s"],
  ["Hilde Garde 3",111,"P",63,31,"s"],
  ["Invincible",191,"P",159,207,"s"],
  ["Cargo Ship",47,"P",111,15,"s"],
  ["Hilda Garde 1",111,"P",79,15,"s"],
  ["Red Rose",143,"P",31,159,"s"],
  ["Theater Ship",47,"P",111,31,"s"],
  ["Viltgance",239,"P",159,47,"s"],
  ["Chocobo",15,"P",15,15,"o"],
  ["Fat Chocobo",31,"P",31,31,"o"],
  ["Mog",15,"M",15,15,"o"],
  ["Frog",15,"P",15,15,"o"],
  ["Oglop",47,"P",47,15,"o"],
  ["Alexandria",15,"P",191,111,"c"],
  ["Lindblum",15,"P",111,191,"c"],
  ["Twin Moons",127,"M",95,95,"u"],
  ["Gargant",47,"P",15,63,"u"],
  ["Namingway",127,"M",127,127,"u"],
  ["Boko The Chocobo",143,"P",127,127,"u"],
  ["Airship",143,"P",127,127,"u"]
]

export const challengers = {
  "0":{"name":"Zidane","cards":[],"img":"images/Zidane.JPG","rating":5},
  "1":{"name":"Vivi","cards":[],"img":"images/Vivi.JPG","rating":5},
  "2":{"name":"Garnet","cards":[],"img":"images/Garnet.JPG","rating":4},
  "3":{"name":"Steiner","cards":[],"img":"images/Steiner.JPG","rating":4},
  "4":{"name":"Freya","cards":[],"img":"images/Freya.JPG","rating":4},
  "5":{"name":"Amarant","cards":[],"img":"images/Amarant.JPG","rating":4},
  "6":{"name":"Quina","cards":[],"img":"images/Quina.JPG","rating":4},
  "7":{"name":"Eiko","cards":[],"img":"images/Eiko.JPG","rating":4},
  "8":{"name":"Thorn","cards":[],"img":"images/Thorn.JPG","rating":3},
  "9":{"name":"Zorn","cards":[],"img":"images/Zorn.JPG","rating":3},
  "10":{"name":"Queen Brahne","cards":[],"img":"images/QueenBrahne.JPG","rating":1},
  "11":{"name":"Kuja","cards":[],"img":"images/Kuja.JPG","rating":5},
  "12":{"name":"Beatrix","cards":[],"img":"images/Beatrix.JPG","rating":3},
  "13":{"name":"Blank","cards":[],"img":"images/Blank.JPG","rating":3},
  "14":{"name":"Cinna","cards":[],"img":"images/Cinna.JPG","rating":3},
  "15":{"name":"Baku","cards":[],"img":"images/Baku.JPG","rating":3},
  "16":{"name":"Marcus","cards":[],"img":"images/Marcus.JPG","rating":3},
  "17":{"name":"Mog","cards":[],"img":"images/Mog.JPG","rating":2},
  "18":{"name":"Fat Chocobo","cards":[],"img":"images/FatChocobo.JPG","rating":2}
}
