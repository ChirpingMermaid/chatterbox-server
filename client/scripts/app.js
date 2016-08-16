var app = {

  //TODO: The current 'handleUsernameClick' function just toggles the class 'friend'
  //to all messages sent by the user
  server: 'http://127.0.0.1:3000/classes/messages',
  username: 'anonymous',
  roomname: 'lobby',

  init: function() {
    // Get username
    app.username = window.location.search.substr(10);

    // Cache jQuery selectors
    app.$message = $('#message');
    app.$chats = $('#chats');
    app.$roomSelect = $('#roomSelect');
    app.$send = $('#send');
  },
  
}