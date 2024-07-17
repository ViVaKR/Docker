# MSSQL

## Install

```bash

# Intel
docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=비밀&8번호#' -e 'TZ=Asia/Seoul' -e MSSQL_COLLATION=korean_wansung_ci_as --name viv-sql --hostname viv-sql -p 59173:1433 -v '/home/vivakr/Docker/MSSQL/Data:/var/opt/mssql/data' -d --restart unless-stopped mcr.microsoft.com/mssql/server:2022-latest

# Apple M1
docker run --cap-add SYS_PTRACE -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=<비밀123번호>' -e 'MSSQL_PID=Developer' -e 'TZ=Asia/Seoul' -e 'MSSQL_COLLATION=KOREAN_WANSUNG_CI_AS' -p 14333:1433 -v '/Users/vivakr/Docker/MSSQL/Data:/var/opt/mssql/data' --name viv-mssql --hostname mssql -d --restart unless-stopped mcr.microsoft.com/azure-sql-edge

```

```bash
docker scout quickview mcr.microsoft.com/azure-sql-edge:latest
```
