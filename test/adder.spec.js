import { assert } from "chai";
import add from '../adder.js';

describe("adder",()=>{
    it("should retiurn 0" ,()=>{
        const result = add();
        assert.equal(result,0)
    });
});