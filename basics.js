// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
//This is  a Number. So the return value will be a number

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
//This is a String, so it will return a String

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
//This is a

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
//This will return a number since this is a term used to convay the error that you are trying to put a Non-number into a number variable

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
//"Hamburgers" Strings can be added together to create a new string

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
//it will return NaN, because strings cannnot be subtracted from eachothe,r so the computer thinks your trying to make a number, but this is not a number

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
//It will come up as "johnny5" because... computers. It adds the 5 to the "jhonny"

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
//it will come up as NaN, because strings cannot be multiplied by anything so it thinks your trying to make a number but this is a string.

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
//[3, 2, 4, 6, 10]

// What is the return value of the below code sample
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
//["dot", "dash", "pause", "dash", "dot"]

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
// ["Mick", "Keith", "Ronnie", "Charlie", "Paul", "John", "George", "Ringo"]
