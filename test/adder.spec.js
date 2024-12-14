import { assert } from "chai";
import add from '../adder.js';

describe("adder",()=>{
    it("it should return 0 for blank string" ,()=>{
        const result = add("");
        assert.equal(result,0)
    });
    it("it should return 1" ,()=>{
        const result = add("1");
        assert.equal(result,1)
    });
    it("it should return addition of string '1,5' " ,()=>{
        const result = add("1,5");
        assert.equal(result,6)
    });
    it("Allow the add method to handle new lines between numbers (instead of commas). ('1\n2,3' should return 6)" ,()=>{
        const result = add("1\n2,3");
        assert.equal(result,6)
    });
    it("To change the delimiter, the beginning of the string will contain a separate line that looks like this '//;\n1;2' where the delimiter is ';' should return 3." ,()=>{
        const result = add("//;\n1;2");
        assert.equal(result,3)
    });
    it("Calling add with a negative number will throw an exception: 'negative numbers not allowed '1543-8'" ,()=>{
        const result = add("1543-8");
        assert.equal(result,'Negative numbers not allowed -8.')
    });
});