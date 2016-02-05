'use strict';

describe('Dog constuctor', function(){
  it("should create a new dog with three properties", function(){
    var caldwell = new Dog("caldwell", "toy poodle", "4 months");
    expect(caldwell.constructor == Dog).toEqual(true);
    expect(caldwell.name).toEqual("caldwell");
    expect(caldwell.age).toEqual("4 months");
    expect(caldwell.breed).toEqual("toy poodle");
  });

});


