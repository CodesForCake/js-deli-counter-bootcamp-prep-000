var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return "Welcome, "+newPerson+". You are number "+katzDeliLine.length+" in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0){
    var firstPerson = katzDeliLine.slice(0,1);
    katzDeliLine.shift();
    return "Currently serving "+ firstPerson + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length>0) {
    var currentLineStr = "The line is currently: ";
    for (let i=0;i<katzDeliLine.length;i++) {
      currentLineStr = currentLineStr + (i+1) +". " + katzDeliLine[i]+", ";
    }
    return currentLineStr;
  } else {
    return "The line is currently empty."
  }
  
}