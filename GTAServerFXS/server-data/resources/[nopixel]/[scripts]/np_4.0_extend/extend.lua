CreateThread(function()
    while true do
        ExtendWorldBoundaryForPlayer(
            -100000000000000000000000.0,
            -100000000000000000000000.0,
            100000000000000000000000.0
        )  
        ExtendWorldBoundaryForPlayer(
            100000000000000000000000.0,
            100000000000000000000000.0,
            100000000000000000000000.0
        ) 
		Wait(0)
    end
end)