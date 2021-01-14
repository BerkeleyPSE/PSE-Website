$(document).ready(function() {
    let eboard = [
        ['Simone Ong', 'simone_ong.jpg', 'simone_ong2.jpg'],
        ['Miles Yun', 'miles_yun.jpg', 'miles_yun2.jpg'],
        ['Reshma Belur', 'reshma_belur.jpg', 'reshma_belur.jpg'],
        ['Ankur Chadha', 'ankur_chadha.jpg', 'simone_ong2.jpg'],
        ['Santosh Tatipamula', 'santosh_tatipamula.jpg', 'santosh_tatipamula.jpg'],
        ['Violet Carter', 'violet_carter.jpg', 'violet_carter.jpg'],
        ['Amy Cha', 'amy_cha.jpg', 'amy_cha.jpg']
    ]
    eboard.sort(last_name_comparator)

    let brothers = [
        ['John Van', 'john_van.jpg', 'john_van.jpg'],
        ['Liona Li', 'liona_li.jpg', 'liona_li.jpg'],
        ['Olivia Lee', 'olivia_lee.jpg', 'olivia_lee.jpg'],
        ['Reshma Belur', 'reshma_belur.jpg', 'reshma_belur.jpg'],
        ['Amy Tran', 'amy_tran.jpg', 'amy_tran.jpg'],
        ['Edward Chen', 'edward_chen.jpg', 'edward_chen.jpg'],
        ['Emily Wu', 'emily_wu.jpg', 'emily_wu.jpg'],
        ['Natalia Brusco', 'natalia_brusco.jpg', 'natalia_brusco.jpg'],
        ['Priyanka Vatturi', 'priyanka_vatturi.jpg', 'priyanka_vatturi.jpg'],
        ['Adrian Chiu', 'adrian_chiu.jpg', 'adrian_chiu.jpg'],
        // ['Jessie Lee', 'jessie_lee.jpg', 'jessie_lee.jpg'],
        ['Julia Ide', 'julia_ide.jpg', 'julia_ide.jpg'],
        ['Miles Yun', 'miles_yun.jpg', 'miles_yun2.jpg'],
        ['Santosh Tatipamula', 'santosh_tatipamula.jpg', 'santosh_tatipamula.jpg'],
        ['Ankur Chadha', 'ankur_chadha.jpg', 'ankur_chadha.jpg'],
        ['Franklin Ye', 'franklin_ye.jpg', 'franklin_ye.jpg'],
        ['Julia Nuttall-Smith', 'julia_nuttall_smith.jpg', 'julia_smith.jpg'],
        ['Miki Chen', 'miki_chen.jpg', 'miki_chen.jpg'],
        ['Amy Cha', 'amy_cha.jpg', 'amy_cha.jpg'],
        ['Violet Carter', 'violet_carter.jpg', 'violet_carter.jpg'],
        ['Simone Ong', 'simone_ong.jpg', 'simone_ong2.jpg'],
        ['Jessica Yu', 'jessica_yu.jpg', 'jessica_yu.jpg'],
        ['Neal Kothari', 'neal_kothari.jpg', 'neal_kothari.jpg'],
        ['Damon Ong', 'damon_ong.jpg', 'damon_ong.jpg'],
        ['Sophia Zhang', 'sophia_zhang.jpg', 'sophia_zhang.jpg'],
        ['Chloe Purnama', 'chloe_purnama.jpg', 'chloe_purnama.jpg'],
        ['Nora Lam', 'nora_lam.jpg', 'nora_lam.jpg'],
        ['Luke Elam', 'luke_elam.jpg', 'luke_elam.jpg'],
        ['Sarah Yoon', 'sarah_yoon.jpg', 'sarah_yoon.jpg'],
        ['Alan Lin', 'alan_lin.jpg', 'alan_lin.jpg'],
        ['Anirudh Kamath', 'anirudh_kamath.jpg', 'anirudh_kamath.jpg'],
        ['Amit Palekar', 'amit_palekar.jpg', 'amit_palekar.jpg'],
        ['Anni Wang', 'anni_wang.jpg', 'anni_wang.jpg'],
        ['Cori Anne Montero', 'corianne_montero.jpg', 'cori_montero.jpg'],
        ['Euna Jo', 'euna_jo.jpg', 'euna_jo.jpg'],
        ['I-Jung Lin', 'i-jung_lin.jpg', 'i-jung_lin.jpg'],
        ['Katherine Gan', 'katherine_gan.jpg', 'katherine_gan.jpg'],
        ['Noel Hayward', 'noel_hayward.jpg', 'noel_hayward.jpg'],
        ['Ryan Li', 'ryan_li.jpg', 'ryan_li.jpg'],
        ['Rujula Muralidhar', 'rujula_muralidhar.jpg', 'rujula_muralidhar.jpg'],
        ['Tiana Thich', 'tiana_thich.jpg', 'tiana_thich.jpg'],
        ['Carina Wu', 'carina_wu.jpg', 'carina_wu.jpg'],
        ['Ethan Liao', 'ethan_liao.jpg', 'ethan_liao.jpg'],
        ['Lauren Fu', 'lauren_fu.jpg', 'lauren_fu.jpg'],
        ['Emma Bellman', 'emma_bellman.jpg', 'emma_bellman.jpg'],
        ['Bryan Choo', 'pselogo2.png', 'bryan_choo.jpg'],
        ['Jessica Wang', 'jessica_wang.jpg', 'jessica_wang.jpg'],
        ['Dominick Gray', 'pselogo2.png', 'dominick_gray.jpg'],
        ['Rachel Wu', 'rachel_wu.jpg', 'rachel_wu.jpg']

    ]
    brothers.sort(last_name_comparator)
    $('#brothers-section').append(makeBrothers(brothers));

    // $(".frame").children("img").hover(function() {
    //     for (i of brothers) {
    //         if ("./assets/" + i[1] == $(this).attr('src')) {
    //             $(this).attr('src', './assets/' + i[2]);
    //             break;
    //         }
    //     }
    // });
    //
    // $(".frame").children("img").mouseout(function(){
    //     for (i of brothers) {
    //         if ("./assets/" + i[2] == $(this).attr('src')) {
    //             $(this).attr('src', './assets/' + i[1]);
    //             break;
    //         }
    //     }
    // });
});

function makeBrothers(arr) {
    let ROW_LENGTH = 5
    let html = "<div class='container-fluid centered'>"
    for (let i = 0; i < arr.length; i += ROW_LENGTH) {
        let selected = arr.slice(i, Math.min(arr.length, i + ROW_LENGTH));
        for (j of selected) {
            if (j != undefined) {
                // if (j[1] == 'pselogo2.png' || j[0] == 'Emily Wu' || j[0] == 'Amanda Di') {
                html += '<div class="frame">' +
                        '<div class="profile" style="background-image: url(./assets/' + j[1] + ');"></div>' +
                        '<p>' + j[0] + '</p>' +
                    '</div>';
                // } else {
                //     html += '<div class="frame">' +
                //             '<div class="profile" style="background-image: url(https://res.cloudinary.com/berkeleypse-tech/image/upload/fl_force_strip.progressive,q_auto:best/brothers/' + j[1] + ');"></div>' +
                //             '<p>' + j[0] + '</p>' +
                //         '</div>';
                // }
            }
        }
    }
    html += '</div>'
    return html
}

function last_name_comparator(a, b) {
    a = String(a[0].split(" ").pop())
    b = String(b[0].split(" ").pop())
    return a.localeCompare(b)
}
