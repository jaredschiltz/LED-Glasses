//Implementing cool algoriths for LED glasses
//https://www.tweaking4all.com/hardware/arduino/adruino-led-strip-effects/

const pixelSize = 10
const LED_ROWS = 8
const LED_COLS  = 24
const X_OFFSET = 200
const Y_OFFSET = 50

let LED_Array = new Array(LED_ROWS)

function setup() {
	createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < LED_ROWS; i++)
    {
        LED_Array[i] = new Array(LED_COLS)
    }
    noStroke()
    frameRate(60)

}

function draw() {
    background(0)

    //Algorithm here:
    //flashRandomColorPixels()
    strobe(color(255,0,0), 5)


//Write out matrix data to display
    for (let i = 0; i < LED_ROWS; i++)
    {
        for(let j = 0; j < LED_COLS; j++)
        {
            fill(LED_Array[i][j]) 
            rect(j * (pixelSize * 2) + X_OFFSET, i * (pixelSize * 2) + Y_OFFSET, pixelSize, pixelSize)
         }
    }



}

function flashRandomWhitePixels()
{
       for (let i = 0; i < LED_ROWS; i++)
    {
        for(let j = 0; j < LED_COLS; j++)
        {
            if (random(1) > 0.5)
            {
             LED_Array[i][j] = color(255)
            }
            else
            {
             LED_Array[i][j] = color(0)
            }
        }
    } 
}

function flashRandomColorPixels()
{
      for (let i = 0; i < LED_ROWS; i++)
    {
        for(let j = 0; j < LED_COLS; j++)
        {
            let red = random(256)
            let green = random(256)
            let blue = random(256)
            {
             LED_Array[i][j] = color(red,green,blue)
            }
        }
    } 
}

function sineColors()
{
     for (let i = 0; i < LED_ROWS; i++)
    {
        for(let j = 0; j < LED_COLS; j++)
        {
            let red = random(256)
            let green = random(256)
            let blue = random(256)
            {
             LED_Array[i][j] = color(red,green,blue)
            }
        }
    } 
}

function strobe(strobeColor, rate)
{
    if (typeof strobe.staticCount == 'undefined')
    {
        strobe.staticCount = 0;
    }
    else
    {
        if (strobe.staticCount == rate)
        {
            strobe.staticCount = 0
        }
        else
        {
            strobe.staticCount++;
        }
    }

    if (typeof strobe.staticColor == 'undefined')
    {
        strobe.staticColor = false;
    }
    else
    {
        if (strobe.staticCount == rate)
        {
            strobe.staticColor = !strobe.staticColor
        }
    }



      for (let i = 0; i < LED_ROWS; i++)
    {
        for(let j = 0; j < LED_COLS; j++)
        {
            {
                if (strobe.staticColor)
                {
                    LED_Array[i][j] = color(strobeColor)
                 }
                else
                {
                LED_Array[i][j] = color(0)

                }
            }
        }
    } 


}
