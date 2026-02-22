$files = @(
    @{Path="src/components/ui/IconButton/icon-button.tsx"; NewName="IconButton.tsx"},
    @{Path="src/components/ui/ScrollTopButton/scroll-top-button.tsx"; NewName="ScrollTopButton.tsx"},
    @{Path="src/layout/Main/Destaques/highlights.tsx"; NewName="Highlights.tsx"},
    @{Path="src/layout/Main/Explicacao/example.tsx"; NewName="Example.tsx"},
    @{Path="src/layout/Main/Introducao/intro.tsx"; NewName="Intro.tsx"},
    @{Path="src/layout/Main/Sobre/about.tsx"; NewName="About.tsx"},
    @{Path="src/layout/Main/main.tsx"; NewName="Main.tsx"}
)

foreach ($file in $files) {
    if (Test-Path $file.Path) {
        $temp = $file.Path + ".tmp"
        Move-Item -Path $file.Path -Destination $temp
        Move-Item -Path $temp -Destination (Join-Path (Split-Path $file.Path) $file.NewName)
        Write-Host "Renamed $($file.Path) to $($file.NewName)"
    } else {
        Write-Host "File not found: $($file.Path)"
    }
}
