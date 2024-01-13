function dedupe(list) {
  if (list.length === 0) {
    return list;
  } else {
    let dedupedList = [];
    for (let x of list) {
      if (!dedupedList.includes(x)) {
        dedupedList.push(x);
      }
    }
    return dedupedList;
  }
}

module.exports = dedupe;
