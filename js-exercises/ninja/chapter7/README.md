1. Create a function that will transform a hex number into an rgb format. 

        Example: 
        
                function hexToRgb(hex){
                	var string = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/;
                	string=hex.match(string);
                	console.log(string);
                	var red = parseInt(string[1],16);
                	var green = parseInt(string[2],16);
                	var blue = parseInt(string[3],16);
                	return '('+'r: '+red+', g: '+ green+', b:'+blue+')';
                }
        
                hexToRgb('#0033ff');

  Use of regular expressions 
  
2. Create a function that will transform a U.S style date format into a format of a different                                 language/region. If that date is a holidays on the target locale (language & region), it                             should be mentioned. ​Preferably, use a different language from that of the example. 

        Example: 
        //English­US: 09/16/2014 → Spanish­MX: 16/09/2014 (Dia de la independencia)  
        //Spanish­MX: 1/4/2014 → English­US: 4/1/2014 (April fools day) 
        var usHoliday = {
        "09/05": "Labor Day",
        "07/04": "Independence Day",
        "04/01": "April Fools Day"
        };
        var mxHoliday = {
        "9/16": "Dia de la independencia",
        "04/01": "April Fools Day"
        };
        
        
        function getDate(en){
        var result = /(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(en);
        var month = result[1];
        var day = result[2];
        var year = result[3];
        var usString = 'English US '+month+"/"+day+"/"+year;
        var spString = '. Spanish MX'+day+"/"+month+"/"+year;
        
        return usString+getUsHoliday(month,day)+spString+getMxHoliday(month,day);
        }
        
        function getUsHoliday(month,day){
        var key = month+"/"+day;
        return usHoliday.hasOwnProperty(key) ? "("+usHoliday[key]+")" : "";
        }
        
        function getMxHoliday(month,day){
        var key = month+"/"+day;
        return mxHoliday.hasOwnProperty(key) ? "("+mxHoliday[key]+")" : "";
        }
        
        
        
        getDate("07/04/2014");
        //output
        //English US 07/04/2014(Independence Day). Spanish MX04/07/2014'
        
  Use of regular expressions, and lookup tables 
  
3. Write an expression that would satisfy at least one match for: 
  1. .abc       something else.abc
  2. a+b?!!1{4}         ab!!1111
  3. .{3}a\.b   123a1b
  4. \w 'hi'    (word character)
  5. \s ' '     (whitespace)
  6. \d 2       (digit)
  7. . (any one character)
  8. [abc]      a
  9. (abc)      abc
  10. [a­zA­Z_\$\.]+[A­Za­z_\$0­9\.]*@[a­zA­Z_\$\.]+[a­zA­Z_\$0­9\.]*\.(com|net|org){1}         donovan1@email.net 
  11. \([0oOn]{1}(_|\s)[0oOn]{1}\)      o|o

4.  Write a regular expression that can match: 

  1. Date format <Month­string> <##day>, <####year> 
        
          Examples:
          1. September 29, 1972 
          2. February 99, 0001 
          3. June 04, 3000 
      
                <####day>./(\d+),\s?(\d+)/
  2. A letter followed OR preceded by a number 
    
          Examples:
          1. A52 
          2. d747 
          3. 27X 
          4. v2 
                /\d*([a-zA-Z])\d*/g
  3. txt, java, and cpp files with names consisting of only letters 
    
          Examples: 
          1. test.java 
          2. program.cpp 
          3. newReport.txt 
                /\.(\w{3})/
  4. A 5 character palindrome 
  
          Example:
          1. abcba 
          2. 12321 
          3. _1a1_ 
                /(.)(.).\2\1/
  5. All words that consist of letters from b to y only 
         
          Example 
          input​: “Bee zapp Crow Eagle Zorro  mouse Ape  you” 
          output​: [“Bee”,”Crow”,”mouse”,”you”]
                /*[b-y]*/

  6. All the non nested tag elements in a string 

          Example 
          input​: “Is <b>4 < ­1/12</b> true? The <b>answer</b> will <em>surprise</em> you.” 
          output​: <b> 4 < ­1/12</b>, <b>answer</b>, <em>surprise</em> 
                /<(\w*)>(.*?)<\/\1>/g

5. Write a program that will: 

  1. Shift cyclically every letter of the alphabet by one, and the numbers as well. 
    
          Example
          1. aBc = bCd 
          2. xyz = yza 
          3. aK89 = bL90 
          
                function shift(value){
                        var letters = /(\w)/g;
                        var lttr = letters.exec(value);
                        var valueArray = [];
                        while(lttr){
                        valueArray.push(oneUp(lttr[0]));
                        lttr = letters.exec(value);
                        }
                        return valueArray.join("");
                        }
                        function oneUp(char){
                                switch (char.charCodeAt(0)) {
                        case 90:
                        	return String.fromCharCode(65);
                        case 122:
                        	return String.fromCharCode(97);
                        case 57:
                        	return String.fromCharCode(48);
                        default:
                        	return String.fromCharCode(char.charCodeAt(0)+1);
                        }
                }
                console.log(shift('abc'));

  2. From a reasonably sized text, have a user defined string be replaced by that same string with a hashtag.
  That hashtag should be a link for a twitter search as well.  

          Example
          text: ...should never use yolo for any reason...
          input. String: yolo 
          output. ... should never use #yolo for any reason ...  
                var string ="...should never use yolo for any reason...";
                function replace(value1, value2){
                        return string.replace(value1, value2);
                }
                replace("yolo","#yolo");
