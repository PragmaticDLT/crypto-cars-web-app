'use strict';

import { action, observable} from 'mobx';

class HomeSceneStore {
  @observable menuOpened = false;

  @action
  toggleMenu = () => {
    this.menuOpened = !this.menuOpened;
  };
}

export default new HomeSceneStore();