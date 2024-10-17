import requests

# API endpoint for getting weather information
url = "http://api.openweathermap.org/data/2.5/weather"

# Parameters to be sent to the API
params = {
    "q": "London",  # City name
    "appid": "your_api_key",  # Replace with your actual API key
    "units": "metric"  # Get temperature in Celsius
}

# Make the API request
response = requests.get(url, params=params)

# Check if the request was successful
if response.status_code == 200:
    # Parse the JSON data
    weather_data = response.json()
    print(f"Current temperature in {weather_data['name']}: {weather_data['main']['temp']}°C")
else:
    print(f"Failed to retrieve data: {response.status_code} - {response.text}")
