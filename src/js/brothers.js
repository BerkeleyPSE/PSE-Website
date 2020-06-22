$(document).ready(function() {
    let brothers = [
        ['Cathy An', 'miles_yun.png'],
        ['Cathy An', 'miles_yun.png'],
        ['George An', 'miles_yun.png'],
        ['Cathy An', 'miles_yun.png'],
        ['Cathy An', 'miles_yun.png'],
        ['Cathy An', 'miles_yun.png'],
        ['George An', 'miles_yun.png'],
        ['Cathy An', 'miles_yun.png']
    ]

    let html = ""
    for (let i = 0; i < brothers.length; i += 4) {
        let selected = brothers.slice(i, i + 4);

        html += '<div class="d-inline-flex flex-row flex-wrap">' +
                '<span class="flex-fill frame">' +
                    '<img src="./assets/' + selected[0][1] + '">' +
                    '<p>' + selected[0][0] + '</p>' +
                '</span>' +
                '<span class="flex-fill frame">' +
                    '<img src="./assets/' + selected[1][1] + '">' +
                    '<p>' + selected[1][0] + '</p>' +
                '</span>' +
                '<span class="flex-fill frame">' +
                    '<img src="./assets/' + selected[2][1] + '">' +
                    '<p>' + selected[2][0] + '</p>' +
                '</span>' +
                '<span class="flex-fill frame">' +
                    '<img src="./assets/' + selected[3][1] + '">' +
                    '<p>' + selected[3][0] + '</p>' +
                '</span>' +
            '</div>';
    }

    console.log(html);
    $('#brothers-section').append(html);
});
