export const checkObjectEquality = (firstObject, secondObject) => {
    // Create arrays of property names
    var firstProps = Object.getOwnPropertyNames(firstObject);
    var secondProps = Object.getOwnPropertyNames(secondObject);

    // check the eqality of props
    if (firstProps.length != secondProps.length) {
        return false;
    }

    for (var i = 0; i < firstProps.length; i++) {
        var propName = firstProps[i];

        // check the equality of values
        if (firstObject[propName] !== secondObject[propName]) {
            return false;
        }
    }
    return true;
}