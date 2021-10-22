#include "DHT.h"
#define dht_type DHT11 //define qual c tipo de senscr DHIxx que se esté utilizando 
int dht_pin = A1;
DHT dht_1 = DHT (dht_pin, dht_type); //pode-se coniigurar diversos sensores DHt.h
void setup()
{
Serial.begin(9600); 
dht_1.begin();
}

void loop()
{
float umidade = dht_1.readHumidity();
float temperatura = dht_1.readTemperature();
 if (isnan(temperatura) or isnan (umidade))
{
Serial.println("erro ao ler o DHT");
}
else
{
Serial.print ("umidade: ");
Serial.print (umidade - 10);
Serial.println ("%");
Serial.print ("temperatura: "); 
Serial.print (temperatura - 12);
Serial.println ("°c");

}
delay(2000);
}
