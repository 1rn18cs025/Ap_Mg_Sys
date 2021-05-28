const post_obj = {
    method: "post",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': sessionStorage.getItem('token'),
            }
        }
export default post_obj;
