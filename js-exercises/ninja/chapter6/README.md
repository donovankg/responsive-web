  1. Create a set of object types that describe a series of related objects that may share behavior and/or attributes. Code the example and another set of classes different from                         the example. Add properties/methods as needed.  

    Example: 
    
    ```javascript
    Shape //{ pEdges, fnDisplay } 
    Quadrilateral is Shape //{ fnArea, fnPerimeter}  
    Square is Quadrilateral //{ } 
    Triangle is Shape //{fnArea, fnPerimeter} 
    ```
    Use of inheritance, prototype, and function overwriting. 
    ```javascript
	function Shape(color){
		 this.basic ="its a shape";
		 this.color = color;
		 this.pEdges = 0;
		 this.fnDisplay = 'shown';
	}
	function Quadrilateral(color, fnArea, fnPerimeter){
		this.shapeType='Quadrilateral';
		Shape.call(this,color);
		this.fnArea = fnArea;
		this.fnPerimeter = fnPerimeter;
	}
	function Triangle(color, fnArea, fnPerimeter){
		this.shapeType = 'Triangle';
		this.subShapeType = 'none';
		this.fnArea = fnArea;
		this.fnPerimeter = fnPerimeter;
		Shape.call(this, color);
	}
	
	function Square(color, fnArea, fnPerimeter){
		this.subShapeType = "Square";
		Quadrilateral.call(this, color, fnArea, fnPerimeter);
		
	}
	
	Quadrilateral.prototype = Object.create(Shape.prototype);
	Triangle.prototype = Object.create(Shape.prototype);
	Square.prototype = Object.create(Quadrilateral);
	
	var sqr = new Square('red', 5, 8);
	var tri = new Triangle('yellow',3, 4);
	console.log(sqr);
	console.log(tri.basic);
```
