-- call this event when receiving call
RegisterCommand("phone:call-receiving", function()
    SendUIMessage({
        source = "np-nui",
        app = "phone",
        data = {
            action = "call-receiving",
            number = 1231231234,
            callId = 1
        }
    });
end, false)

RegisterCommand("phone:call-dialing", function()
    SendUIMessage({
        source = "np-nui",
        app = "phone",
        data = {
            action = "call-dialing",
            number = 1231231234,
            callId = 1
        }
    })
    isDialing = true
end, false)

RegisterCommand("phone:call-in-progress", function()
    SendUIMessage({
        source = "np-nui",
        app = "phone",
        data = {
            action = "call-in-progress",
            number = 1231231234,
            callId = 1
        }
    })
end, false)

RegisterCommand("phone:call-inactive", function()
    SendUIMessage({
        source = "np-nui",
        app = "phone",
        data = {
            action = "call-inactive",
            number = 1231231234
        }
    })
end, false)

myIdentifiers = 1

RegisterCommand("openPhone", function()
    exports["np-ui"]:openApplication("phone", {
        has_emergency_job = false,
        has_vpn = false,
        has_usb_fleeca = exports["inventory"]:hasEnoughOfItem("heistusb4", 1, false, true),
        has_usb_paleto = exports["inventory"]:hasEnoughOfItem("heistusb1", 1, false, true),
        has_usb_upper = exports["inventory"]:hasEnoughOfItem("heistusb2", 1, false, true),
        has_usb_lower = exports["inventory"]:hasEnoughOfItem("heistusb3", 1, false, true),
        has_usb_racing_create = false,
        has_usb_racing = false,
        has_usb_pd_racing = false,
        racing_alias = false,
        identifiers = false
      })
end, false)