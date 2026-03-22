> Note: Your project might need to be more complex! This is a very basic project to get you to understand how to make a projedct etc etc blah blah every kit has a bunch of modules make something creative! Check [project submissions 

3/21
I wanted to make a tamagatchi! add reasons

1. I realized that I want to try to build a polished breadboard prototype of my [Tamagatchi](https://github.com/TaniWanKenobi/tamagotchi) link here

2. first I got my ESP32. I used the image on link and found that even after researching I couldnt find the exact schematic. Places to research include SnapMagic and Ultra Librarian hyperlink these I also couldnt use tinkercad for this as it doesnt have the electronics I want to use. so I made a kicad schematic oh no I lost all progress guess I gotta restart. I finally fginished making the symbol! I did this by referencing the image in the link. 

![esp32_schematic](https://files.catbox.moe/ubk8uk.png)


45 minutes

The next things I want to add are an OLED so I can see my pet! 

Initially I thought I might need to use pull up resisiters, but after some research the module migh thave onboard resisters but jusdt for good practice I add them. my option s are 220, 1k, and 10k, and from resarch 4.7k is hbest, and 1k is closest, so I use it. 

Wait a second, is a breadboard big enough for an esp32 itself? afer doing some testing, a bent wire works perfectly! It fits under the esp32 and my tests showed that it fills the circuit and lights the bulb. 

I found the display via reverse google search here: https://www.displaymodule.com/products/1-29-inch-oled-graphic-display-128x64-with-i2c. I found the datasheet on there at https://cdn.shopify.com/s/files/1/0264/7629/files/DM-OLED13-663_Datasheet.pdf?v=1659336402, and realized I need external pull ups for sure because intrernal pullups arent specified there.

![OLED](https://files.catbox.moe/z837ly.png)

According to https://github.com/espressif/arduino-esp32/blob/master/variants/esp32/pins_arduino.h, 

> static const uint8_t SDA = 21;

> static const uint8_t SCL = 22;

That means I connect and SDA to 21 and SCL to GPIO 22.

![OLED_ESP32_Wiring](https://files.catbox.moe/h4g1ne.png)

30 minutes

 https://lonelybinary.com/en-us/blogs/tutorial/internal-pull-up-and-pull-down says tghat the internal pullups exist and are at 45k which is also why we didnt use them for the oled cuz then not enough current reaches bc 45k takes very much power.

 For this, I decided to use an **active‑low** button layout (which is the most common approach).

Each button connects one side to **GND** and the other to a **GPIO pin** with the XIAO's **internal pull‑up** enabled. This makes the pin read **HIGH** when the button is idle, and **LOW** when the button is pressed.

<details>
<summary>What does "active-low" mean?</summary>

"Active-low" means the button is considered "pressed" when the signal goes LOW (0V / GND). When the button is not pressed, the internal pull-up resistor keeps the pin HIGH (3.3V). This is the most common button wiring approach because it's simple: you only need the button and a ground connection, no extra resistors.

</details>

![Schematic+Buttons](https://files.catbox.moe/w7xrp7.png)

5 minutes

This feels a little boring though... lemme see whats in the kit so I can spice this up

> Note: I suggest using the arduino kit! It has more stuff and u can make wayyy cooler projects than what I am making right now

ok so I want to add buzzing cuz t amagatchis have that, and I 2ant to add LEDS, and I wnat to add smth with the pentuioneter bc spinny

I also added a buzzer from [here](https://www.lcsc.com/product-detail/C49246964.html)! It seems similar to the kit. 

The buzzer is wired with one pin to a GPIO output and the other to GND, letting the GPIO drive it with a square‑wave tone.

![+Buzzer](https://cdn.hackclub.com/019d1200-29a7-73d7-949d-e60543907f88/image.png)

5 Minutes

I figure its a good idea to add the components to the breadboard while I do this. I found a 830 hole breadboard on grabcad and downloaded it, and imported it into onshape. I did that to everything else, and assembled it together. THis took me 20 minutes in total.

![](https://cdn.hackclub.com/019d120e-ac13-7434-9f3d-9bf0570ce533/image.png)

time took 20 minurtes

I thought it would be cool if the photosnstitive resistor module could be used to make it tired when its dark. 

After a suprisingly long amoutn of research I finally found this.

https://docs.cirkitdesigner.com/component/c5b63eb7-ba5b-4e50-92dd-def6c9780d9f/photosensitive-sensor-module-digital-light-intensity-detection

Findint th elink alone took 10 minutes somehow! Thankfully, the wiring is simple. I will make a schematic symbol for this as well though.

![](https://cdn.hackclub.com/019d1233-c8d9-7eaa-94d8-2bdbafd1a1f6/image.png)

This one took 7.5 minutes, due to some errors I ran into while attempting to create my library

Alas, it all got deleted again. Im running into a bunch of errors here. Creating a new schematic completly isnt working for me, I think I need to import a random schematic and work with that. 

That took me another 45 minutes! It turns out, the parent symbol is called "photomod" but the sub-symbols are named "TFT_MSP1803_0_1" and "TFT_MSP1803_1_1". They must match the parent name.

The wiring itself was pretty simple 

![+Photo](https://cdn.hackclub.com/019d124c-fdbc-7e55-a302-f74ae2b33329/image.png)

total 1h



