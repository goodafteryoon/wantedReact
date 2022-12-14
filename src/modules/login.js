// 2번 액션 타입 정의 : 어떤 액션이 필요하냐, 북마크 추가 삭제

const LOG_IN = "login/LOG_IN";

// 액션 타입 정의
export const logIN = () => ({
  type: LOG_IN,
});

// 1번 초기상태 및 리듀서 함수

const initialStates = {
  login: false,
};
// PUSH는 안됨. 왜냐면 이건 새로운 배열을 반환하는게 아니라 있던 배열에 추가하는 거라서
// 3번째 리듀서(변화를 일으키는 함수) : TYPE이 들어왔을 때 반환하는 STATE (...) 전에 있던 배열 요소들을 비구조화해서 넣는 것
const login = (state = initialStates, action) => {
  // 리듀서는 현재상태와 전달받은 액션객체를 파라미터로 받아온다. 그리고 두 값을 참고하여 새로운 상태로 만들어서 반환한다.
  // 받는 액션 자체가 객체고 type 속성은 액션의 이름이라고 생각하면된다.
  switch (action.type) {
    case LOG_IN:
      if (state.login === false) {
        return { ...state, login: true };
      } else {
        return { ...state, login: false };
      }
    default:
      return state;
  }
}; // true인 애들만 나오는 게 필터니까, action.id가 아닌애들만 받아서 새로운 배열로 반환한다.
//
export default login;
