interface Sort {
  sortAlphabetically: (array: string[]) => string[];
}

export default (): Sort => {

  const sortAlphabetically = (array: string[]) => {
    return array.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
  }

  return {
    sortAlphabetically
  }
};
