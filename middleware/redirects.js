export default function(req, res, next) {
  const redirects = [
    {
      from: "/", 
      to: "/cart",
    }
  ];

  const redirect = redirects.find((r) => r.from === req.url);

  if (redirect) {
    res.writeHead(301, { Location: redirect.to });
    res.end();
  } else {
    next();
  }
}
