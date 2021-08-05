 //Parent Div
  buildGameArea: function(where){
    where = !where?'body':'.'+where;
    if(where === 'body'){
      document.querySelector('title').innerHTML = 'Tetra Masters';
      this.loadFavicon();
    }
    var div = document.createElement('div');
    div.className = 'game';
    document.querySelector(where).appendChild(div);
    Tetra.game = div;
    this.loadStartScreen();
  },
  //Start Screen\Main Menu
  loadStartScreen: function(){
    Tetra.game.className = 'game main';
    Tetra.game.innerHTML = this.mainScreen.join('\n');//require('templates').mainMenu.join('\n');
    Tetra.setMenuClicks();
  },
   //Game Start Functions
  loadChallengers: function(){
    var list;
    this.names = [];
    Tetra.game.className = 'game challengers';
    Tetra.game.innerHTML = this.challengeScreen.join('\n');//require('templates').challengeScreen.join('\n');
    list = document.querySelector('.challengeList');
    for(i = 0;i < 10;i++){
      var li = document.createElement('li'),
          who = new Tetra.HtmlChallenger(),
          temp = document.createElement('span');
      li.className = 'challenge ' + who.name;
      li.appendChild(who.img);
      temp.innerHTML = who.name + '<br/>' + who.rating;
      li.appendChild(temp);
      list.appendChild(li);
    }
    Tetra.setButtons();
    Tetra.setChallengers();
  },
  loadCardSelectionScreen: function(){
    Tetra.game.className = 'game cards';
    Tetra.game.innerHTML = this.cardSelectionScreen.join('\n');//require('templates').cardSelectionScreen.join('\n');
    var table = document.querySelector('table.grid').firstElementChild,i,j;
    for(i = 0;i < 10;i++){
      table.innerHTML += this.cardSelectRow.join('\n');//require('templates').cardSelectRow.join('\n');
      var row = table.lastElementChild;
      for(j = 0;j < 10;j++){
        var cell = this.cardSelectCell;//require('templates').cardSelectCell.join('');
        cell.splice(1,1,'C'+parseInt(''+j+i));
        row.innerHTML += cell.join('');
      }
    }
    Tetra.collection.forEach(function(e,i){
      if(e.cards.length > 0){
        var type = e.cards[0].icon, cell = document.querySelector('.C'+i);
        cell.className += ' full icon-'+type;
        cell.firstElementChild.className = '';
        cell.firstElementChild.innerHTML = e.cards.length;
        if(e.cards.length == 1){
          cell.firstElementChild.className = "clear";
        }
      }
    });
    Tetra.fillPlayerInfo();
    Tetra.setButtons();
    Tetra.setSelectGrid();
    var temp = document.createElement('template');
    temp.className = 'card';
    temp.innerHTML = this.card.join('\n');//require('templates').card.join('\n');
    Tetra.game.appendChild(temp);
  },
  setSelectGrid: function(){
    Array.prototype.forEach.call(document.querySelectorAll('.full'),function(e){
      e.addEventListener('click',function(){
        Tetra.rendercardSelector(this);
      });
    });
  },
  setSelector: function(where){
    var temp;
    //TODO: Workout click events
    $('.selector').unbind('click').click(function(){
      if($(this).hasClass('left')){
        temp = where.cards.shift();
        where.cards.push(temp);
        where.shifted++;
        if(where.shifted > where.cards.length){
          where.shifted = 1;
        }
      }
      else{
        temp = where.cards.pop();
        where.cards.unshift(temp);
        where.shifted--;
        if(where.shifted < 1){
          where.shifted = where.cards.length;
        }
      }
      Tetra.rendercardSelector(where);
    });
    $('.card.1').unbind('click').click(function(){
      $(this).unbind('click');
      if(Tetra.gameCards.length <= 4){
        switch(Tetra.gameCards.length){
          case 0: $(this).css({left:'-454px',top:'325px'});break;
          case 1: $(this).css({left:'-349px',top:'325px'});break;
          case 2: $(this).css({left:'-244px',top:'325px'});break;
          case 3: $(this).css({left:'-139px',top:'325px'});break;
          case 4: $(this).css({left:'-34px',top:'325px'});break;
        }
        Tetra.gameCards.push(where.cards.shift());
        if(where.shifted > where.cards.length){
          where.shifted = 1;
        }
        setTimeout(function(){Tetra.rendercardSelector(where);},250);
        if(Tetra.gameCards.length === 5){
          temp = confirm('Ready to play?');
          temp?Tetra.buildPlayArea():function(){return;};
        }
      }
      else{
        alert('Hand is Full!!');
        temp = confirm('Ready to play?');
        temp?Tetra.buildPlayArea():function(){return};
      }
    });
    $('.tempC').unbind('click').click(function(){
      temp = $(this).attr('class');
      temp = temp.split(' ');
      temp = temp[temp.length -1];
      temp = Tetra.gameCards.splice(temp,1);
      temp = temp[0];
      Tetra.collection[temp.num-1].cards.push(temp);
      $(this).css({top:'-150px',border:'1px solid rgba(0,0,0,0)',background:'transparent'});
      setTimeout(function(){Tetra.rendercardSelector(where);},150);
    });
  },
  buildPlayArea: function(){
    Tetra.game.className = 'game Playing';
    Tetra.game.innerHTML = this.playField.join('\n');//require('templates').playField.join('\n');
    var temp = document.createElement('template');//rquire('templates').card.join('\n');
    temp.className = 'card';
    temp.innerHTML = this.card.join('\n')
    Tetra.game.appendChild(temp);
    Tetra.renderCards();
  },
  renderCards: function(){
    var i = 0,
      cards = this.gameCards;
    for(i = 0; i < 5;i++){
      cards.push(new this.Card());
    }
    for(i = 0; i < 10;i++){
      var temp;
      if(i < 5){
        temp = this.HtmlCard(this.gameCards[i],i);
        $(temp).removeClass('off template').addClass('hand faceUp blue top-'+(4-i)).attr('data-player',1);
        $($('.stack')[0]).append($(temp));
        this.isFaceUp(temp);
      }
      else{
        temp = this.HtmlCard(cards[i],i);
        $(temp).removeClass('off template').addClass('back top-'+(9-i)).attr('data-player',2);
        $($('.stack')[1]).append($(temp));
      }
    }
    this.setCards();
  },
  setCards: function(){
    $('.card').unbind('click').click(function(){
      var location = Tetra.getLocation(this);
      if(!$(this).hasClass('back')){
        if($('.selected').length===0||$(this).hasClass('selected')){
          if($(this).hasClass('played')||$(this).hasClass('selected')){
            $(this).removeClass('played selected r hand '+location).attr('data-local','hand')
              .addClass('hand');
          }
          else{
            $(this).addClass('selected')
              .removeClass('hand');
          }
        }
      }
      else{
        if($('.temp').length===0||$(this).hasClass('temp')){
          if($(this).hasClass('played')||$(this).hasClass('temp')){
            $(this).removeClass('faceUp red played temp l '+location).attr('data-local','hand');
            Tetra.isFaceUp(this);
          }
          else{
            $(this).addClass('temp');
          }
        }
      }
    });
    this.renderGrid();
  },
  renderGrid: function(){
    this.area = new this.PlayArea();
    $('.field').find('td').each(function (i) {
      if (Tetra.area.area[i]) {
        $(this).addClass('block');
      }
    });
    this.setGrid();
    this.getScores();
    this.setButtons();
  },
  setGrid: function(){
    $('.field td').click(function(event){
      var card;
      if($('.selected')[0]){
        card = $('.selected');
      }
      else if($('.temp')[0]){
        card = $('.temp');
      }
      var location = Tetra.getLocation(this);
      if($(this).hasClass('block')){
        card.click();
      }
      else if(card.hasClass('temp')){
        card.removeClass('temp').addClass('played red faceUp l '+location).attr('data-local',location);
        Tetra.isFaceUp(card);
        Tetra.checkForAttack(card);
      }
      else{
        card.removeClass('selected').addClass('played r '+location).attr('data-local',location);
        Tetra.checkForAttack(card);
      }
    });
  },
  getLocation: function(grid){
    return $(grid).attr('data-local');
  },
  getScores: function(fights){
    var p1 = 0,
      p2 = 0,
      i = 0,
      cards = $('.stack').children();
    for(i = 0;i < cards.length;i++){
      if($(cards[i]).hasClass('blue')&&$(cards[i]).hasClass('played')){
        p1++;
      }
      else if($(cards[i]).hasClass('red')&&$(cards[i]).hasClass('played')){
        p2++;
      }
    }
    $('.p1').attr('data-score',p1).html(p1);
    $('.p2').attr('data-score',p2).html(p2);
    Tetra.checkForGameEnd(fights);
  },
  //Buttons
  setButtons: function(){
    $('.menu').click(function(event){
      Tetra.loadStartScreen();
    });
    $('.reload').click(function(event){
      var classes = $('.buttons').parent().attr('class');
      classes = classes.split(' ');
      switch(classes[1]){
        case 'challengers': Tetra.loadChallengers();break;
        case 'cards':       Tetra.loadCardSelectionScreen();break;
        case 'Playing':     Tetra.buildPlayArea();break;
        default:            Tetra.loadStartScreen();
      }
      //location.reload();
    });
  },
  HtmlCard: function(card,index){
    cardDiv = document.querySelector('template.card').content.children[0].cloneNode(true);
    Array.prototype.forEach.call(cardDiv.children,function(e,i){
      if(card.arrws[i]){
        e.className += ' arrow on';
      }
      if(e.className.match('name')){
        e.innerHTML = card.name;
      }
      if(e.className.match('value')){
        e.innerHTML = card.value;
      }
    });
    cardDiv.setAttribute('data-where', index);
    cardDiv.setAttribute('data-local', 'hand');
    return cardDiv;
  },
  //Html Challenger
  HtmlChallenger: function(){
    var j = 0,
      i = Math.floor(Tetra.getValue(0,19)),
      name = Tetra.challengers[i].name;
    for(j = 0;j < Tetra.names.length;j++){
      if(Tetra.names[j] === name){
        i = Math.floor(Tetra.getValue(0,19));
        name = Tetra.challengers[i].name;
        j = -1;
        continue;
      }
    }
    Tetra.names.push(name);
    this.name = name;
    this.img = new Image();
    this.img.src = Tetra.challengers[i].img;
    this.rating = '';
    for(j = 0;j < 5;j++){
      this.rating += (j <= Tetra.challengers[i].rating-1)?'<span class=power>&ofcir;</span>':'<span class=empty>&xodot;</span>';
    }
  },


  //will be moved to templates file
  mainScreen: [
    "<div>",
      "<div class=\"title\">TETRA MASTERS</div>",
      "<div class=\"menuContainer\">",
        "<ul>",
          "<li class=\"menuButton\">NEW GAME</li>",
          "<li class=\"menuButton\">CONTINUE</li>",
          "<li class=\"menuButton\">OPTIONS</li>",
        "</ul>",
      "</div>",
    "</div>"
  ],
  challengeScreen: [
    "<div>",
      "<div class=\"header\">Please Select Opponent</div>",
      "<div class=\"challengerContain\">",
        "<ul class=\"challengeList\">",
        "</ul>",
      "</div>",
      "<div class=\"buttons\">",
        "<ul>",
          "<li class=\"menu\">Menu</li>",
          "<li class=\"reload\">Reload</li>",
        "</ul>",
      "</div>",
    "</div>"
  ],
  cardSelectionScreen: [
    "<div>",
      "<div class=\"gridContain\">",
        "<table class=\"grid\">",
          "<tbody>",
          "</tbody>",
        "</table>",
        "<ul>",
          "<li class=\"cCount\">Stock: <span>0</span></li>",
          "<li class=\"type\">Type: <span>0</span></li>",
        "</ul>",
      "</div>",
      "<div class=\"playerInfo\">",
        "<ul>",
          "<li class=\"collectorLvl\">Collector <span>LV</span>: <span class=\"wld\">1700p</span>",
            "<span class=\"rank\">Beginner</span></li>",
          "<hr />",
          "<li class=\"wins\">Wins:<span class=\"wld\">0 </span></li>",
          "<li class=\"losses\">Losses:<span class=\"wld\">0 </span></li>",
          "<li class=\"draws\">Draws:<span class=\"wld\">0 </span></li>",
        "</ul>",
      "</div>",
      "<div class=\"cardInfo\">",
      "</div>",
      "<div class=\"tempHand\"></div>",
      "<div class=\"buttons\">",
        "<ul>",
          "<li class=\"menu\">Menu</li>",
          "<li class=\"reload\">Reload</li>",
        "</ul>",
      "</div>",
    "</div>"
  ],
  cardSelectRow:[
    "<tr class=\"cardGrid\">",
    "</tr>"
  ],
  cardSelectCell: [
    "<td class=\"cardGrid ",-1,"\">",
      "<div class=\"cardGridcont\"></div>",
    "</td>"
  ],
  card: [
    "<div class=\"card off\" data-where=\"\" data-local=\"hand\">",
      "<div class=\"0 off up\"></div>",
      "<div class=\"1 off up right\"></div>",
      "<div class=\"2 off right\"></div>",
      "<div class=\"3 off down right\"></div>",
      "<div class=\"4 off down\"></div>",
      "<div class=\"5 off down left\"></div>",
      "<div class=\"6 off left\"></div>",
      "<div class=\"7 off up left\"></div>",
      "<div class=\"off value\"></div>",
      "<div class=\"off name\"></div>",
    "</div>"
  ],
  playField: [
    "<div>",
      "<div class=\"score\">",
        "<span class=\"p1\">0</span>",
        "<span class=\"divide\">/</span>",
        "<span class=\"p2\">0</span>",
      "</div>",
      "<div class=\"buttons\">",
        "<ul>",
          "<li class=\"menu\">Menu</li>",
          "<li class=\"reload\">Reload</li>",
        "</ul>",
      "</div>",
      "<div class=\"stack\"></div>",
      "<div class=\"fieldBox\">",
        "<table class=\"field\">",
          "<tr class='a'>",
            "<td data-local='a1'></td>",
            "<td data-local='a2'></td>",
            "<td data-local='a3'></td>",
            "<td data-local='a4'></td>",
          "</tr>",
          "<tr class='b'>",
            "<td data-local='b1'></td>",
            "<td data-local='b2'></td>",
            "<td data-local='b3'></td>",
            "<td data-local='b4'></td>",
          "</tr>",
          "<tr class='c'>",
            "<td data-local='c1'></td>",
            "<td data-local='c2'></td>",
            "<td data-local='c3'></td>",
            "<td data-local='c4'></td>",
          "</tr>",
          "<tr class='d'>",
            "<td data-local='d1'></td>",
            "<td data-local='d2'></td>",
            "<td data-local='d3'></td>",
            "<td data-local='d4'></td>",
          "</tr>",
        "</table>",
      "</div>",
    "<div class=\"stack\"></div>",
    "</div>"
  ]
