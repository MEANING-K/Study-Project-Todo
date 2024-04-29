// store/configureStore.ts

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // rootReducer를 가져옵니다.
import rootSaga from './rootSage'; // rootSaga를 가져옵니다.

// 이전의 코드에서는 로컬 스토리지와 관련된 함수가 사용되었으나, 이번에는 그 부분을 제거했습니다.

const sagaMiddleware = createSagaMiddleware();

export const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureAppStore;
