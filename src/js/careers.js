$(document).ready(function() {
    $.ajaxSetup({
        async: false
    });
    data = getData()
    $('#content-table').DataTable({
        data: data[0],
        "order": [[ 5, "desc" ]]
    });

    $('#internships-table').DataTable({
        data: data[1],
        "order": [[ 5, "desc" ]]
    });
});

function getData() {
    let sheetID = "1O25K6kRSB93Q8uXVfPF57MyrtEphdRS9XWVkM6js540"
    let prefix = "https://spreadsheets.google.com/feeds/list/"
    let postfix = "/public/values?alt=json"

    let people = []
    let internships = []
    for (let i = 1; i < 8; i++) {
        let spreadsheetURL = prefix + sheetID + "/" + i.toString() + postfix
        $.getJSON(spreadsheetURL, function(data) {
            let title = data.feed.title.$t
            for (let d of data.feed.entry) {
                if (title.includes("Internships")) {
                    internships.push([d.gsx$name.$t, d.gsx$company.$t, d.gsx$position.$t, d.gsx$category.$t, d.gsx$location.$t, title.slice(-4)])
                } else if (title.includes("FullTime")) {
                    people.push([d.gsx$name.$t, d.gsx$company.$t, d.gsx$position.$t, d.gsx$category.$t, d.gsx$location.$t, title.slice(-4)])
                }
            }
        });
    }

    return [people, internships]
}
