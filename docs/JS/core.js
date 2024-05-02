function tabchange(targetId) {
    $('section').addClass('hide');
    $('.nav-link').removeClass('active');
    $(`nav a[tab_Id="${targetId}"]`).addClass('active');
    $(`#${targetId}`).removeClass('hide');
    var urlParams = new URLSearchParams(window.location.search);
    urlParams.set('page', targetId);
    history.replaceState(null, null, '?' + urlParams.toString())
    if ($('#menuToggle').find('span').hasClass('fa-times')) {
        $('#menuToggle').trigger('click');
    }
}


// Toggle between bars and times icons
$('#menuToggle').click(function () { $(this).find('span').toggleClass('fa-bars fa-times'); });

function animateValue(obj, start, end, duration) {
    return new Promise(resolve => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.text(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                resolve();
            }
        };
        window.requestAnimationFrame(step);
    });
}


async function copyContent(url) {
    try {
        const response = await fetch(baseUrl + url);
        if (!response.ok) {
            throw new Error('Failed to load file: ' + response.status);
        }
        const text = await response.text();
        await navigator.clipboard.writeText(text).then(
            showToast('Content copied to clipboard successfully.', true));
    } catch (error) {
        console.error(error);
        showToast('Error: Failed to fetch or copy content.', false); // Show error message
    }
}

function showToast(message, isSuccess) {
    const toastBody = document.getElementById('toastBody');
    const myToast = new bootstrap.Toast(document.getElementById('myToast'));
    toastBody.textContent = message;
    if (isSuccess) {
        toastBody.classList.remove('text-danger');
        toastBody.classList.add('text-success');
    } else {
        toastBody.classList.remove('text-success');
        toastBody.classList.add('text-danger');
    }
    myToast.show();
}