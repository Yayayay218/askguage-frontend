import Api from '../Services/dataService'

function calMonthlyPayment(income, liability, gdsr) {
    return (income / 12) * gdsr / 100 - liability
}

function calPrincipalAmount(monthlyPayment, rate, amortization, income, liability, gdsr) {
    let r = rate / 100 / 12
    let n = amortization * 12
    let tmp = r * Math.pow((1 + r), n) / (Math.pow((1+r), n) - 1)
    return monthlyPayment(income, liability, gdsr) / tmp
}

function getData() {
    let rate, amortization, gdsr;
    const parseApi = new Api(null)
    return new Promise((resolve, reject) => {
        parseApi.getSettings()
            .then(res => {
                res.map(item => {
                    switch (item.name) {
                        case 'gdsr':
                            gdsr = item.value;
                            break
                        case 'rate':
                            rate = item.value;
                            break
                        case 'amortization':
                            amortization = item.value;
                            break
                    }
                })
                resolve({
                    gdsr: gdsr || 0,
                    rate: rate || 0,
                    amortization: amortization || 0
                })
            })
            .catch(err => reject(err))
    })
}
export const estimateAfford = (income, liability, downPayment) => {
    return new Promise((resolve, reject) => {
        getData()
            .then(res => {
                let result = calPrincipalAmount(calMonthlyPayment, res.rate, res.amortization, income, liability, res.gdsr) + downPayment
                resolve(result.toFixed(0))
            })
            .catch(err => reject(err))
    })

}