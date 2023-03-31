export const checkImageURL = (url) => {
    if (!url) return false
    else {
        const regEx = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$','i')
        return regEx.test(url)
    }
}