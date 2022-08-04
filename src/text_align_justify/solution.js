function justify(text, width) {
  const splitted = text.split(' ');
  let justified=''
  if (splitted.length === 1) {
    return text;
  }

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].length === width) {
      justified += splitted[i];
      if(i !== splitted.length - 1) justified += '\n'
    } else {
      let line = [splitted[i]];
      for (let a = i + 1; a < splitted.length; a++) {
        if (
            getLineLength(line) + splitted[a].length + line.length - 1 <
            width
        ) {
          line.push(splitted[a]);
          i = a;
        } else {
          break;
        }
      }
      if (getLineLength(line) < width && i !== splitted.length - 1) {
        justified += addSpaces(line, width) + '\n';
      } else if(i === splitted.length - 1) {
        justified += line.join(' ')
      }
    }
  }
  return justified
}

function addSpaces(line, width) {
  const withSpaces = line.join(' ').split(/(\s+)/)

  for (let i = 0; i<withSpaces.length; i++) {
    if (withSpaces[i].trim().length === 0 && width - getLineLength(withSpaces) !== 0) {
      withSpaces[i] = withSpaces[i] + ' '
    }

    if (i === withSpaces.length-1 && width - getLineLength(withSpaces) !== 0) {
      i = 0
    }
  }
  return withSpaces.join('')
}

function getLineLength(line) {
  return line.reduce((prev, curr) => {
    return prev + curr.length;
  }, 0);
}
