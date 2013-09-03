// ----------------------------------------
// Actual game code goes here.

// Global vars
fps = null; 
// ----------------------------------------


function GameTick(elapsed)
{
	fps.update(elapsed);
}

window.onload = function () {
	fps = new FPSMeter("fpsmeter", document.getElementById("fpscontainer"));
	GameLoopManager.run(GameTick);
};
