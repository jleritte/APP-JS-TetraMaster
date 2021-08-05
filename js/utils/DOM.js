  //Loads Style in
  loadStyles: function(url){
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    var entry = document.getElementsByTagName('title')[0];
    entry.parentNode.insertBefore(link, entry);
  },
  //Loads Favicon
  loadFavicon: function(){
    var icon = document.createElement('link');
    icon.rel = 'shortcut icon';
    icon.href = 'images/favicon.ico';
    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(icon, entry);
  },
