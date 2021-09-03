
export const quoteLoaded = (newQuote) => {
    return {
        type: 'QUOTES_LOADED',
        payload: newQuote
    }
}
