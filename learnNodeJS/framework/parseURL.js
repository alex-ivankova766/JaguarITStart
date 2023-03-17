module.exports = (baseURL) => (req, res) => {
    const parseURL = new URL(req.url, baseURL);
    const params = {};
    parseURL.searchParams.forEach((value, key) => params[key] = value)
    console.log(parseURL);
    req.pathname = parseURL.pathname;
    req.params = params;
}