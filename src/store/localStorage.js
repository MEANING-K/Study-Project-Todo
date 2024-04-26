/* eslint-disable prettier/prettier */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      console.log('로컬 스토리지에서 상태를 찾을 수 없습니다.');
      return undefined;
    }
    console.log(
      '로컬 스토리지에서 상태를 불러왔습니다:',
      JSON.parse(serializedState),
    );
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('로컬 스토리지에서 상태를 불러오는데 실패했습니다:', err);
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    console.log('상태를 로컬 스토리지에 저장했습니다:', serializedState);
  } catch (err) {
    console.error('상태를 로컬 스토리지에 저장하는데 실패했습니다:', err);
  }
};
