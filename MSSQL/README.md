# MSSQL

## Install

```bash

  # Intel
docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=비밀&8번호#' -e 'TZ=Asia/Seoul' -e MSSQL_COLLATION=korean_wansung_ci_as --name viv-sql --hostname viv-sql -p 59173:1433 -d --restart unless-stopped mcr.microsoft.com/mssql/server:2022-latest

  # Apple M1
docker run --cap-add SYS_PTRACE -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=B9037!m8947#' -e 'MSSQL_PID=Developer' -e 'TZ=Asia/Seoul' -e 'MSSQL_COLLATION=KOREAN_WANSUNG_CI_AS' -p 59273:1433 -v '/Users/vivakr/Docker/MSSQL/Data:/var/opt/mssql/data' --name viv-sql --hostname viv-sql -d --restart unless-stopped mcr.microsoft.com/azure-sql-edge

```
