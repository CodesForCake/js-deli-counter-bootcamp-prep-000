var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return "Welcome, "+newPerson+". You are number "+katzDeliLine.length+" in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0){
    var firstPerson = katzDeliLine.slice(0,1);
    katzDeliLine.unshift();
    return firstPerson;
  } else {
    return "There is nobody waiting to be served!"
  }
}