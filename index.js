function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i=0; i<musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(arr) {
  var counter = 0;
  while(counter < arr.length) {
    arr[counter].push("!!!");
    counter ++;
  }
  return arr;
}

 describe('johnLennonFacts', function(){
    it("returns an array of strings with exclamation points", function() {
      expect(johnLennonFacts([
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ])).toEqual(["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]);

      expect(johnLennonFacts([
        "foo",
        "bar",
      ])).toEqual(["foo!!!", "bar!!!"])
    });
  });
