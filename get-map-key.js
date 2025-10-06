exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*"
    },
    body: process.env.AZURE_MAPS_KEY
  };
};
