const data = ['a', 'b', 'c'];

Luigi.setConfig({
  communication: {
    customMessagesListeners: {
      localmessage: function (customMessage) {
        if (customMessage.message.length > 0) {
          console.log(customMessage.message);
          data.push(customMessage.message);
        }
        Luigi.customMessages().sendToAll({
          id: 'aye',
          data: data,
        });
      },
    },
  },
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/sampleapp.html#/home',
        children: [
          {
            icon: 'paper-plane',
            pathSegment: 'empty',
            label: 'TicTacToe',
            viewUrl: 'http://localhost:4001/',
          },
          {
            icon: 'paper-plane',
            pathSegment: 'home',
            label: 'Login Form',
            viewUrl: 'http://localhost:5173/',
          },
        ],
      },
    ],
  },
  settings: {
    header: { title: 'Andy Portfolio' },
    responsiveNavigation: 'simpleMobileOnly',
  },
});
