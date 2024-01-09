function log(message){
    console.log(`${new Date()}: ${message}`);

}
function logNoDate(message){
    console.log(message);
}
module.exports = log;
module.exports.logNoDate = logNoDate;