import OpenIdConnect from '@luigi-project/plugin-auth-oidc';

const myData = () => {
  Luigi.setConfig({
    // auth: {
    //   use: 'openIdConnect',
    //   openIdConnect: {
    //     idpProvider: OpenIdConnect,
    //     authority: 'https://localhost:3000.com',
    //     client_id: 'client',
    //     scope: 'audience:server:client_id:client openID profile email groups',
    //     redirect_uri: '',
    //     automaticSilentRenew: true,
    //     accessTokenExpiringNotificationTime: 60,
    //   },
    //   disableAutoLogin: false,
    // },
    communication: {
      customMessagesListeners: {
        localmessage: function (customMessage) {
          if (Object.keys(customMessage.message).length > 0) {
            localStorage.setItem('StorageData', JSON.stringify(customMessage.message));
            console.log(JSON.parse(localStorage.getItem('StorageData')));
            console.log(`Local Storage Data: ${localStorage.getItem('StorageData')}`);
          }
          Luigi.customMessages().sendToAll({
            id: 'aye',
            data: JSON.parse(localStorage.getItem('StorageData')),
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
};

myData();
