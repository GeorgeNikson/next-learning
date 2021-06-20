export default function Echo(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(
    JSON.stringify({
      message: req.query.message ?? "Base message",
    })
  );
}
