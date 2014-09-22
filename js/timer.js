// Declaring class "Timer"
function Timer()
{        
    // Property: Frequency of elapse event of the timer in millisecond
    this.Interval = 10
    
    // Property: Whether the timer is enable or not
    this.Enable = new Boolean(false);
    
    // Counter var
    this.count = 0;
    
    // Member variable: Hold interval id of the timer
    var timerId = 0;
    
    // Member variable: Hold instance of this class
    var thisObject;
    
    // Function: Start the timer
    this.Start = function()
    {
        this.Enable = new Boolean(true);

        thisObject = this;
        if (thisObject.Enable)
        {
            thisObject.timerId = setInterval( // Count is incremented in milliseconds
            function()
            {
                thisObject.count = thisObject.count + 10;
                //alert("happened");
            }, thisObject.Interval); 
        }
    };
    
    // Function: Stops the timer
    this.Stop = function()
    {            
        thisObject.Enable = new Boolean(false);
        clearInterval(thisObject.timerId);
    };

};