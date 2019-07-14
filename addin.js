const remote = require('electron').remote
var info = require('electron').remote.getGlobal('info');

function go(loc) {
    document.getElementById('iframe').src = loc;
    if (loc == 'https://sytespace.net/') {
      info.pagename = 'Homepage';
      info.pageurl = loc;
    }
    if (loc == 'https://sytespace.net/cart.php') {
      info.pagename = 'Cart';
      info.pageurl = loc;
    }
    if (loc == 'https://sytespace.net/submitticket.php') {
      info.pagename = 'Ticket Area';
      info.pageurl = loc;
    }
    if (loc == 'https://sytespace.net/clientarea.php?action=details') {
      info.pagename = 'User Details';
      info.pageurl = loc;
    }
  }

function shut() {
  console.log('Here!')
  let w = remote.getCurrentWindow()
  w.close()
}

function minimize() {
  var window = remote.getCurrentWindow();
  if (!window.isMaximized()) {
      document.getElementById("maxmin").className = "fas fa-compress";
      window.maximize();          
  } else {
      document.getElementById("maxmin").className = "fas fa-arrows-alt";
      window.unmaximize();
  }
}