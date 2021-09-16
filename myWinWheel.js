// Create new wheel object specifying the parameters at creation time.
let theWheel = new Winwheel({
    'numSegments'  : 8,    // Specify number of segments.
    'outerRadius'  : 300,   // Set outer radius so wheel fits inside the background.
    'textFontSize' : 28,    // Set font size as desired.
    'segments'     : [      // Define segments including colour and text.
       {'fillStyle' : '#eae56f', 'text' : 'Prize 1'},
       {'fillStyle' : '#89f26e', 'text' : 'Prize 2'},
       {'fillStyle' : '#7de6ef', 'text' : 'Prize 3'},
       {'fillStyle' : '#e7706f', 'text' : 'Prize 4'},
       {'fillStyle' : '#eae56f', 'text' : 'Prize 5'},
       {'fillStyle' : '#89f26e', 'text' : 'Prize 6'},
       {'fillStyle' : '#7de6ef', 'text' : 'Prize 7'},
       {'fillStyle' : '#e7706f', 'text' : 'Prize 8'},
    ],
    'animation' : {         // Specify the animation to use.
        'type'     : 'spinToStop',
        'duration' : 5,     // Duration in seconds.
        'spins'    : 10,    // Number of complete spins.
        'callbackFinished' : alertPrize
    }
});

const spinBtn = document.querySelector('#spin-btn');

// Click handler for spin button.
function startSpin()
{
    spinBtn.disabled = true;
    theWheel.startAnimation();
}

// Function for reset button.
function resetWheel()
{
    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    // theWheel.draw();                // Call draw to render changes to the wheel.
    spinBtn.disabled = false;
}

// Called when the spin animation has finished by the callback feature of the wheel
function alertPrize(indicatedSegment)
{
    alert("당첨! : " + indicatedSegment.text);
    // 원래 resetWheel()에 있던 것들
    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    spinBtn.disabled = false;
}

/*
    Winhweel.js basic code wheel example by Douglas McKechie @ www.dougtesting.net
    See website for tutorials and other documentation.
    The MIT License (MIT)
    Copyright (c) 2016 Douglas McKechie
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/