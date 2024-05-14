const request = new XMLHttpRequest();
function sendMessage(email, content) {
    request.open("POST", "https://discord.com/api/webhooks/1239968580167008406/BIP7afKBEsBjXz0u7wBHRqXqTMK5J2Epk9w8VjP6C_wDlKIl8BnZg_CWhRCir0O8xU05");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        email: email,
        content: content
    }

    request.send(JSON.stringify(params));
}

export default sendMessage