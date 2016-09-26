const Storage = {
  read(key) {
    const serializedData = localStorage.savedState;
    try {
      let SavedState = JSON.parse(serializedData);
      return savedState;
    }catch(err) {
      return null;
    }
  },
  write(key, data) {
    const serializedData = JSON.stringify(data);
    localStorage[key] = serializedData;
  }
  }

  export default Storage;
