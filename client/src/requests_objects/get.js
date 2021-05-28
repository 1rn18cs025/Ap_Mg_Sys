export default {
    method: "get",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': sessionStorage.getItem('token'),
            }
        }
