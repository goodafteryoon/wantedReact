import React from "react";
import { Provider, useSelector, useDispatch } from "react"; // 사용할 3가지 + 1가지(스토어)
import { createStore } from "redux"; // 스토어 = 저장소

// 액션 타입 정의

const LoginOpen = "modal/LoginOpen";
const JoinOpen = "modal/JoinOpen";
const ModalClose = "modal/ModalClose";
const SearchOpen = "modal/SearchOpen";
const SearchClose = "modal/SearchClose";
const PasswordOpen = "modal/PasswordOpen";

// 액션 생성 함수

export const loginOpen = () => ({ type: LoginOpen });
export const joinOpen = () => ({ type: JoinOpen });
export const modalClose = () => ({ type: ModalClose });
export const passwordOpen = () => ({ type: PasswordOpen });
export const searchOpen = () => ({ type: SearchOpen });
export const searchClose = () => ({ type: SearchClose });

// 초기상태 및 리듀서 함수

const initialStates = {
  modalOpen: 0,
  searchFilter: false,
};

const modal = (state = initialStates, action) => {
  switch (action.type) {
    case LoginOpen:
      return { ...state, modalOpen: 1 };
    case JoinOpen:
      return { ...state, modalOpen: 2 };
    case PasswordOpen:
      return { ...state, modalOpen: 3 };
    case ModalClose:
      return { ...state, modalOpen: 0 };
    case SearchOpen:
      return { ...state, searchFilter: true };
    case SearchClose:
      return { ...state, searchFilter: false };
    default:
      return state;
  }
};

export default modal;
