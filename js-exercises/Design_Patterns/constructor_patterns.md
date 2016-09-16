*Constructor Pattern

Constructor Patterns are used to create specific objects and creating properties / set values into them. 


```javascript
	//The Constructor Pattern example 
    //examples of Object creation
        var obj = {};
        //var obj() = new Object;
        //var obj = Object.create(Object,prototype);

    //Syntaxes 
        //dot syntax
        obj.tires = 4;
    //	var getTires = obj.tires;//dot syntax get 

        //square bracket syntax
        var x = 'doors';
        obj[x] = 5;
    //	var getDoors = obj[x];//bracket syntax get
        
        //Object.defineProperty
        Object.defineProperty(obj, "color",{
            value: "red",
            writable: true,
            enumerable: true,
            configurable: true
        });
        
        //Object.defineProperties
        Object.defineProperties(obj, {
            "radio":{
                value: "works",
                writable: true,
                enumerable: true,
            },
            "headlights":{
                value: "two lights",
                writable:true,
                enumerable: true,
            }
        });

        console.log(obj);
        //output
        //  { tires: 4,
        //    doors: 5,
        //    color: 'red',
        //    radio: 'works',
        //    headlights: 'two lights' }

```

https://repl.it/D9nS/3
