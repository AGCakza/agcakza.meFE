// This file is purely to allow nft to know about these pages. It should be temporary.
exports.resolvePages = () => {
    try {
        require.resolve('../../../.next/server/pages/_app.js')
        require.resolve('../../../.next/server/pages/_document.js')
        require.resolve('../../../.next/server/pages/_error.js')
        require.resolve('../../../.next/server/pages/index.js')
    } catch {}
}