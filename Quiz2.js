

const check = /^<\w+(\s+\w+="[^"]*")*\s*\/>$/;

 //Valid arguments
 console.log(check.test("<img src=\"foo.jpg\" />"));                        
 console.log(check.test("<img />"));                            
 console.log(check.test("<a href=\"foo.html\" id=\"stuff\" />")); 
 
 //Invalid arguments
 console.log(check.test("</>"));                 
 console.log(check.test("<img src= />")); 