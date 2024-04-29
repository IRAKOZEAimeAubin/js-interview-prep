// Function to check if an input is an array

const isArray = ( input ) => {
    return toString.call( input ) === '[object Array]' ? true : false;
};

// console.log( isArray( [ 1, 2, 3, 4 ] ) );
// console.log( isArray( 'Hello' ) );
// console.log( isArray( 1 ) );

// Function to clone an array

const cloneArray = ( arr ) => {
    return arr.slice( 0 );
};

// console.log(cloneArray([23,12,10,99,30]))
// console.log(cloneArray([[12.99],[9.10]]))
// console.log( cloneArray( [ 'Aaron Rodgers', 'Stephen Curry', 'Wayne Rooney' ] ) );

// Function to get the first n elements of an array

const getFirstNElements = ( arr, n ) => {
    return arr === null ? void 0 : n === null ? arr[ 0 ] : n < 0 ? [] : arr.slice( 0, n );
};

// console.log( getFirstNElements( [ 23, 12, 10, 99, 30 ], 0 ) );

// Function to join string elements

const joinArrayStringElements = ( arr ) => {
    const joinByToString = arr.toString();
    const joinByJoin = arr.join();
    const joinByJoinPlus = arr.join( '+' );

    console.log( `${ joinByToString }\n${ joinByJoin }\n${ joinByJoinPlus }` );
};

// joinArrayStringElements( [ 'Aaron Rodgers', 'Stephen Curry', 'Wayne Rooney' ] );

// Function to insert a dash (-) between each even number in an input
// Example: 025468 -> 0-254-6-8

const insertDash = ( num ) => {
    let str = num.toString();
    let output = [ str[ 0 ] ];

    for ( let i = 1; i < str.length; i++ ) {
        if ( str[ i - 1 ] % 2 === 0 && str[ i ] % 2 === 0 ) {
            output.push( '-', str[ i ] );
        } else {
            output.push( str[ i ] );
        }
    }

    return output.join( '' );
};

// console.log( insertDash( 225468 ) );

// Function to sort the elements of an array

const sortArrayElements = ( arr ) => {
    return arr.sort( ( a, b ) => {
        return a - b;
    } );
};

// console.log( sortArrayElements( [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ] ) );

// Function to find the most frequent element in an array

const getMostFrequentElement = ( arr ) => {
    const frequencyObj = {};
    let maxFrequency = 0;
    let maxFrequencyElement;

    for ( const element of arr ) {
        frequencyObj[ element ] = ( frequencyObj[ element ] || 0 ) + 1;
    }

    for ( const element in frequencyObj ) {
        if ( frequencyObj[ element ] > maxFrequency ) {
            maxFrequency = frequencyObj[ element ];
            maxFrequencyElement = element;
        }
    }

    console.log( `${ maxFrequencyElement } (${ maxFrequency } times)` );
};

// getMostFrequentElement( [ 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3 ] );

const swapCases = ( str ) => {
    return str.split( '' ).map( ( char ) => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase() ).join( '' );
};

// console.log( swapCases( 'The Quick Brown Fox' ) );

const printNestedArrayElements = ( arr ) => {
    for ( let i = 0; i < arr.length; i++ ) {
        console.log( `row ${ i }` );

        for ( let j = 0; j < arr[ i ].length; j++ ) {
            console.log( arr[ i ][ j ] );
        }
    }
};

// printNestedArrayElements( [ [ 1, 2, 1, 24 ], [ 8, 11, 9, 4 ], [ 7, 0, 7, 27 ], [ 7, 4, 28, 14 ], [ 3, 10, 26, 7 ] ] );

// Sum of squares of a numerical vector

const sumSquares = ( arr ) => {
    let sum = 0;

    for ( let i = 0; i < arr.length; i++ ) {
        if ( typeof arr[ i ] === 'number' ) {
            sum += arr[ i ] ** 2;
        }
    }

    return sum;
};

// console.log( sumSquares( [ 0, 1, 2, 3, 4 ] ))

// Sum and product of elements of an array

const sumAndMultiple = ( arr ) => {
    let sum = 0;
    let product = 1;

    for ( let i = 0; i < arr.length; i++ ) {
        if ( typeof arr[ i ] === 'number' ) {
            sum += arr[ i ];
            product *= arr[ i ];
        }
    }

    console.log( `Sum = ${ sum }\nProduct = ${ product }` );
};

// sumAndMultiple( [ 1, 2, 3, 4, 5, 6 ] );

// Remove duplicate array elements while ignoring case sensitivity

const removeDuplicates = ( arr ) => {
    const uniqueElements = new Set( arr.map( element => typeof element === 'string' ? element.toLowerCase() : element ) );

    console.log( 'Original array:', arr );
    console.log( 'Unique elements array:', Array.from( uniqueElements ) );
};

// removeDuplicates( [ 1, 2, 3, 4, 5, 1, 2, 'a', 'b', 'A', 'B' ] );
// removeDuplicates( [ 'Apple', 'Banana', 'Cherry', 'apple', 'BANANA' ] );

const getOrdinalSuffix = ( n ) => {
    const suffixes = [ 'th', 'st', 'nd', 'rd' ];
    const lastTwoDigits = n % 100;
    const lastDigit = n % 10;

    if ( lastTwoDigits >= 11 && lastTwoDigits <= 13 ) {
        return `${ n }${ ( suffixes[ 0 ] ) }`;
    }

    return `${ n }${ ( suffixes[ lastDigit ] || suffixes[ 0 ] ) }`;
};

const formatString = ( ordinalNumber, color ) => {
    const trimmedColor = color.trim();
    return `${ getOrdinalSuffix( ordinalNumber ) } choice is ${ trimmedColor }.`;
};

// const colors = [ "Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ", "Cyan", "Lime", "Rose", "Black" ];

// colors.forEach( ( color, index ) => {
//     const ordinalNumber = index + 1;
//     const choiceString = formatString( ordinalNumber, color );
//     console.log( choiceString );
// } );

// Find leap years in a given range

const findLeapYears = ( startYear, endYear ) => {
    const leapYears = [];

    for ( let year = startYear; year <= endYear; year++ ) {
        if ( ( year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0 ) {
            leapYears.push( year );
        }
    }

    return leapYears;
};

// console.log( findLeapYears( 0, 400 ) );

// Shuffle an array

const shuffleArray = ( arr ) => {
    const shuffledArray = [ ...arr ];

    for ( let i = shuffledArray.length - 1; i > 0; i-- ) {
        const j = Math.floor( Math.random() * ( i + 1 ) );

        [ shuffledArray[ i ], shuffledArray[ j ] ] = [ shuffledArray[ j ], shuffledArray[ i ] ];
    }

    return shuffledArray;
};

// console.log( shuffleArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ) );

// Binary search to find the index of a given element

const binarySearch = ( arr, target ) => {
    const sortedArr = arr.sort( ( a, b ) => a - b );
    let left = 0;
    let right = sortedArr.length - 1;

    while ( left <= right ) {
        const mid = Math.floor( ( left + right ) / 2 );

        if ( arr[ mid ] === target ) {
            return mid;
        } else if ( sortedArr[ mid ] < target ) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

// console.log( binarySearch( [ 1, 2, 3, 4, 5, 7, 8, 9 ], 21 ) );

// Given 2 arrays find the sum of the elements on the same index

const sumArrayElement = ( arr1, arr2 ) => {
    const result = [];

    if ( arr1.length !== arr2.length ) {
        throw new Error( 'Input arrays must be of same length.' );
    }

    for ( let i = 0; i < arr1.length; i++ ) {
        result[ i ] = arr1[ i ] + arr2[ i ];
    }

    return result;
};

// console.log( sumArrayElement( [ 1, 0, 2, 3, 4 ], [ 3, 5, 6, 7, 8 ] ) );

const findDuplicates = ( arr ) => {
    const duplicates = [];
    const valuesSeen = new Set();

    for ( const value of arr ) {
        if ( valuesSeen.has( value ) ) {
            duplicates.push( value );
        } else {
            valuesSeen.add( value );
        }
    }

    return duplicates;
};

console.log( findDuplicates( [ 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3 ] ) );