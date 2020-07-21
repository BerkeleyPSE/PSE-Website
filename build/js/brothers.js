$(document).ready(function() {
    let eboard = [

    ]

    let brothers = [
        ['Simone Ong', 'simone_ong.jpg', 'simone_ong2.jpg'],
        ['Simone Ong', 'simone_ong.jpg', 'simone_ong2.jpg'],
        ['Liona Li', 'liona_li.jpg', 'liona_li2.jpg'],
        ['Miles Yun', 'miles_yun.png', 'miles_yun2.jpg'],
        ['Miles Yun', 'miles_yun.png', 'miles_yun2.jpg']
    ]
    console.log(brothers)
    brothers.sort()
    console.log(brothers)
    let html = ""
    for (let i = 0; i < brothers.length; i += 4) {
        console.log(i, Math.min(brothers.length, i + 4))
        let selected = brothers.slice(i, Math.min(brothers.length, i + 4));
        console.log(selected);
        html += '<div class="d-inline-flex flex-row flex-wrap">'
        for (j of selected) {
            console.log(j);
            if (j != undefined) {
                html += '<span class="flex-fill frame">' +
                        '<img src="./assets/' + j[1] + '">' +
                        '<p>' + j[0] + '</p>' +
                    '</span>';
            }
        }
        html += '</div>'
    }

    $('#brothers-section').append(html);

    $(".frame").children("img").hover(function() {
        for (i of brothers) {
            if ("./assets/" + i[1] == $(this).attr('src')) {
                $(this).attr('src', './assets/' + i[2]);
                break;
            }
        }
    });

    $(".frame").children("img").mouseout(function(){
        for (i of brothers) {
            if ("./assets/" + i[2] == $(this).attr('src')) {
                $(this).attr('src', './assets/' + i[1]);
                break;
            }
        }
    });
});

function makeBrothers(arr) {

}
