from google.cloud import storage

# Authenticate to Google Cloud (replace 'path-to-your-service-account-key.json' with the actual path)
storage_client = storage.Client.from_service_account_json('../Downloads/arctic-joy-399823-68aa4f629b04.json')

# Define your bucket name
bucket_name = 'example_pool_bucket'


@app.route('/pool.py', methods=['POST'])
def upload_to_gcs():
    # Process form data here
    phone_number = request.form['pnumber']
    school = request.form['school']

    # Upload data to Cloud Storage
    data_to_upload = f"Phone Number: {phone_number}, School: {school}"
    blob = storage_client.bucket(bucket_name).blob('form_data.txt')
    blob.upload_from_string(data_to_upload)

    return 'Data uploaded successfully to Google Cloud Storage!'

if __name__ == '__main__':
    app.run()