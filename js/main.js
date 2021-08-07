import Player from './Player.js'
// import Card from './Card.js'
// import CardStore from './CardStore.js'
// import {
//   getValue,
//   getWeighted,
// } from './utils/utils.js'

window.player = new Player()
console.log(`${Object.keys(player.collection)}`)
// window.test = new Card(75)
// console.log(test)
// console.log(test.value)
// console.log(test.name)
// console.log(test.arrows)
// console.log(test.type)
// console.log(test.attack)
// console.log(test.getDefense(test.type))
// console.log(`${test}`)
// window.copyCard = new Card(`${test}`)
// window.test1 = new Card()
// let store = new CardStore(75)
// store.card = test
// store.card = copyCard
// console.log(`${store.peek}`)
// console.log(`${store}`)
// var Tetra = {
//   //Arrays to Hold persistent Objects
//   gameCards: [],
//   names: [],
//   area: [],
//   game: '',
//   opponent: '',
//   //Object templates
//   //Play Area
//   PlayArea: function(){
//     this.area = [];
//     var count = 15,
//     blocks = Math.floor(getValue(0,7));
//     while(true){
//       if(blocks > 0){
//         var temp = Math.floor(getValue(0,16));
//         if(!this.area[temp]){
//           this.area[temp] = true;
//           blocks--;
//         }
//       }
//       else{
//         if(!this.area[count]){
//           this.area[count] = false;
//         }
//         count--;
//       }
//       if(count < 0){break;}
//     }
//   },
//   //Function Begin
//   //Start Here
//   init: function(where){
//     this.loadStyles('css/tetra.css');
//     this.loadScript('http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js',function(){
//       Tetra.loadScript('js/cardList.js',function () {
//         Tetra.buildGameArea(where);
//       });
//     });
//   },
//   //Menu Functionality
//   setMenuClicks: function(){
//     var buttons = document.querySelectorAll('.menuButton');
//     buttons[0].addEventListener('click',function(event){
//       Tetra.startNewGame();
//     });
//     buttons[1].addEventListener('click',function(event){
//       Tetra.continueGame();
//     });
//     buttons[2].addEventListener('click',function(event){
//       Tetra.loadOptionsMenu();
//     });
//   },
//   //Main Menu Functions
//   startNewGame: function(){
//     this.createStartCards();
//     this.loadChallengers();
//   },
//   continueGame: function(){
//     this.loadPlayerCards();
//     this.loadChallengers();
//   },
//   loadOptionsMenu: function(){
//     alert('Options');
//     var tempCards = [];
//     if(localStorage.playerCards){
//       delete localStorage.playerCards;
//     }
//     for(i = 0; i < 100;i++){
//       tempCards.push(new this.Card(i+1));
//     }
//     for(i = 0;i < 100;i++){
//       this.collection[i] = new this.CardStore(i+1);
//     }
//     for(i = 0;i < this.collection.length;i++){
//       if(tempCards[i]){
//         var type = tempCards[i].num;
//         this.collection[type-1].cards.push(tempCards[i]);
//       }
//     }
//     localStorage.playerCards = JSON.stringify(this.collection);
//     this.loadChallengers();
//   },
//   //New Game Function
//   createStartCards: function(){
//     var tempCards = [];
//     if(localStorage.playerCards){
//       delete localStorage.playerCards;
//     }
//     for(i = 0; i < 5;i++){
//       tempCards.push(new this.Card());
//     }
//     for(i = 0;i < 100;i++){
//       this.collection[i] = new this.CardStore(i+1);
//     }
//     for(i = 0;i < this.collection.length;i++){
//       if(tempCards[i]){
//         var type = tempCards[i].num;
//         this.collection[type-1].cards.push(tempCards[i]);
//       }
//     }
//     localStorage.playerCards = JSON.stringify(this.collection);
//   },
//   //Continue Function
//   loadPlayerCards: function(){
//     localStorage.playerCards ? this.collection = JSON.parse(localStorage.playerCards) : this.startNewGame();
//   },
//   setChallengers: function(){
//     Array.prototype.forEach.call(document.querySelectorAll('.challenge'),function(e){
//       e.addEventListener('click',function(){
//         var who = this.className;
//         who = who.replace('challenge ','');
//         console.log(who);
//         Tetra.opponent = who;
//         Tetra.loadCardSelectionScreen();
//       });
//     });
//   },
//   //Random Util Functions To be Sorted But needed to get going right now
//   fillPlayerInfo: function(){
//     if(localStorage.playerStats){
//       Tetra.playerStats = JSON.parse(localStorage.playerStats);
//     }
//     else{
//       Tetra.playerStats.wins = 0;
//       Tetra.playerStats.losses = 0;
//       Tetra.playerStats.draws = 0;
//     }
//     for(var stat in Tetra.playerStats) {
//        if (Tetra.playerStats.hasOwnProperty(stat)) {
//          $('.'+stat).children().html(Tetra.playerStats[stat]+"&nbsp;");
//        }
//     }
//     $('.cCount').children().text(Tetra.countCards());
//     $('.type').children().text(Tetra.countTypes());
//   },
//   countCards: function(){
//     var count = 0,
//       i = 0;
//     for(i;i < 100;i++){
//       count += this.collection[i].cards.length;
//     }
//     return count;
//   },
//   countTypes: function(){
//     var count = 0,
//       i = 0;
//     for(i;i < 100;i++){
//       if(this.collection[i].cards.length > 0){
//         count++;
//       }
//     }
//     return count;
//   },
//   checkForGameEnd: function(fights){
//     var p1 = parseInt($('.p1').attr('data-score'),10),
//       p2 = parseInt($('.p2').attr('data-score'),10),
//       temp,
//       tempCards = [];
//     fights = fights?fights:[];
//     if((p1+p2) === 10 && fights.length === 0){
//       setTimeout(function(){
//         tempCards = Tetra.gameCards.splice(5,5);
//         Tetra.clearBoard();
//         if(p1>p2){
//           Tetra.playerStats.wins += 1;
//           $('.blue').each(function(){
//             if($(this).attr('data-where') > 4){
//               $(this).addClass('hand').click(function(){
//                 temp = tempCards.slice($(this).attr('data-where')-5,$(this).attr('data-where')-4);
//                 temp = temp[0];
//                 Tetra.collection[temp.num-1].cards.push(temp);
//                 $(this).unbind().css({left:'50px',border:'1px solid rgba(0,0,0,0)',background:'rgba(0,0,0,0)'});
//                 var card = this;
//                 setTimeout(function(){$(card).remove();},200);
//                 Tetra.cleanUp();
//               });
//             }
//           });
//           if(p1 === 10){
//             setTimeout(function(){
//             for(var i = 5;i < 10;i++){
//               var card = $('.blue')[i];
//               $(card).trigger('click');
//             }
//             },400);
//           }
//         }
//         if(p1<p2){
//           Tetra.playerStats.losses += 1;
//           $('.red').each(function(){
//             if($(this).attr('data-where') < 4){
//               $(this).addClass('hand').click(function(){
//                 temp = Tetra.gameCards.splice($(this).attr('data-where'),1);
//                 temp = temp[0];
//                 $(this).unbind().css({left:'-50px',border:'1px solid rgba(0,0,0,0)',background:'rgba(0,0,0,0)'});
//                 var card = this;
//                 setTimeout(function(){$(card).remove();},200);
//                 Tetra.cleanUp();
//               });
//             }
//           });
//           if(p2 === 10){
//             setTimeout(function(){
//             for(var i = 0;i < 5;i++){
//               var card = $('.red')[i];
//               Tetra.gameCards.shift();
//               $(card).unbind().css({left:'-50px',border:'1px solid rgba(0,0,0,0)',background:'rgba(0,0,0,0)'});
//               setTimeout(function(){$(card).remove();},200);
//               Tetra.cleanUp();
//             }
//             },400);
//           }
//         }
//         if(p1 === p2){
//           Tetra.playerStats.draws += 1;
//         }
//       },1000);
//     }
//     else {
//       return;
//     }
//   },
//   cleanUp: function(){
//     if(gameCards.length > 0){
//       gameCards = gameCards.splice(0,5);
//       while(true){
//         collection[gameCards[0].num-1].cards.push(gameCards.shift());
//         if(gameCards.length === 0){
//           break;
//         }
//       }
//     }
//     // alert('saved');
//     // localStorage.playerStats = JSON.stringify(playerStats);
//     // localStorage.playerCards = JSON.stringify(collection);
//   },
//   clearBoard: function(){
//     $('.card').attr('data-local','hand').each(function(){
//       temp = $(this).attr('class');
//       temp = temp.split(' ');
//       for(var i = 0;i < temp.length;i++){
//         if(temp[i].match(/top-\d/)){
//           $(this).attr('data-local',temp[i]);
//         }
//       }
//       temp = 'card ';
//       temp += $(this).attr('data-local');
//       temp = ($(this).attr('data-player') === '1')?temp + ' blue':temp + ' red';
//       $(this).unbind('click').removeClass().addClass(temp);
//     });
//     temp = document.createElement('div');
//     $('.fieldBox').empty().append($(temp).addClass('field').css('border','1px solid transparent'));
//   },
//   rendercardSelector: function(where){
//     $('.hover').removeClass('hover');
//     $(where).addClass('hover');
//     if(where.cards){
//       if(where.cards.length === 0){
//         where.cards.push(0);
//       }
//     }
//     if(where.className){
//       where = where.className;
//       where = where.split(' ');
//       where = where[1].replace('C','');
//       where = Tetra.collection[where];
//     }
//     $('.cardInfo').load('js/templates/cardInfo.html', function () {
//       if(where.cards[0] !== 0){
//         for(i = (where.cards.length <= 5)?where.cards.length-1:4;i > -1;i--){
//           temp = new Tetra.HtmlCard(where.cards[i]);
//           $('.select').append($(temp).removeClass('off').addClass('faceUp blue '+(i+1)).css({'left':i*10+45+'px','top':'5px'}));
//           Tetra.isFaceUp(temp);
//         }
//       }
//       else{
//          where.cards.pop();
//          $('.deleteButton').addClass('clear');
//       }
//       if(where.cards.length <= 1){
//         $('.selector, .place').addClass('clear');
//       }
//       $('.max').text(where.cards.length);
//       $('.cur').text(where.shifted);
//       Tetra.setSelector(where);
//     });
//     $('.tempHand').empty();
//     for(i = 0;i < Tetra.gameCards.length;i++){
//       temp = new Tetra.HtmlCard(Tetra.gameCards[i]);
//       $('.tempHand').append($(temp).removeClass('off template').addClass('faceUp blue tempC '+i).css('left',(50+(105*i))+'px'));
//       Tetra.isFaceUp(temp);
//     }
//   },
//   isFaceUp: function(card){
//     if($(card).hasClass('faceUp')){
//       $(card).children().each(function(){
//         if($(this).hasClass('on')||$(this).hasClass('value')||$(this).hasClass('name')){
//           $(this).removeClass('off');
//         }
//       });
//     }
//     else{
//       $(card).children().each(function(){
//         $(this).addClass('off');
//       });
//     }
//   },
//   checkForAttack: function(card){
//     var arrows = this.gameCards[$(card).attr('data-where')].arrws,
//       where = $(card).attr('data-local'),
//       check = this.getSurround(where),
//       fights = [],
//       captures = [],
//       i = 0;
//     for(i = 0;i < arrows.length;i++){
//       if(arrows[i]){
//         if(!this.isEmpty(check[i])){
//           if(this.isFight(check[i],where,$(card).attr('data-player'))){
//             fights[i] = i;
//           }
//           else if($('.'+check[i]).attr('data-player') !== $(card).attr('data-player')){
//             captures[i] = i;
//           }
//         }
//       }
//     }
//     if(fights.length > 0){
//       var count = 0;
//       for(i = 0;i < fights.length;i++){
//         if(fights[i] !== undefined){
//           count++;
//         }
//       }
//       if(count > 1){
//         for(i = 0;i < fights.length;i++){
//           if(fights[i] !== undefined){
//             $('.'+check[i]).addClass('fight')
//             .unbind('click').click(function(event){
//               if($(this).hasClass('fight')){
//                 $('.stack').children().each(function(){
//                   $(this).removeClass('fight');
//                 });
//                 Tetra.fight(this,card);
//               }
//             });
//           }
//         }
//       }
//       else{
//         for(i = 0;i < fights.length;i++){
//           if(fights[i] !== undefined){
//             this.fight($('.'+check[fights[i]]),card);
//           }
//         }
//       }
//     }
//     else if(fights.length === 0){
//       for(i = 0;i < captures.length;i++){
//         if(captures[i] !== undefined){
//           this.capture($('.'+check[i]),card);
//         }
//       }
//     }
//     setTimeout(function(){Tetra.getScores(fights);},1001);
//   },
//   isEmpty: function(location){
//     var empty = true;
//     if($('.'+location)[0]){
//       empty = false;
//     }
//     return empty;
//   },
//   isFight: function(card,threat,owner){
//     var me = $('.'+card),
//       arrows = this.gameCards[me.attr('data-where')].arrws,
//       check = this.getSurround(me.attr('data-local')),
//       fight = false,
//       i = 0;
//     for(i = 0;i < arrows.length;i++){
//       if(arrows[i]&&check[i] === threat&&me.attr('data-player') !== owner){
//         fight = true;
//       }
//     }
//     return fight;
//   },
//   fight: function(attacked,attacker){
//     var attckr = this.gameCards[$(attacker).attr('data-where')],
//       attckd = this.gameCards[$(attacked).attr('data-where')],
//       i = 0,
//       attack = 0,
//       defense = 0,
//       type = attckr.type;
//     setTimeout(function(){
//       switch(type){
//         case 'P':
//         case 'M':
//         case 'X':   attack = attckr.atk; break;
//         case 'A':   attack = largest(attckr); break;
//       }
//       switch(type){
//         case 'P':   defense = attckd.pdef; break;
//         case 'M':   defense = attckd.mdef; break;
//         case 'X':   defense = smaller(attckd); break;
//         case 'A':   defense = smallest(attckd); break;
//       }
//       attack -= Math.floor(getValue(0,attack+1));
//       defense -= Math.floor(getValue(0,defense+1));
//       console.log('Attack: '+attack+'\nDefense: '+defense);
//       if(attack > defense){
//         Tetra.capture(attacked,attacker,0);
//         Tetra.checkCombo(attacked);
//         Tetra.checkForAttack(attacker);
//       }
//       else{
//          Tetra.capture(attacker,attacked,0);
//          Tetra.checkCombo(attacker);
//       }
//     },1000);
//   },
//   checkCombo: function(card,recheck){
//     var arrows = this.gameCards[$(card).attr('data-where')].arrws,
//       where = $(card).attr('data-local'),
//       check = this.getSurround(where),
//       i = 0;
//     for(i = 0;i < arrows.length;i++){
//       if(arrows[i]){
//         if(!this.isEmpty(check[i])){
//           this.capture($('.'+check[i]),card);
//         }
//       }
//     }
//   },
//   capture: function(loss,gain,time){
//     loss = $(loss);
//     gain = $(gain);
//     loss.attr('data-player',gain.attr('data-player'));
//     time = time === 0?time:1000;
//     setTimeout(function(){
//       if(gain.hasClass('blue')){
//         loss.removeClass('red').addClass('blue');
//       }
//       else if(gain.hasClass('red')){
//         loss.removeClass('blue').addClass('red');
//       }
//     },time);
//   },
//   getSurround: function(center){
//     var i = 0,
//       j = 0,
//       row = center.charAt(0),
//       col = center.charAt(1),
//       blocks = $('.block');
//       window.group = [];
//      switch(row){
//       case 'a':   group[i++] = false; group[i++] = false; group[i++] = row; group[i++] = 'b';
//             group[i++] = 'b'; group[i++] = 'b';group[i++] = row; group[i++] = false; break;
//       case 'b':   group[i++] = 'a'; group[i++] = 'a'; group[i++] = row; group[i++] = 'c';
//             group[i++] = 'c'; group[i++] = 'c'; group[i++] = row; group[i++] = 'a'; break;
//       case 'c':   group[i++] = 'b'; group[i++] = 'b'; group[i++] = row; group[i++] = 'd';
//             group[i++] = 'd'; group[i++] = 'd'; group[i++] = row; group[i++] = 'b'; break;
//       case 'd':   group[i++] = 'c'; group[i++] = 'c'; group[i++] = row; group[i++] = false;
//             group[i++] = false; group[i++] = false; group[i++] = row; group[i++] = 'c'; break;
//     }
//     i = 0;
//     switch(col){
//       case '1':   group[i++] += col; group[i++] += '2'; group[i++] += '2'; group[i++] += '2';
//             group[i++] += col; group[i++] = false; group[i++] = false; group[i++] = false; break;
//       case '2':   group[i++] += col; group[i++] += '3'; group[i++] += '3'; group[i++] += '3';
//             group[i++] += col; group[i++] += '1'; group[i++] += '1'; group[i++] += '1'; break;
//       case '3':   group[i++] += col; group[i++] += '4'; group[i++] += '4'; group[i++] += '4';
//             group[i++] += col; group[i++] += '2'; group[i++] += '2'; group[i++] += '2'; break;
//       case '4':   group[i++] += col; group[i++] = false; group[i++] = false; group[i++] = false;
//             group[i++] += col; group[i++] += '3'; group[i++] += '3'; group[i++] += '3'; break;
//     }
//     for(i = 0;i < group.length;i++){
//       var patt = /false/;
//       if(group[i]){
//         if(group[i].match(patt)){
//           group[i] = false;
//         }
//       }
//     }
//     for(i = 0;i < blocks.length;i++){
//       for(j = 0;j < group.length;j++){
//         if($(blocks[i]).attr('data-local') === group[j]){
//           group[j] = false;
//         }
//       }
//     }
//     return group;
//   }
// };
