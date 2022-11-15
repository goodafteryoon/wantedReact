import React from "react";
import { Provider, useSelector, useDispatch } from "react"; // 사용할 3가지 + 1가지(스토어)
import { createStore } from "redux"; // 스토어 = 저장소

// 액션 타입 정의

const LoginOpen = "ModalStore/LoginOpen";
const JoinOpen = "ModalStore/JoinOpen";
const ModalClose = "ModalStore/ModalClose";
const SearchOpen = "ModalStore/SearchOpen";
const SearchClose = "ModalStore/SearchClose";

// 액션 생성 함수

export const loginOpen = () => ({ type: LoginOpen });
export const joinOpen = () => ({ type: JoinOpen });
export const modalClose = () => ({ type: ModalClose });
export const searchOpen = () => ({ type: SearchOpen });
export const searchClose = () => ({ type: SearchClose });

// 초기상태 및 리듀서 함수

const initialStates = {
  modalOpen: 0,
  searchFilter: false,
};

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case LoginOpen:
      return { ...state, modalOpen: 1 };
    case JoinOpen:
      return { ...state, modalOpen: 2 };
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

export default reducer;
