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
            pathSegment: 'sample1',
            label: 'Tic Tac Toe',
            icon: 'nutrition-activity',
            viewUrl: '/sampleapp.html#/sample1',
          },
          {
            pathSegment: 'sample2',
            label: 'Login form',
            icon: 'paper-plane',
            viewUrl: '/sampleapp.html#/sample2',
          },
          {
            pathSegment: 'sample3',
            label: 'Register form',
            icon: 'paper-plane',
            viewUrl: '/sampleapp.html#/sample3',
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
