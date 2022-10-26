Luigi.setConfig({
  communication: {
    customMessagesListeners: {
      localmessage: (customMessage) => {
        console.log(customMessage.message);
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
            loadingIndicator: {
              enabled: false,
            },
            viewUrl: 'http://localhost:4001/',
          },
          {
            icon: 'paper-plane',
            pathSegment: 'home',
            label: 'Login Form',
            loadingIndicator: {
              enabled: false,
            },
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
// setInterval(() => {
//   let id = Luigi.elements().getMicrofrontends().map(data => {
//     return data.id;
//   })[0];

//   Luigi.customMessages().send(id, {
//     id: 'myapp.project-updated',
//     dataField1: 'here goes some data',
//     moreData: 'here goes some more',
//   });
// }, [1000]);

  Luigi.customMessages().sendToAll({
    id: 'myapp.project-updated',
    dataField1: 'here goes some data',
    moreData: 'here goes some more',
  });

