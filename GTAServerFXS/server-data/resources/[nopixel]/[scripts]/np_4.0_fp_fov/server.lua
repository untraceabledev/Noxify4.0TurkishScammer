local target_fov = 65.0

Citizen.CreateThread(function()
	SetConvarReplicated("cam_vehicleFirstPersonFOV", target_fov)
end)