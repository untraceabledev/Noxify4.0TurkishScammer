NPX.Procedures.register("np-liquidlibrary:geturl", function(pSrc, board)
    local randomUrls = {
        ["chalkboard"] = "https://cdn.discordapp.com/attachments/1197058371241656363/1197063710309634048/noxsfy-banner.png?ex=65b9e774&is=65a77274&hm=e3fb6308515149ce97a274970615282242280c31192d722507cd9b4e8d208d0d&",
        ["meeting"] = "https://cdn.discordapp.com/attachments/1197058371241656363/1197063710309634048/noxsfy-banner.png?ex=65b9e774&is=65a77274&hm=e3fb6308515149ce97a274970615282242280c31192d722507cd9b4e8d208d0d&"
    }

    return randomUrls[board]
end)