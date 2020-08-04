$(document).ready(function() {
    let sheetID = "1O25K6kRSB93Q8uXVfPF57MyrtEphdRS9XWVkM6js540"
    let prefix = "https://spreadsheets.google.com/feeds/list/"
    let postfix = "/od6/public/values?alt=json"
    let spreadsheetURL = prefix + sheetID + postfix
    people = []
    $.getJSON(spreadsheetURL, function(data) {
        console.log(data)
        // console.log(data.feed.entry);
        // console.log("---------")
        for (d of data.feed.entry) {
            people.push([d.gsx$name.$t, d.gsx$position.$t, d.gsx$category.$t, d.gsx$location.$t])
        }
        // console.log("---------")
        console.log(people)
        $('#content-table').DataTable({
            data: people
        })
    })
    console.log("hello")

});
