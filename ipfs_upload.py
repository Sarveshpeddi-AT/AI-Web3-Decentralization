import ipfshttpclient

client = ipfshttpclient.connect()
res = client.add('../flask_api/app.py')
print(f"File uploaded to IPFS with CID: {res['Hash']}")
