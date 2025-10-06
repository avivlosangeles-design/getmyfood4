[build]
  publish = "."
  functions = "netlify/functions"
  command = "echo 'Building site'"

[functions]
  node_bundler = "esbuild"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
