$(document).ready(function() {
    $.ajaxSetup({
        async: false
    });
    people = getData()
    console.log(people, "hello")
    $('#content-table').DataTable({
        data: people
    });


});

function getData() {
    let sheetID = "1O25K6kRSB93Q8uXVfPF57MyrtEphdRS9XWVkM6js540"
    let prefix = "https://spreadsheets.google.com/feeds/list/"
    let postfix = "/public/values?alt=json"

    var people = []
    for (let i = 1; i < 8; i++) {
        let spreadsheetURL = prefix + sheetID + "/" + i.toString() + postfix
        $.getJSON(spreadsheetURL, function(data) {
            console.log(data, people, i)
            for (let d of data.feed.entry) {
                if (d.hasOwnProperty('gsx$name')) {
                    people.push([d.gsx$name.$t, d.gsx$position.$t, d.gsx$category.$t, d.gsx$location.$t])
                }
            }
        });
    }

    return people
}
