// configureStore.ts
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
  Reducer,
} from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // 수정된 import 구문
import { loadState, saveState } from './localStorage'; // 상태 로드 및 저장 유틸리티 가져오기

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  const preloadedState = loadState(); // 로컬 스토리지에서 상태 불러오기

  const combinedReducers = combineReducers({
    rootReducer, // 직접 사용
  });

  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer: (injectedReducers: { [key: string]: Reducer }) => {
        return combineReducers({
          ...injectedReducers,
          rootReducer,
        });
      },
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: combinedReducers,
    middleware: [...getDefaultMiddleware(), ...middlewares],
    preloadedState, // 불러온 상태로 스토어 초기화
    enhancers,
    devTools: process.env.NODE_ENV !== 'production',
  });

  // 스토어 상태가 변경될 때마다 로컬 스토리지에 저장
  store.subscribe(() => {
    const state = store.getState();
    console.log('스토어 상태가 업데이트 되었습니다:', state);
    saveState(state);
  });

  return store;
}
