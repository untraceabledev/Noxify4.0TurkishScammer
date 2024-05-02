NPX.Events.onNet('np-miscscripts:puke', function()
  PlaySoundFromEntity(-1, 'Puke', PlayerPedId(), 'TREVOR_PUKEINTOFOUNT_SOUNDS', false, 0);
  TriggerServerEvent('fx:puke')
  TriggerEvent('animation:PlayAnimation','outofbreath')
end)