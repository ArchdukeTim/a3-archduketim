// Add some Javascript code here, to run on the front end.
function submitForm(e) {
    // prevent default form action from being carried out
    e.preventDefault()
    let q = $("#query").val()
    let params = $.param({
        q: q
    })
    fetch(`/search?${params}`, {
            credentials: 'include'
        })
        .then((res) => res.json())
        .then((data) => {
            if ('error' in data) {
                alert(data.error.message);
                return;
            }
            $('.results-table tbody').remove()
            $('.results-table thead').css('visibility', 'visible')
            let tbody = $('<tbody />').appendTo($('.results-table'))
            for (let track of data.tracks.items) {
                $('<tr>').appendTo(tbody)
                    .append(`<td>${track.name}</td>`)
                    .append(`<td>${track.artists[0].name}</td>`)
                    .append(`<td>${track.album.name}</td>`)
                    .append(`<td align="right">${msToTime(track.duration_ms)}</td>`)
                    .append(`<td style="display: none">${track.id}</td>`)
            }
        }).catch((err) => console.log(err))
    return false;
}

const msToTime = function(ms) {
    return new Date(ms).toISOString().slice(14, -5);
}

window.onload = function() {
    document.querySelector('#queryForm').addEventListener('submit', submitForm);
    $(".results-table").on('click', 'tr', (e) => {
        let $this = e.currentTarget
        $.post({
                url: '/add',
                data: {
                    id: $this.children[4].innerHTML
                },
                credentials: 'include'
            })
            .fail((err) => {
                let message = err.message || "Could not add song to queue"
                let snackbar = $("#snackbar")
                snackbar.addClass("show")
                snackbar.html(message)
                // After 3 seconds, remove the show class from DIV
                setTimeout(() => snackbar.removeClass("show"), 3000);
            })
            .done((data) => {
                let message = data.message
                let snackbar = $("#snackbar")
                snackbar.addClass("show")
                snackbar.html(message)
                // After 3 seconds, remove the show class from DIV
                setTimeout(() => snackbar.removeClass("show"), 3000);
            })
    })
}
