const view = {}
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case 'welcomeScreen' :
      document.getElementById('app')
      .innerHTML = components.welcomeScreen
    break;
    case 'loginScreen' :
    // in ra man login
    break;
    case 'registerScreen' :
      document.getElementById('app')
      .innerHTML = components.registerScreen
    break;
  }
}