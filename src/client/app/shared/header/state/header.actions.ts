import { Action } from '@ngrx/store';

export class HeaderActions {
  static ACTIVATE_SEARCH = 'HEADER:ACTIVATE_SEARCH';
  static CHANGE_SEARCH = 'HEADER:CHANGE_SEARCH';

  static changeSearchActive(searchActive:boolean):Action {
    return {
      type: this.ACTIVATE_SEARCH,
      payload: searchActive
    };
  }

  static changeSearch(search:string):Action {
    return {
      type: this.CHANGE_SEARCH,
      payload: search
    };
  }
}
