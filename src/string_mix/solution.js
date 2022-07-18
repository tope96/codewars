function mix(s1, s2) {
  const s1Processed = s1.replace(/[^a-z]+/g, '').split('').sort();
  const s1Counts = countOccurs(s1Processed);

  const s2Processed = s2.replace(/[^a-z]+/g, '').split('').sort();
  const s2Counts = countOccurs(s2Processed);
  let completeString = [];

  for (const s1CharKeys in s1Counts) {
    if (s1Counts[s1CharKeys] > 1) {
      if (s1CharKeys in s2Counts) {
        if (s2Counts[s1CharKeys] === s1Counts[s1CharKeys]) {
          completeString.push(`=:${s1CharKeys.repeat(s2Counts[s1CharKeys])}`);
          delete s2Counts[s1CharKeys];
          delete s1Counts[s1CharKeys];
        } else if (s2Counts[s1CharKeys] > s1Counts[s1CharKeys]) {
          completeString.push(`2:${s1CharKeys.repeat(s2Counts[s1CharKeys])}`)
          delete s2Counts[s1CharKeys];
          delete s1Counts[s1CharKeys];
        } else {
          completeString.push(`1:${s1CharKeys.repeat(s1Counts[s1CharKeys])}`)
          delete s2Counts[s1CharKeys];
          delete s1Counts[s1CharKeys];
        }
      } else {
        completeString.push(`1:${s1CharKeys.repeat(s1Counts[s1CharKeys])}`)
      }
    }
  }

  for (const s2CharKey in s2Counts) {
    if (s2Counts[s2CharKey] > 1) {
      completeString.push(`2:${s2CharKey.repeat(s2Counts[s2CharKey])}`)
    }
  }

  const sortedResult = completeString.sort((a, b) => {
    if (a.length < b.length) {
      return 1;
    }

    if (a.length === b.length) {
      if ((parseInt(a[0]) || 3) > (parseInt(b[0]) || 3)) {
        return 1;
      }

      if (a[0] === b[0]) {
        return a[0].localeCompare(b[0]);
      }
    }

    return -1;
  });

  return sortedResult.join('/')
}

const countOccurs = (processed) => {
  const counts = {};
  for (const char of processed) {
    counts[char] = counts[char] ? counts[char]+1 : 1;
  }
  return counts;
}
