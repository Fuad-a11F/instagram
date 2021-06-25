export default function upload_image(e, func) {
    let  item = e.target.files[0]
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
    reader.readAsDataURL(item)
    reader.onload = (ev) => {
        func(ev.target.result)
        return ev.target.result
    }
}