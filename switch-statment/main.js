//Switch Statement Example

const day = "thur"; 

switch (day) {
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is Tuesday");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code for midweek days");
        break;
    case "friday":
        console.log("Today is Friday");
        break;
    case "saturday":
    case "sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Not a valid day");
}