local sliderSettings = {
    count = "12",
    data = nil
}

NPX.Procedures.register("np-liquidlibrary:ll:getSliders", function()
    return sliderSettings
end)
