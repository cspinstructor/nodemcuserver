// For the server part, see the corresponing node.js project in github:
// nodemcutest
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>


const char* ssid     = "iot-lab";
const char* password = "pervasive";

//-- Declare your pins here --     

 
void setup() 
{
    Serial.begin(9600);
    
    //-- Set your pinMode here --   
}
 
void loop() 
{      
  if(WiFi.status() != WL_CONNECTED ){
    Serial.println("Wifi not connected...");
    WiFi.begin(ssid, password); 
  } 
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  } 

  Serial.print("Connected to: "); Serial.println(WiFi.SSID());
  Serial.print("Your IP: "); Serial.println(WiFi.localIP());

  int value = getSensorValue();
  
  HTTPClient http;

  //String datatosend = "/?sensor=" + String(value);
  String datatosend = "/?sensor1=111&sensor2=222";
  Serial.print("Sensor value: "); Serial.println(datatosend);

  //-- Change the IP address below to your server's IP --
  http.begin("192.168.1.35", 3000, datatosend);
  int httpCode = http.GET();
  
  if(httpCode > 0){
    Serial.printf("GET code: %d\n", httpCode);
    if(httpCode == HTTP_CODE_OK){
      String response = http.getString();
      Serial.println(response);
    }
  } else {
    Serial.printf("GET failed: error: %s\n", http.errorToString(httpCode).c_str());
  }
  http.end();
  delay(10000);
}

int getSensorValue()
{
  //-- Put your code for reading sensor data here --
  return 1234799;
}



