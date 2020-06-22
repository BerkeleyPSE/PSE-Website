$(document).ready(function() {
    let brothers = [
        ['Cathy An', 'miles_yun.png'],
        ['Cathy An', 'miles_yun.png'],
        ['George An', 'miles_yun.png'],
        ['Cathy An', 'miles_yun.png'],
        ['Cathy An', 'miles_yun.png'],
        ['Miles An', 'miles_yun.png'],
        ['Cathy An', 'miles_yun.png'],
        ['Cathy An', 'miles_yun.png']
    ];

    console.log(brothers.length)

    for (var i = 0; i < brothers.length; i += 4) {
        let selected = brothers.slice(i, i + 4);
        console.log(selected);

        $('#brothers-section').append(
            $('<div class="d-inline-flex flex-row flex-wrap">' +
                '<span class="flex-fill frame">' +
                    '<img src="./assets/' + selected[i][1] + '">' +
                    '<p>' + selected[i][0] + '</p>' +
                '</span>' +
                '<span class="flex-fill frame">' +
                    '<img src="./assets/' + selected[i + 1][1] + '">' +
                    '<p>' + selected[i + 1][0] + '</p>' +
                '</span>' +
                '<span class="flex-fill frame">' +
                    '<img src="./assets/' + selected[i + 2][1] + '">' +
                    '<p>' + selected[i + 2][0] + '</p>' +
                '</span>' +
                '<span class="flex-fill frame">' +
                    '<img src="./assets/' + selected[i + 3][1] + '">' +
                    '<p>' + selected[i + 3][0] + '</p>' +
                '</span>' +
            '</div>')
        );
    }


});
