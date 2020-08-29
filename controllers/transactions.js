// @desc Get all transactions
// @route GET /api/vi/transactions
// @accses public

exports.getTransactions = (req, res, next) =>{
    res.send('GET transactions')
}

// @desc Add transactions
// @route POST /api/vi/transactions
// @accses public

exports.addTransactions = (req, res, next) =>{
    res.send('POST transactions')
}

// @desc Delete transactions
// @route DELETE /api/vi/transactions/:id
// @accses public

exports.deleteTransactions = (req, res, next) =>{
    res.send('DELETE transactions')
}