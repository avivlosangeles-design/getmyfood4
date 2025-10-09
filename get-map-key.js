exports.handler = async (event, context) => {
  // Debug: Log environment variables
  console.log('Env vars:', Object.keys(process.env));
  
  const key = process.env.AZURE_MAPS_KEY;
  
  if (!key) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "AZURE_MAPS_KEY not found in environment" }),
      headers: { 'Content-Type': 'application/json' }
    };
  }

  return {
    statusCode: 200,
    body: key,
    headers: { 
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-store' // Prevent caching
    }
  };
};
