import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.be.equal(true);
  });
});

describe('Our second test', function(){
  it('should pass', function (){
    expect(false).to.be.equal(false);
  });
});

describe('index.html', () => {
  it('should say he that says User', (done)=> {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.be.equal("Users");  
      done();
      window.close();
    });
  });
});

