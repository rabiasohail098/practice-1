// // Enums

// enum Days {
//     monday,
//     tuesday,
//     wednesday,
//     thursday,
//     friday,
//     saturday,
//     sunday
// }

// console.log(Days);

// //types of enum

// // 01 Numeric Enums

// enum Direction {
//     Up,       // 0
//     Down,     // 1
//     Left,     // 2
//     Right     // 3
//   }
  
//   let direction: Direction = Direction.Up;
//   console.log(direction); // Outputs: 0

//   // 02 String enums

//   enum Directions {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT"
//   }
  
//   let directions: Direction = Direction.Right;
//   console.log(direction); // Outputs: "RIGHT"

//   // 03 Heterogeneous Enums:

//   enum MixedEnum {
//     No = 0,
//     Yes = "YES"
//   }
  
//   console.log(MixedEnum.No);  // Outputs: 0
//   console.log(MixedEnum.Yes); // Outputs: "YES"

//   // 04 Computed and Constant Members in TypeScript Enums
//   // Constant members

//   enum Color {
//     Red = 1,
//     Green = 2,
//     Blue = 3
//   }
  
//   console.log(Color.Red);    // Outputs: 1
//   console.log(Color.Green);  // Outputs: 2
//   console.log(Color.Blue);   // Outputs: 3

//   // Computer members

//   enum Colors {
//     Red = 1,
//     Green = Red + 1,
//     Blue = Green * 2
//   }
  
//   console.log(Colors.Red);    // Outputs: 1
//   console.log(Colors.Green);  // Outputs: 2
//   console.log(Colors.Blue);   // Outputs: 4

//   enum MathConstants {
//     Pi = 3.14,
//     SquareOfPi = Pi * Pi,
//     CircleAreaFactor = Pi * 2
//   }
  
//   console.log(MathConstants.Pi);               // Outputs: 3.14
//   console.log(MathConstants.SquareOfPi);       // Outputs: 9.8596
//   console.log(MathConstants.CircleAreaFactor); // Outputs: 6.28

//   // 05 Union Enums and Enum Member Types in TypeScript
//   // Union Enums:

//   enum ShapeKind {
//     Circle = "CIRCLE",
//     Square = "SQUARE"
//   }
  
//   interface Circle {
//     kind: ShapeKind.Circle;
//     radius: number;
//   }
  
//   interface Square {
//     kind: ShapeKind.Square;
//     sideLength: number;
//   }
  
//   type Shape = Circle | Square;
  
//   function getArea(shape: Shape): number {
//     switch (shape.kind) {
//       case ShapeKind.Circle:
//         return Math.PI * shape.radius ** 2;
//       case ShapeKind.Square:
//         return shape.sideLength ** 2;
//       default:
//         return 0;
//     }
//   }
  
//   let myCircle: Circle = { kind: ShapeKind.Circle, radius: 10 };
//   let mySquare: Square = { kind: ShapeKind.Square, sideLength: 5 };
  
//   console.log(getArea(myCircle)); // Outputs: 314.159...
//   console.log(getArea(mySquare)); // Outputs: 25

//   // Enum Member Types Example

//   enum Status {
//     Success = "SUCCESS",
//     Failure = "FAILURE"
//   }
  
//   function handleStatus(status: Status) {
//     if (status === Status.Success) {
//       console.log("Operation was successful.");
//     } else if (status === Status.Failure) {
//       console.log("Operation failed.");
//     }
//   }
  
//   handleStatus(Status.Success); // Outputs: Operation was successful.
//   handleStatus(Status.Failure); // Outputs: Operation failed.

//   // Union Enums and Enum Member Types Together

//   enum Direct {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT"
//   }
  
//   type VerticalDirection = Direct.Up | Direct.Down;
//   type HorizontalDirection = Direct.Left | Direct.Right;
  
//   function move(direction: VerticalDirection | HorizontalDirection) {
//     switch (direction) {
//       case Direct.Up:
//         console.log("Moving up.");
//         break;
//       case Direct.Down:
//         console.log("Moving down.");
//         break;
//       case Direct.Left:
//         console.log("Moving left.");
//         break;
//       case Direct.Right:
//         console.log("Moving right.");
//         break;
//     }
//   }
  
//   move(Direct.Up);    // Outputs: Moving up.
//   move(Direct.Left);  // Outputs: Moving left.

const myName = "Rabia"


 enum MyName   {
      age = 34,
      name = "num",
}

console.log(MyName);

