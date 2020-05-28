
    
  
const sharedStepAction = function(stepName) {
  const funcDictionary = [
    
  ];

  eval(funcDictionary.find((dictElement) => { return dictElement.stepName === stepName}).stepFunction)();
}
    module.exports = sharedStepAction;
  