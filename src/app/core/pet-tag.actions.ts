import { Action } from '@ngrx/store';
import { PetTag } from './pet-tag.model';

export const SELECT_SHAPE   =  '[PetTag] SELECT_SHAPE';
export const SELECT_FONT    =  '[PetTag] SELECT_FONT';
export const ADD_TEXT       =  '[PetTag] ADD_TEXT';
export const TOGGLE_CLIP    =  '[PetTag] TOGGLE_CLIP';
export const TOGGLE_GEMS    =  '[PetTag] TOGGLE_GEMS';
export const COMPLETE       =  '[PetTag] COMPLETE';
export const RESET          =  '[PetTag] RESET';

export class SelectShape implements Action {
  readonly type = SELECT_SHAPE;

  constructor(public payload: any = null) { }
}

export class SelectFont implements Action {
  readonly type = SELECT_FONT;

  constructor(public payload: any = null) { }
}

export class AddText implements Action {
  readonly type = ADD_TEXT;

  constructor(public payload: any = null) { }
}

export class ToggleClip implements Action {
  readonly type = TOGGLE_CLIP;

  constructor(public payload: any = null) { }
}

export class ToggleGems implements Action {
  readonly type = TOGGLE_GEMS;

  constructor(public payload: any = null) { }
}

export class Complete implements Action {
  readonly type = COMPLETE;

  constructor(public payload: any = null) { }
}

export class Reset implements Action {
  readonly type = RESET;

  constructor(public payload: any = null) { }
}

export type Actions
  = SelectFont
  | AddText
  | ToggleClip
  | ToggleGems
  | Complete
  | Reset;
