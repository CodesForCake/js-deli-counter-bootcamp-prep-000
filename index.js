var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return "Welcome, "+newPerson+". You are number "+katzDeliLine.length+" in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0){
    var firstPerson = katzDeliLine.slice(0,1);
    katzDeliLine.unshift();
    return "Currently serving "+ firstPerson;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length>0) {
    return "The line is currently empty."
  } else {
    var currentLineStr = "The line is currently: ";
    for (let i=0;i<katzDeliLine.length;i++) {
      currentLineStr = currentLineStr + "${i}. ${katzDeliLine[i]}, ";
    }
    return currentLineStr;
  }
  
}