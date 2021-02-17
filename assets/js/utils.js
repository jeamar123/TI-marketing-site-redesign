export const isEmpty = value => !(value && (value.length || Object.keys(value).length))

export const shortenText = (text, symbolsQty) => text.length <= symbolsQty ? text : `${text.split('').splice(0, symbolsQty).join('')}...`

export const capitalizeFirstLetter = text => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

export const transformForm = formObj => {
    return Object.keys(formObj).reduce((acc, cur) => {
        return {...acc, [cur]: formObj[cur].value }
    }, {});
}
