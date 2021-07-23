export default function upload_image(e, callback) {
    let  item = e.target.files[0]
    let result = ''
    if (!['image/jpeg', 'image/png'].includes(item.type)) {
        alert('kek')
        e.target.value = ''
        return
    }
    if (item.size > 5 * 1024 * 1024) {
        alert('lol kek')
        return
    }

    let reader = new FileReader()
    reader.onload = (ev) => {
        callback(ev)
    }
    reader.readAsDataURL(item)
    
    return result
}