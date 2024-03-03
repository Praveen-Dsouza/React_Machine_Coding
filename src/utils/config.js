export function numberWithCommas(x) {
    if (x) return `₹ ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export function numberLimit(val) {
    if (!val) return
    return Math.min(100, Math.max(0, val))
}