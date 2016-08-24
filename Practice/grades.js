function random() {
    var ran = Math.random() >= 0.5;
    if (ran) {grade = "F"}
    else {grade = "D"}
    return grade;
};
function replace() {
    $('#SP-transcript td:contains("Acad: ")').each(function() {
        $(this).html('Acad: ' + random());
    });
    $('#SP-transcript td:contains("Cit: ")').each(function() {
        $(this).html('Cit: ' + random());
    });
    $('#SP-transcript td:contains("5.0")').html('0.0000');
    $('#SP-transcript td:contains("Current School Credits Earned")').next().html('0.0000');
    console.log('Damn son, you\'re failing!!!');
};

var badGrades = setInterval(function() {
    if ($('#SP-transcript td:contains("5.0")').length)
        { replace()}
}, 100);
