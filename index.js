var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  return "Welcome, "+newPerson+". You are number "+(katzDeliLine.length+1)+" in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0){
    var firstPerson = katzDeliLine.slice(0,1);
    
    return firstPerson;
  } else {
    return "There is nobody waiting to be served!"
  }
}