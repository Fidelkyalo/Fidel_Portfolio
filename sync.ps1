$path = Get-Location
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $path
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

Write-Host "Monitoring changes in $path..." -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop." -ForegroundColor Yellow

$action = {
    $file = $EventArgs.FullPath
    $name = $EventArgs.Name
    $changeType = $EventArgs.ChangeType
    
    # Ignore node_modules, .git, and dist
    if ($file -match "node_modules|\.git|dist") { return }

    Write-Host "Detected $changeType: $name" -ForegroundColor Green
    
    git add .
    git commit -m "Auto-sync: $name ($changeType)"
    git push origin main
    
    Write-Host "Changes pushed to GitHub!" -ForegroundColor Cyan
}

Register-ObjectEvent $watcher "Changed" -Action $action
Register-ObjectEvent $watcher "Created" -Action $action
Register-ObjectEvent $watcher "Deleted" -Action $action
Register-ObjectEvent $watcher "Renamed" -Action $action

while ($true) { Start-Sleep -Seconds 5 }
