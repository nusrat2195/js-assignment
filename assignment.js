 // Question 1

 function feetToMile(feet) {


    var mile = feet / 5280; // 1 mile = 5280 feet


    if (feet < 0) {
        console.log("Negative value is not supported. Enter a value greater than or equal to 0");
    } else {
        return mile;
    }
}


// Question 2

function woodCalculator(chair, table, bed) {

    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;

    var totalWoodrequired = woodForChair + woodForTable + woodForBed;


    if (chair < 0 || table < 0 || bed < 0) {
        console.log("Negative value is not supported. Enter a value greater than or equal to 0");
    } else if (!Number.isInteger(chair) || !Number.isInteger(table) || !Number.isInteger(bed)) {
        console.log("Quantity should be integer. Enter an Integer value"); // Check if float value is given
    } else {
        return totalWoodrequired;
    }
}



//  Question 3

function brickCalculator(floorNumber) {

    var bricksPerFeet = 1000;
    var totalBricks;


    if (floorNumber < 0) {
        console.log("Floor number can not be negative. Enter a value greater than or equal to 0");
    } else if (!Number.isInteger(floorNumber)) {
        console.log("Floor number can not be float type. Enter an Integer value"); // Check if float value is given
    } else if ((floorNumber / 10) >= 0 && (floorNumber / 10) <= 1) {
        totalBricks = floorNumber * 15 * bricksPerFeet;
    } else if ((floorNumber / 10) > 1 && (floorNumber / 10) <= 2) {
        totalBricks = ((10 * 15) + ((floorNumber - 10) * 12)) * bricksPerFeet;
    } else {
        totalBricks = ((10 * 15) + (10 * 12) + ((floorNumber - 20) * 10)) * bricksPerFeet;
    }

    return totalBricks;
}



//  Question 4

function tinyFriend(friendList) {
    if (friendList.length == 0) {
        console.log("Friend List is empty"); // Check if frindlist is empty
    } else {

        var tinyName = friendList[0];

        for (var i = 0; i < friendList.length; i++) {
            var currentName = friendList[i];

            if (currentName.length < tinyName.length) {
                tinyName = currentName;
            }

        }
        return tinyName;
    }

}

