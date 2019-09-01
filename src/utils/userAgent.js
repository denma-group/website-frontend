const userAgent = userAgentHeader => /Mobi|Android/i.test(userAgentHeader);

export default userAgent;
