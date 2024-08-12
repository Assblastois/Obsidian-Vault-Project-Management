async function urgencyPicker(tp) {
    const selectedOption2 = await tp.system.suggester(
        ['Urgent', 'High', 'Medium', 'Low'], 
        [1, 2, 3, 4], 
        false, 
        "How urgent is the Project?"
        );

    if (selectedOption2 === 1) {
        return ' 1 Urgent'.fontcolor("red");
    } else if (selectedOption2 === 2) {
        return ' 2 High'.fontcolor('orange');
    } else if (selectedOption2 === 3) {
        return ' 3 Medium'.fontcolor('yellow');
    } else if (selectedOption2 === 4) {
        return ' 4 Low'.fontcolor('green');
    } else {
        return 'Nothing was indicated!!!'.fontcolor("red")
    }
}
module.exports = urgencyPicker