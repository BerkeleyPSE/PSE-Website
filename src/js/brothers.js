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
        ['Britney Yip', 'britney_yip.jpg', 'britney_yip.jpg'],
        ['Emily Wu', 'emily_wu.jpg', 'emily_wu.jpg'],
        ['Natalia Brusco', 'natalia_brusco.jpg', 'natalia_brusco.jpg'],
        ['Priyanka Vatturi', 'priyanka_vatturi.jpg', 'priyanka_vatturi.jpg'],
        ['Adrian Chiu', 'adrian_chiu.jpg', 'adrian_chiu.jpg'],
        ['Amanda Di', 'pselogo2.png', 'amanda_di.jpg'],
        ['Christopher  Diaz', 'christopher_diaz.jpg', 'christopher_diaz.jpg']
        ['Jessie Lee', 'jessie_lee.jpg', 'jessie_lee.jpg'],
        ['Julia Ide', 'julia_ide.jpg', 'julia_ide.jpg'],
        ['Miles Yun', 'miles_yun.jpg', 'miles_yun2.jpg'],
        ['Santosh Tatipamula', 'santosh_tatipamula.jpg', 'santosh_tatipamula.jpg'],
        ['Ankur Chadha', 'ankur_chadha.jpg', 'ankur_chadha.jpg'],
        ['Franklin Ye', 'franklin_ye.jpg', 'franklin_ye.jpg'],
        ['Isabelle Osorio', 'isabelle_osorio.jpg', 'isabelle_osorio.jpg'],
        ['Julia Nuttall-Smith', 'julia_smith.jpg', 'julia_smith.jpg'],
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
        ['Alan Lin', 'pselogo2.png', 'alan_lin.jpg'],
        ['Anirudh Kamath', 'pselogo2.png', 'anirudh_kamath.jpg'],
        ['Amit Palekar', 'pselogo2.png', 'amit_palekar.jpg']
        ['Anni Wang', 'pselogo2.png', 'anni_wang.jpg'],
        ['Cori Anne Montero', 'pselogo2.png', 'cori_montero.jpg'],
        ['Euna Jo', 'pselogo2.png', 'euna_jo.jpg'],
        ['I-Jung Lin', 'pselogo2.png', 'i-jung_lin.jpg'],
        ['Katherine Gan', 'pselogo2.png', 'katherine_gan.jpg'],
        ['Noel Hayward', 'pselogo2.png', 'noel_hayward.jpg'],
        ['Ryan Li', 'pselogo2.png', 'ryan_li.jpg'],
        ['Sierra Liu', 'pselogo2.png', 'sierra_liu.jpg']
    ]
    brothers.sort(last_name_comparator)


    $('#executive-board-section').append(makeBrothers(eboard))
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
    let html = ""
    for (let i = 0; i < arr.length; i += 4) {
        let selected = arr.slice(i, Math.min(arr.length, i + 4));
        html += '<div class="d-inline-flex flex-row flex-wrap">'
        for (j of selected) {
            if (j != undefined) {
                html += '<span class="flex-fill frame">' +
                        '<img src="./assets/' + j[1] + '">' +
                        '<p>' + j[0] + '</p>' +
                    '</span>';
            }
        }
        html += '</div>'
    }
    // console.log(html)
    return html
}

function last_name_comparator(a, b) {
    console.log(a, b, String(a[0].split(" ")[1]).localeCompare(String(b[0].split(" ")[1])))
    a = String(a[0].split(" ").pop())
    b = String(b[0].split(" ").pop())
    return a.localeCompare(b)
}
