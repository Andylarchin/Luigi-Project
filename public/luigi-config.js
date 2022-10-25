Luigi.setConfig({
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
