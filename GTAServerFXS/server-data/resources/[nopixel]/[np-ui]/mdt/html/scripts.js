let firstOpen = true;
let mdtUrl = null;
let opened = false;
let transparent = false;

$(document).ready(function () {
    function closeAll() {
        $("html").css('display', "hidden");
        $(".container").css('transform', 'translateY(100vh)');

        opened = false;
        const mdt = document.getElementById('mdt');
        mdt.contentWindow.postMessage({
            resource: 'mdt',
            type: 'mdt:close',
        }, '*');
    }

    async function openContainer(requestData) {
        $("html").css('display', "block");
        $(".container").css('transform', 'translateY(100vh)');

        if (firstOpen) {
            firstOpen = false;
            $("#mdt").attr("src", mdtUrl + "/internal-login?accessToken=" + requestData.accessToken);
            await new Promise(r => setTimeout(r, 1000));
        }
        $(".container").css('transform', 'translateY(0%)');

        const mdt = document.getElementById('mdt');
        mdt.contentWindow.postMessage({
            resource: 'mdt',
            type: 'mdt:open',
        }, '*');

        opened = true;
    }

    async function resetAll(item) {
        firstOpen = true;
        opened = false;
        // $("#mdt").attr("src", "https://tempmdt.test/ingame-auth");
        $("#mdt").attr("src", mdtUrl + "/reset-local");

        await new Promise(r => setTimeout(r, 1000));

        $("#mdt").attr("src", "");

        if (item?.open) {
            await new Promise(r => setTimeout(r, 1000));

            openContainer(item.request);
        }
    }

    window.addEventListener('message', async function (event) {
        var item = event.data;

        if (item.event === 'open') {
            if (!item.request) return closeAll();

            mdtUrl = item.url;

            closeAll();
            openContainer(item.request);
        }

        if (item.event == 'close') {
            closeAll();
        }

        if (item.event == 'reset') {
            resetAll(item);
        }

        if (item.event == 'switch') {
            if (!item.request) return resetAll(item);

            mdtUrl = item.url;
            if (firstOpen) {
                firstOpen = false;
                $("#mdt").attr("src", mdtUrl + "/internal-login?accessToken=" + item.request.accessToken);
                await new Promise(r => setTimeout(r, 1000));
            }

            const mdt = document.getElementById('mdt');
            mdt.contentWindow.postMessage({
                resource: 'mdt',
                type: 'mdt:switch',
                accessToken: item.request.accessToken,
            }, '*');
        }
    });

    function _keyup(e) {
        if (e.which == 27) {
            $.post('https://mdt/close', JSON.stringify({}));
            closeAll();
        }
    }

    document.onkeyup = _keyup;

    $(".container iframe").load(function () {
        $(this).contents().keyup(_keyup);
    });

    $(window).on('mousemove', function (e) {
        if (!opened) return;

        if (e.clientY < 20 && !transparent) {
            document.body.style.opacity = "0.4";

            transparent = true;
        } else if (e.clientY > 20 && transparent) {
            document.body.style.opacity = "1";

            transparent = false;
        }
    });
});
