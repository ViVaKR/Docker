# WSL

## Change Docker Data

## 목록확인

`wsl --list -v`
`wsl --shutdown`

## 저장위치 확인

`Get-ChildItem "HKCU:\Software\Microsoft\Windows\CurrentVersion\Lxss" -Recurse`

[ docker-desktop-data ]
wsl --export docker-desktop-data "Y:\Docker\wsl\data\docker-desktop-data.tar"
wsl --unregister docker-desktop-data
wsl --import docker-desktop-data "F:\Docker\Data" "F:\Docker\Data\docker-desktop-data.tar" --version 2

[ Ubuntu ]
wsl --import Ubuntu "F:\Docker\Wsl" "F:\Docker\Wsl\Ubuntu.tar" --version 2
