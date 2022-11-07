/* Datatype in typescript */

/* number */
let is_number:number = 1;

/* string */
let is_string:string[] = ["Hello",'world']

/* boolean */
let is_boolean:boolean = true && false;

/* any */
let is_any: any[] = [12,"22",true]

/* array */
let is_array:number[] = [1,1,3,4];

/* tuples */
let is_tuples = [1,"HI"];

/* enum */
enum color {
    red = 0,
    blue = 1,
    yello = 2,
}

/* uknown */
let is_unknown:unknown = false;

/* undefined */
let is_undefined: undefined = undefined;

/* null */
let is_null: null = null;


console.log(is_number);

console.log(is_string);

console.log(is_boolean);

console.log(is_any);

console.log(is_array);

console.log(is_tuples);

console.log(color.red);

console.log(is_unknown);

console.log(typeof is_undefined);

console.log(typeof is_null);