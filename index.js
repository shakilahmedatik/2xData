let temp = 5
let defaultCat = ['']
const tableDataManipulator = (cat) => {
    // console.log(defaultCat)
    // console.log(cat);
    // if (defaultCat.includes(cat)) {
    //     console.log('sorry')
    // }
    // defaultCat.push(cat)
    // console.log('after--->', defaultCat);
    // Table cell individual value manipulate
    setTimeout(() => {
        const elem = document.querySelector("#root > div > table > tbody")?.children
        for (let item of elem) {

            item.childNodes[1].innerText = parseFloat(item.childNodes[1].innerText) * temp

        }
        const total = document.querySelector("#root > div > table > tfoot > tr > td:nth-child(2)")

        total.innerText = parseFloat(total.innerText) * temp
    }, 10)


}



tableDataManipulator('Utilities')

const select = document.querySelector("#root > div > div.mb-3 > select")
select.addEventListener('change', function (e) {
    console.log(e.target.value);
    tableDataManipulator(e.target.value)
})
