//Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        case 42:
            answer = "The Answer";
            break;
        default:
            answer = "";
            break;
    }

    // Only change code above this line
    return answer;
}

chainToSwitch(7);