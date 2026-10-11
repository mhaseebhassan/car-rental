$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$outDir = "C:\Users\muham\OneDrive\Desktop\dubai-car-rental\screenshots"

if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir | Out-Null
}

$targets = @(
    @{ name = "home-desktop-1920.png"; url = "http://localhost:3001/"; w = 1920; h = 1080 },
    @{ name = "home-laptop-1280.png"; url = "http://localhost:3001/"; w = 1280; h = 900 },
    @{ name = "home-tablet-768.png"; url = "http://localhost:3001/"; w = 768; h = 1024 },
    @{ name = "home-mobile-390.png"; url = "http://localhost:3001/"; w = 390; h = 844 },
    @{ name = "home-mobile-360.png"; url = "http://localhost:3001/"; w = 360; h = 780 },
    @{ name = "fleet-desktop-1920.png"; url = "http://localhost:3001/fleet"; w = 1920; h = 1080 },
    @{ name = "fleet-mobile-390.png"; url = "http://localhost:3001/fleet"; w = 390; h = 844 },
    @{ name = "detail-desktop-1920.png"; url = "http://localhost:3001/fleet/ferrari-f8-tributo"; w = 1920; h = 1080 },
    @{ name = "detail-mobile-390.png"; url = "http://localhost:3001/fleet/ferrari-f8-tributo"; w = 390; h = 844 },
    @{ name = "monthly-desktop-1920.png"; url = "http://localhost:3001/monthly-rental"; w = 1920; h = 1080 },
    @{ name = "airport-desktop-1920.png"; url = "http://localhost:3001/airport-delivery"; w = 1920; h = 1080 },
    @{ name = "contact-desktop-1920.png"; url = "http://localhost:3001/contact"; w = 1920; h = 1080 }
)

foreach ($t in $targets) {
    $outFile = Join-Path $outDir $t.name
    Write-Host "Capturing $($t.name)..."
    Start-Process -FilePath $chrome -ArgumentList @(
        "--headless",
        "--screenshot=$outFile",
        "--window-size=$($t.w),$($t.h)",
        "--hide-scrollbars",
        $t.url
    ) -Wait
    $bytes = (Get-Item $outFile).Length
    Write-Host "Done $($t.name): $bytes bytes"
}

Write-Host "All screenshots captured successfully."
