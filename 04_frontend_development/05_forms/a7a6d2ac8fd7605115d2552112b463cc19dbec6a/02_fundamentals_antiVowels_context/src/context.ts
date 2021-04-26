import { sentenceJoiner } from './sentenceJoiner';
import { sentenceSplitter } from './sentenceSplitter';


export const context = (sentence :string) :string=> {
  // Code your function for context here
  const sentencetableau = sentenceSplitter(sentence)
  const result = sentencetableau.filter((element) :boolean => {
    if(element.startsWith("a") || element.startsWith("e") || element.startsWith("i") || element.startsWith("o") || element.startsWith("u") || element.startsWith("y") || element.startsWith("y") || element.startsWith("A") || element.startsWith("E") || element.startsWith("I") || element.startsWith("O") || element.startsWith("U") || element.startsWith("Y")) {
      return false
    }else {
      return true
    }
  })
  return sentenceJoiner(result)
};
