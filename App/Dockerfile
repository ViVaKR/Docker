# ---------- Build Stage ----------
FROM mcr.microsoft.com/dotnet/sdk@sha256:a5dd7352c0c058a6f847c95a1147b060e95a532444f14b34d8fa9aaa0a76702f AS build
WORKDIR /App

# Copy project file and restore dependencies
COPY DotNet.Docker/*.csproj ./DotNet.Docker/
RUN dotnet restore DotNet.Docker/DotNet.Docker.csproj

# Copy the rest of the source and publish
COPY DotNet.Docker/ ./DotNet.Docker/
WORKDIR /App/DotNet.Docker
RUN dotnet publish -c Release -o /App/out

# ---------- Runtime Stage ----------
FROM mcr.microsoft.com/dotnet/aspnet@sha256:ad4acf911eada1bcbfd0dd9f3fa514143fba8654ca8844df9032471adc2f9bd9
WORKDIR /App
COPY --from=build /App/out .
ENTRYPOINT ["dotnet", "DotNet.Docker.dll"]
