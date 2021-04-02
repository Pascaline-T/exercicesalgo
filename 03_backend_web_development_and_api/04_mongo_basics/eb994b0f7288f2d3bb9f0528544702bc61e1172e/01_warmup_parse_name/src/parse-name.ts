type Person = {
  firstName: string;
  lastName: string;
}

export function parseName(name: string): Person {
  const nameSplited = name.split(' ')
  console.log({nameSplited})
  return {
    firstName: nameSplited[0],
    lastName: nameSplited[1]
  }
  
}
