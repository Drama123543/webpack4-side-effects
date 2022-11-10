const getSingletonInstance = () => {
  window.apsSharedStore = window.apsSharedStore || {
    useDispatch: () => console.log('useDispatch'),
    useSelector: () => console.log('useSelector'),
  };
  return window.apsSharedStore;
};

export const sharedStore = getSingletonInstance();
export const useAutoPacketSplitDispatch = sharedStore.useDispatch;
export const useAutoPacketSplitSelector = sharedStore.useSelector;
